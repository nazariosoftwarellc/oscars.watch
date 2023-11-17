<script lang="ts">
  import type { ResolvedOscarCategoryList } from '$lib/types/resolved-data';

  let { data } = $props<{ data: ResolvedOscarCategoryList }>();
</script>

{#each data.categories as category}
  <section>
    <h2>{category.name}</h2>
    <div class="poster-list">
      {#each category.movies as movie}
        <div class="poster-list-item">
          <img
            src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
            alt="{movie.title} poster"
          />
        </div>
      {/each}
    </div>
  </section>
{/each}

<style lang="scss">
  section {
    margin: 0 5rem;
  }
  .poster-list {
    border: 1px solid;
    overflow: scroll;
    white-space: nowrap;
    padding: 4rem 0;
  }
  .poster-list-item {
    margin: 0 2rem;
    display: inline-block;

    &:first-child {
      margin-left: 4rem;
    }

    img {
      height: 40rem;
    margin-bottom: 1rem;
    }
  }
</style>
