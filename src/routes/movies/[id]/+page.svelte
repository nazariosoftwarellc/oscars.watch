<script lang="ts">
  import Credits from '$lib/components/credits.svelte';
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

<div id="banner" style="background-image: url('{bannerUrl}')">
  <h2 class="rounded">{data.details.title}</h2>
  <Credits
    credits={data.credits}
    releaseDate={data.details.release_date}
    tagline={data.details.tagline}
  />
</div>

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
</style>
