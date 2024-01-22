<script lang="ts">
  let { videoId, fullSize } = $props<{ videoId: string, fullSize?: boolean }>();
</script>

<iframe
  width="560"
  height="315"
  src="https://www.youtube-nocookie.com/embed/{videoId}"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  class:full-size={fullSize}
></iframe>

<style lang="scss">
  @use 'src/app' as globals;

  iframe.full-size {
    width: 100%;
    height: 70vh;
  }
</style>
