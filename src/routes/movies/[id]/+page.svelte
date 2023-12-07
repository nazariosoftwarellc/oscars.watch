<script lang="ts">
  import Credits from '$lib/components/credits.svelte';
  import WatchProviders from '$lib/components/watch-providers.svelte';
  import type { ResolvedMovieDetails } from '$lib/types/resolved-data';
  import dayjs from 'dayjs';

  let { data } = $props<{ data: ResolvedMovieDetails }>();
  const bannerUrl = $derived(
    'https://image.tmdb.org/t/p/original' + data.details.backdrop_path
  );
  const releaseDate = $derived(
    dayjs(data.details.release_date).format('MMMM D, YYYY')
  );
  const directors = $derived(
    data.credits.crew
      .filter(person => person.job?.toLowerCase() === 'director')
      .map(person => person.name)
      .join(', ')
  );
</script>

<section id="banner" style="background-image: url('{bannerUrl}')">
  <h2 class="rounded">{data.details.title}</h2>
  <Credits details={data.details} credits={data.credits} />
</section>
<section id="main">
  <div id="watch-providers-container">
    <WatchProviders response={data.watchProviders} />
  </div>
  <div id="movie-content-container">
    <p>Text</p>
    <p>More</p>
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
      background-color: rgba(0, 0, 0, 0.9);
      padding: 2rem;
    }
  }

  .rounded {
    border-radius: 1rem;
  }

  $mobile: 768px;
  $main-spacing: 2rem;

  #main {
    display: flex;
    justify-content: space-between;
    padding: $main-spacing;

    @media (max-width: $mobile) {
      flex-direction: column-reverse;
    }
  }

  #watch-providers-container {
    max-width: 45rem;
    width: 100%;
    margin-bottom: $main-spacing;
    margin-right: $main-spacing;
  }

  #movie-content-container {
    width: 100%;
  }
</style>
