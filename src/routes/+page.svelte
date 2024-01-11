<script lang="ts">
  import MovieList from '$lib/components/movie-list.svelte';
  import PeopleList from '$lib/components/people-list.svelte';
  import type { ResolvedOscarCategoryList } from '$lib/types/resolved-data';

  let { data } = $props<{ data: ResolvedOscarCategoryList }>();
</script>

{#each data.movieCategories as category}
  <section>
    <h2>{category.name}</h2>
    <MovieList movies={category.movies} />
  </section>
{/each}
{#each data.peopleCategories as category}
  <section>
    <h2>{category.name}</h2>
    <PeopleList peopleCategory={category} />
  </section>
{/each}

<style lang="scss">
  section {
    margin: 2rem 5rem;
  }
</style>
