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

  const encodedTitle = $derived(
    encodeURIComponent(details.title.toLowerCase())
  );
  const referenceLinks = $derived([
    {
      name: 'Rotten Tomatoes',
      href: `https://www.rottentomatoes.com/search/?search=${encodedTitle}#:~:text=MORE%20FRANCHISES...-,MOVIES,-94%25`
    },
    {
      name: 'Metacritic',
      href: `https://www.metacritic.com/search/${encodedTitle}?page=1&category=2`
    },
    {
      name: 'IMDB',
      href: `https://www.imdb.com/title/${details.imdb_id}`
    }
  ]);
</script>

<div id="metadata" class="rounded">
  <p>Released: {formattedReleaseDate}</p>
  <p>Directed by <strong>{directors}</strong></p>
  <p>{details.tagline}</p>
  <ul />
  <div id="cast-list-container">
    <CastList cast={credits.cast} />
  </div>
  <div id="reference-link-container">
    {#each referenceLinks as { name, href }}
      <a {href} class="reference-link" target="_blank">{name}</a>
    {/each}
  </div>
</div>

<style lang="scss">
  #metadata {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 2rem;
    max-height: 40rem;
    overflow-y: scroll;
  }

  #cast-list-container {
    margin-bottom: 2.5rem;
  }

  .rounded {
    border-radius: 1rem;
  }

  #reference-link-container {
    display: flex;
    justify-content: center;
  }

  .reference-link {
    padding: 0 1rem;
    border-right: 1px solid white;

    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      border-right: none;
    }
  }
</style>
