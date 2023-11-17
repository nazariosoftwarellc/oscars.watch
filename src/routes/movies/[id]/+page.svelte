<script lang="ts">
  import type { ResolvedMovieDetails } from '$lib/types/resolved-data';

  let { data } = $props<{ data: ResolvedMovieDetails }>();
  const bannerUrl = $derived(
    'https://image.tmdb.org/t/p/original' + data.movieDetails.backdrop_path
  );
</script>

<div id="banner" style="background-image: url('{bannerUrl}')">
  <h2>{data.movieDetails.title}</h2>
</div>

<style lang="scss">
  #banner {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: white;

    h2 {
      background-color: rgba(0, 0, 0, 0.9);
      padding: 2rem;
      margin-left: 2rem;
      margin-top: 4rem;
      border-radius: 1rem;
    }
  }
</style>
