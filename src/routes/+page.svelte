<script lang="ts">
  import MovieList from '$lib/components/movie-list.svelte';
  import PageTitle from '$lib/components/page-title.svelte';
  import PeopleList from '$lib/components/people-list.svelte';
  import type { ResolvedOscarCategoryList } from '$lib/types/resolved-data';

  let { data } = $props<{ data: ResolvedOscarCategoryList }>();
</script>

<PageTitle content="Oscars.watch" />

{#each data.categories as category}
  <section>
    <h2>{category.name}</h2>
    {#if category.movies}
      <MovieList movies={category.movies} />
    {:else}
      <PeopleList peopleCategory={category} />
    {/if}
  </section>
{/each}

<style lang="scss">
  section {
    margin: 2rem 5rem;
  }
</style>
