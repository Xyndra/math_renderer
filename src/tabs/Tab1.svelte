<script>
    import { current_tab, to_render } from '../store';
</script>

{#if $current_tab === 1}
    <div id="main">
        <h1>Preview</h1>
        <br/>
        <br/>
        <br/>
        <p>(Note that this only exports 200 frames for now)</p>
    </div>
    <button id="export" on:click={() => $to_render = true}><h1>Export to .webm</h1></button>
{/if}

<style>
    #main {
        position: absolute;
        scale: 1.5;
        top: 130px;
        left: 170px;
    }
    #export {
        background-image: linear-gradient(45deg, #2e3471, #221db5 50%, #3700ff 100%);
        border-radius: 17px / 15px ;
        border: 0;
        scale: 1.1;
        transform: translateX(5%);
        padding: 0;
        position: absolute;
        top: 200px;
        left: 40px;
    }
    #export>h1{
        background-image: linear-gradient(45deg, #976824, #ffb600 30%, #ffffff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 400%;
        background-position: 0;
        scale: .9;
    }
    h1 {
        font-size: 3rem;
        font-weight: 800;
        margin: 0;
        background-image: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 400%;
        background-position: 0;
    }
    .instructions code {
        font-size: 0.875em;
        font-weight: bold;
        background: rgba(var(--accent), 12%);
        color: rgb(var(--accent));
        border-radius: 4px;
        padding: 0.3em 0.45em;
    }
    .instructions strong {
        color: rgb(var(--accent));
    }
    p {
        color: white;
        font-size: .7rem;
    }
</style>