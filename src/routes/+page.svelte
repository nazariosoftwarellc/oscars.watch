<script lang="ts">
  import type { ResolvedOscarCategoryList } from '$lib/types/resolved-data';

  let { data } = $props<{data: ResolvedOscarCategoryList}>();
</script>

<h2>2023 Oscar Nominees</h2>
{#each data.categories as category}
  <section>
    <h3>{category.name}</h3>
    <ul>
      {#each category.movies as movie}
        <li>{movie.title}</li>
      {/each}
    </ul>
  </section>
{/each}