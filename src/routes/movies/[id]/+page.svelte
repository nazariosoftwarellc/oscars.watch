<script lang="ts">
  import type { ResolvedMovieDetails } from '$lib/types/resolved-data';
  import dayjs from 'dayjs';

  let { data } = $props<{ data: ResolvedMovieDetails }>();
  const bannerUrl = $derived(
    'https://image.tmdb.org/t/p/original' + data.movieDetails.backdrop_path
  );
  const releaseDate = $derived(
    dayjs(data.movieDetails.release_date).format('MMMM D, YYYY')
  );
</script>

<div id="banner" style="background-image: url('{bannerUrl}')">
  <h2 class="rounded">{data.movieDetails.title}</h2>
  <div id="metadata" class="rounded">
    <p>Released: {releaseDate}</p>
    <p>Directed by: PLACEHOLDER</p>
    <p>Starring:</p>
    <ul>
      <li>PLACEHOLDER</li>
      <li>PLACEHOLDER</li>
    </ul>
  </div>
</div>

<style lang="scss">
  #banner {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: white;
    padding: 4rem 2rem 0 2rem;

    h2 {
      background-color: rgba(0, 0, 0, 0.9);
      padding: 2rem;
    }

    #metadata {
      background-color: rgba(0, 0, 0, 0.9);
      padding: 2rem;
    }
  }

  .rounded {
    border-radius: 1rem;
  }
</style>
