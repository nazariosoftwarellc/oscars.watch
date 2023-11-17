<script lang="ts">
  import type { TMDBMovie } from '$lib/types/tmdb-movie';

  let { movie } = $props<{ movie: TMDBMovie }>();
</script>

<div class="poster-list-item">
  <img
    src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
    alt="{movie.title} poster"
  />
</div>

<style lang="scss">
  .poster-list-item {
    img {
      height: 40rem;
    }
  }
</style>
