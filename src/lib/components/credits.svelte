<script lang="ts">
  import type { TMDBMovieCredits } from '$lib/types/tmdb-movie-credits';
  import dayjs from 'dayjs';
  import CastList from './cast-list.svelte';
  import type { TMDBMovieDetails } from '$lib/types/tmdb-movie-details';

  let { details, credits } = $props<{
    details: TMDBMovieDetails;
    credits: TMDBMovieCredits;
  }>();
  const formattedReleaseDate = $derived(
    dayjs(details.release_date).format('MMMM D, YYYY')
  );
  const directors = $derived(
    credits.crew
      .filter(person => person.job?.toLowerCase() === 'director')
      .map(person => person.name)
      .join(', ')
  );

  const referenceLinks = $derived([
    {
      name: 'TMDB',
      href: `https://www.themoviedb.org/movie/${details.id}`
    },
    {
      name: 'IMDB',
      href: `https://www.imdb.com/title/${details.imdb_id}`
    },
    {
      name: 'Homepage',
      href: details.homepage
    }
  ]);
</script>

<div id="metadata" class="rounded">
  <p>Released: {formattedReleaseDate}</p>
  <p>Directed by <strong>{directors}</strong></p>
  <p>{details.tagline}</p>
  <ul />
  <CastList cast={credits.cast} />
  <p>
    {#each referenceLinks as { name, href }}
      <a {href} class="reference-link" target="_blank">{name}</a>
    {/each}
  </p>
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

  .reference-link {
    padding: 0 1rem;
    border-right: 1px solid white;

    &:last-child {
      border-right: none;
    }
  }
</style>
