<script lang="ts">
  import type { ResolvedVideoDetails } from '$lib/types/resolved-data';

  let { data } = $props<{ data: ResolvedVideoDetails }>();

  const href = $derived(
    data.movieDetails
      ? `/movies/${data.movieDetails.id}`
      : ''
  );
</script>

<div>
  {#if data.movieDetails}
    <h2>From <em><a {href}>{data.movieDetails.title}</a></em></h2>
  {/if}
  <iframe
    width="560"
    height="315"
    src="https://www.youtube-nocookie.com/embed/{data.youtubeVideoId}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>

<style lang="scss">
  @use 'src/app' as globals;

  div {
    padding: 0 globals.$main-spacing;
    height: 100%;
  }

  iframe {
    width: 100%;
    height: 70vh;
  }
</style>
