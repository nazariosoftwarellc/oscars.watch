<script lang="ts">
  import type { TMDBMovie } from '$lib/types/tmdb-movie';

  let { movies } = $props<{ movies: TMDBMovie[] }>();
</script>

<div class="poster-list">
  {#each movies as movie}
    <div class="poster-list-item">
      <img
        src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
        alt="{movie.title} poster"
      />
    </div>
  {/each}
</div>

<style lang="scss">
  .poster-list {
    border: 1px solid;
    overflow: scroll;
    white-space: nowrap;
    padding: 4rem 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .poster-list-item {
    margin: 0 2rem;
    display: inline-block;

    &:first-child {
      margin-left: 4rem;
    }

    img {
      height: 40rem;
    }
  }
</style>
