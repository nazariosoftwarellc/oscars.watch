<script lang="ts">
  import { TMDBVideoType, type TMDBVideo } from '$lib/types/tmdb-video';

  let { videos } = $props<{ videos: TMDBVideo[] }>();

  function getTrailer(videos: TMDBVideo[]) {
    return videos
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .find(video => video.type === TMDBVideoType.Trailer);
  }

  const trailer = $derived(getTrailer(videos));
  const featuredVideos = $derived(
    videos.filter(
      video =>
        video.type === TMDBVideoType.Featurette ||
        video.type === TMDBVideoType.BehindTheScenes
    )
  );
</script>

<aside>
  <h3>Videos</h3>
  {#if trailer}
    <iframe
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/{trailer.key}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  {/if}
  <ul>
    {#each featuredVideos as video}
      <li>
        <a
          href="https://www.youtube.com/watch?v={video.key}"
          target="_blank"
          rel="noopener noreferrer"
        >
          {video.name}
        </a>
      </li>
    {/each}
  </ul>
</aside>
