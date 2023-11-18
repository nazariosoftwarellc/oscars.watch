<script lang="ts">
  import type { TMDBMovieCredits } from '$lib/types/tmdb-movie-credits';
  import dayjs from 'dayjs';

  let { credits, releaseDate } = $props<{
    credits: TMDBMovieCredits;
    releaseDate: string | Date;
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
  const featuredCast = $derived(
    credits.cast.slice(0, 3).map(person => person.name)
  );
</script>

<div id="metadata" class="rounded">
  <p>Released: {formattedReleaseDate}</p>
  <p>Directed by {directors}</p>
  <ul />
  <p id="starring-label">Starring:</p>
  <details>
    <summary>
      {featuredCast.join(', ')}
      {featuredCast.length < credits.cast.length && '...'}
    </summary>
    <ul>
      {#each credits.cast as person}
        <li>
          <a href={`https://www.themoviedb.org/person/${person.id}`}>
            {person.name}
          </a>
        </li>
      {/each}
    </ul>
  </details>
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

  summary {
    cursor: pointer;
  }

  #starring-label {
    margin-bottom: 0;
  }
</style>
