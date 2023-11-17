<script lang="ts">
  import MovieList from '$lib/components/movie-list.svelte';
  import type { ResolvedOscarCategoryList } from '$lib/types/resolved-data';

  let { data } = $props<{ data: ResolvedOscarCategoryList }>();
</script>

{#each data.categories as category}
  <section>
    <h2>{category.name}</h2>
    <MovieList movies={category.movies} />
  </section>
{/each}

<style lang="scss">
  section {
    margin: 0 5rem;
  }
</style>
