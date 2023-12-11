<script lang="ts">
  import type { TMDBCastMember } from '$lib/types/tmdb-movie-credits';

  let { cast } = $props<{ cast: TMDBCastMember[] }>();

  const featuredCast = $derived(cast.slice(0, 3).map(person => person.name));

  let castDetailsOpen = $state(false);

  const castSummary = $derived(
    castDetailsOpen
      ? ''
      : featuredCast.join(', ') +
          (featuredCast.length < cast.length ? '...' : '')
  );

  const headlineCast = $derived(
    cast.filter(person => typeof person.order === 'number')
  );
</script>

<details
  open={castDetailsOpen}
  on:toggle={() => (castDetailsOpen = !castDetailsOpen)}
>
  <summary>
    <div>
      <strong>Starring</strong>
      {castSummary}
    </div>
    <div class="show-more-cast">
      {castDetailsOpen ? 'Hide' : 'Show All'}
    </div>
  </summary>
  <ul>
    {#each headlineCast as person}
      <li>
        <strong>
          <a
            href={`https://www.themoviedb.org/person/${person.id}`}
            target="_blank"
            class="person"
          >
            {person.name}
          </a>
        </strong>
        - {person.character}
      </li>
    {/each}
  </ul>
</details>

<style lang="scss">
  summary {
    & > * {
      display: inline;
    }
  }

  details {
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 0.5em;
  }

  .show-more-cast {
    font-size: 0.8em;
    color: #ccc;
    float: right;
  }

  ul {
    max-height: 15em;
    overflow-y: scroll;
  }

</style>
