<script lang="ts">
  import CalloutBox from '$lib/components/callout-box.svelte';
  import Credits from '$lib/components/credits.svelte';
  import WatchProviders from '$lib/components/watch-providers.svelte';
  import type { ResolvedMovieDetails } from '$lib/types/resolved-data';
  import dayjs from 'dayjs';

  let { data } = $props<{ data: ResolvedMovieDetails }>();
  const bannerUrl = $derived(
    'https://image.tmdb.org/t/p/original' + data.details.backdrop_path
  );
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
  </aside>
  <div id="movie-content-container">
    {#if data.reviewHtml}
      <h3>Reviews</h3>
      {@html data.reviewHtml}
    {/if}
  </div>
</section>

<style lang="scss">
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

  $mobile: 768px;
  $main-spacing: 2rem;

  #main {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    padding: $main-spacing;

    @media (max-width: $mobile) {
      flex-direction: column;
    }
  }

  #watch-providers-container {
    max-width: 45rem;
    width: 100%;
    margin-bottom: $main-spacing;
    margin-right: $main-spacing;

    & > * {
      margin-bottom: $main-spacing;
    }
  }

  #movie-content-container {
    width: 100%;
    max-width: 50em;
  }
</style>
