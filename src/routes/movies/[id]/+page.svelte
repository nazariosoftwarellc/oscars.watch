<script lang="ts">
  import CalloutBox from '$lib/components/callout-box.svelte';
  import Credits from '$lib/components/credits.svelte';
  import WatchProviders from '$lib/components/watch-providers.svelte';
  import type { ResolvedMovieDetails } from '$lib/types/resolved-data';
  import trailers from '../../../details/trailers';

  let { data } = $props<{ data: ResolvedMovieDetails }>();
  const bannerUrl = $derived(
    'https://image.tmdb.org/t/p/original' + data.details.backdrop_path
  );
  const trailerId = $derived(trailers[data.details.id]);
</script>

<section id="banner" style="background-image: url('{bannerUrl}')">
  <CalloutBox --margin="0 0 2rem 0">
    <h2 class="rounded">{data.details.title}</h2>
  </CalloutBox>
  <CalloutBox>
    <Credits details={data.details} credits={data.credits} />
  </CalloutBox>
</section>
<section id="main">
  <aside id="watch-providers-container">
    <CalloutBox>
      <WatchProviders response={data.watchProviders} />
    </CalloutBox>
    {#if trailerId}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/{trailerId}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    {/if}
  </aside>
  <div id="movie-content-container">
    {#if data.reviewHtml}
      <h3>Reviews</h3>
      {@html data.reviewHtml}
    {/if}
  </div>
</section>

<style lang="scss">
  @use 'src/app' as globals;

  #banner {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: white;
    padding: 4rem 2rem 0 2rem;

    h2 {
      margin-bottom: 0;
    }
  }

  .rounded {
    border-radius: 1rem;
  }

  #main {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    padding: globals.$main-spacing;

    @media (max-width: globals.$mobile) {
      flex-direction: column;
    }
  }

  #watch-providers-container {
    max-width: 45rem;
    width: 100%;
    margin-bottom: globals.$main-spacing;
    margin-right: globals.$main-spacing;

    & > * {
      margin-bottom: globals.$main-spacing;
    }
  }

  #movie-content-container {
    width: 100%;
    max-width: globals.$text-body-max-width;
  }
</style>
