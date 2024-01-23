<script lang="ts">
  import type { TMDBMovie } from '$lib/types/tmdb-movie';
  import MoviePoster from './movie-poster.svelte';
  import { autoScrollElement } from '$lib/auto-scroll-element';

  let { movies } = $props<{ movies: TMDBMovie[] }>();
  let container: HTMLDivElement | undefined;

  $effect(() => {
    if (container) {
      autoScrollElement(container);
    }
  });

</script>

<div bind:this={container} class="poster-list">
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
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      animation: glow 1s infinite alternate;
    }

    &:first-child {
      margin-left: 4rem;
    }
  }

  $glow-color: white;
  @keyframes glow {
    from {
      box-shadow: 0 0 10px -10px $glow-color;
    }
    to {
      box-shadow: 0 0 10px 10px $glow-color;
    }
  }
</style>
