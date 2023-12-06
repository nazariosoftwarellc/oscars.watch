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
    <strong>Starring</strong>
    {castSummary}
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
    cursor: pointer;
  }
</style>
