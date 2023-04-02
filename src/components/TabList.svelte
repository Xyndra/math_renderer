<script>
    import { current_tab } from "../store";
    import {onMount} from "svelte";

    onMount(async () => {
        while (true) {
            switch ($current_tab) {
                case 1:
                    document.getElementById("tab1").style.filter = "brightness(70%)";
                    document.getElementById("tab2").style.filter = "brightness(100%)";
                    document.getElementById("tab3").style.filter = "brightness(100%)";
                    break;
                case 2:
                    document.getElementById("tab2").style.filter = "brightness(70%)";
                    document.getElementById("tab1").style.filter = "brightness(100%)";
                    document.getElementById("tab3").style.filter = "brightness(100%)";
                    break;
                case 3:
                    document.getElementById("tab3").style.filter = "brightness(70%)";
                    document.getElementById("tab1").style.filter = "brightness(100%)";
                    document.getElementById("tab2").style.filter = "brightness(100%)";
                    break;
            }
            await new Promise(r => setTimeout(r, 100));
        }
    });
</script>

<div>
    <button id="tab1" on:click={() => current_tab.set(1)} ><img src="./fontawesome/solid/video.svg" alt="Video"/></button>
    <button id="tab2" on:click={() => current_tab.set(2)} ><img src="./fontawesome/solid/code.svg" alt="Code"/></button>
    <button id="tab3" on:click={() => current_tab.set(3)} ><img src="./fontawesome/regular/circle-play.svg" alt="Animator"/></button>
</div>

<style>
    button {
        scale: 4;
        position: relative;
        top: 15px;
        border-radius: 0 0 10px 10px;
        cursor: pointer;
    }
    img {
        aspect-ratio: 1/1;
        width: 10px;
        filter: invert(100%);
    }
    #tab1 {
        transform: translateX(60%);
        background-color: #f00;
        border-color: #f00;
    }
    #tab2 {
        transform: translateX(132%);
        background-color: #0f0;
        border-color: #0f0;
    }
    #tab3 {
        transform: translateX(203%);
        background-color: #00f;
        border-color: #00f;
    }
    div {
        position: absolute;
        top: 0;
        left: 0;
    }
    * {
        z-index: 999;
    }
</style>