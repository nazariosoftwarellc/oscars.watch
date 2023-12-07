<script lang="ts">
  import type { TMDBMovieCredits } from '$lib/types/tmdb-movie-credits';
  import dayjs from 'dayjs';
  import CastList from './cast-list.svelte';
  import type { TMDBMovieDetails } from '$lib/types/tmdb-movie-details';
  import { convertToInternationalCurrencySystem } from '$lib/utils';

  let { details, credits } = $props<{
    details: TMDBMovieDetails;
    credits: TMDBMovieCredits;
  }>();
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

  const metadata = $derived([
    {
      name: 'Released',
      value: dayjs(details.release_date).format('MMMM D, YYYY')
    },
    {
      name: 'Global Box Office',
      value: '$' + convertToInternationalCurrencySystem(details.revenue)
    }
  ]);
</script>

<div id="metadata" class="rounded">
  <table>
    <tbody>
      {#each metadata as {name, value}}
        <tr>
          <td>{name}</td>
          <td class="table-value">{value}</td>
        </tr>
      {/each}
    </tbody>
  </table>
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

  .table-value {
    text-align: right;
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
