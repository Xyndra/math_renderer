<script lang="ts">
    import {onMount} from "svelte";
    import { to_render } from "../store";
    import * as THREE from 'three';
    // @ts-ignore
    import * as CCapture from 'ccapture.js-npmfixed';

    let renderer, scene, camera, capture, isCapturing, captureTime;

    const startCapture = () => {
        captureTime = 0;
        isCapturing = true;
        capture = new CCapture({
            format: 'webm',
            framerate: 60,
        });
        capture.start();
        to_render.set(false);
        console.log(capture);
    };

    const endCapture = () => {
        captureTime = 0;
        isCapturing = false;
        console.log(capture.stop());
        // capture.save( function (blob: Blob ) { blob.arrayBuffer().then((data: ArrayBuffer) => {console.log(webmToMp4(data))})} );
        // @ts-ignore
        capture.save();
    };

    onMount(() => {
        const canvas = document.getElementById('three-canvas');

        renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setPixelRatio( 16/9 );
        renderer.setSize( window.innerWidth, window.innerWidth * 9/16 );
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        camera.position.z = 5;

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);

            if ($to_render && !isCapturing) {
                startCapture();
            } else if (isCapturing) {
                capture.capture(renderer.domElement);
                captureTime++;
                if (captureTime == 200) {
                    endCapture();
                }
            }
        };

        animate();
    });
</script>

<canvas id="three-canvas"></canvas>

<style>
    canvas {
        position: absolute;
        z-index: -1;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>