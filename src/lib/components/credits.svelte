<script lang="ts">
  import type { TMDBMovieCredits } from '$lib/types/tmdb-movie-credits';
  import dayjs from 'dayjs';
  import CastList from './cast-list.svelte';

  let { credits, releaseDate, tagline } = $props<{
    credits: TMDBMovieCredits;
    releaseDate: string | Date;
    tagline: string;
  }>();
  const formattedReleaseDate = $derived(
    dayjs(releaseDate).format('MMMM D, YYYY')
  );
  const directors = $derived(
    credits.crew
      .filter(person => person.job?.toLowerCase() === 'director')
      .map(person => person.name)
      .join(', ')
  );
</script>

<div id="metadata" class="rounded">
  <p>Released: {formattedReleaseDate}</p>
  <p>Directed by <strong>{directors}</strong></p>
  <p>{tagline}</p>
  <ul />
  <CastList cast={credits.cast} />
</div>

<style lang="scss">
  #metadata {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 2rem;
    max-height: 40rem;
    overflow-y: scroll;
  }

  .rounded {
    border-radius: 1rem;
  }
</style>
