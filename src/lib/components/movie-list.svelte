<script lang="ts">
  import type { TMDBMovie } from '$lib/types/tmdb-movie';
  import MoviePoster from './movie-poster.svelte';

  let { movies } = $props<{ movies: TMDBMovie[] }>();
</script>

<div class="poster-list">
  {#each movies as movie}
    <div class="movie-poster-container">
      <MoviePoster {movie} />
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

  .movie-poster-container {
    margin: 0 2rem;
    display: inline-block;

    &:first-child {
      margin-left: 4rem;
    }
  }
</style>
