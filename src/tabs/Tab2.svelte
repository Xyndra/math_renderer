<script>
    import { current_tab } from '../store';
</script>

{#if $current_tab === 2}
    <h1>Welcome to <span class="text-gradient">Tab 2</span></h1>
    <p class="instructions">
        This is Tab 2.
    </p>
{/if}

<style>
    h1 {
        font-size: 3rem;
        font-weight: 800;
        margin: 0;
        color: #eee;
    }
    .text-gradient {
        background-image: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 400%;
        background-position: 0;
    }
    .instructions {
        line-height: 1.6;
        margin: 1rem 0;
        border: 1px solid rgba(var(--accent), 25%);
        background-color: white;
        padding: 1rem;
        border-radius: 0.4rem;
    }
</style>