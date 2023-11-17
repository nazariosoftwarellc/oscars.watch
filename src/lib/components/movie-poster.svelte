<script lang="ts">
  import { base } from '$app/paths';
  import type { TMDBMovie } from '$lib/types/tmdb-movie';

  let { movie } = $props<{ movie: TMDBMovie }>();

  const src = $derived(
    'https://image.tmdb.org/t/p/original' + movie.poster_path
  );
  const href = $derived(base + '/movies/' + movie.id);
</script>

<a {href}>
  <img {src} alt="{movie.title} poster" />
</a>

<style lang="scss">
  img {
    height: 40rem;
  }
</style>
