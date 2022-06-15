<script lang="ts">
  import { browser } from '$app/env'
  if (browser) {
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()
  }
</script>

<slot />

<style lang="postcss">
  @import '$lib/assets/styles/main.css';

  :global(body) {
    height: var(--app-height);
  }
</style>
