<script lang="ts">
  import { TMDBVideoType, type TMDBVideo } from '$lib/types/tmdb-video';
  import YoutubeEmbed from '$lib/components/youtube-embed.svelte';

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
    .slice(0, 8)
  );
</script>

<aside>
  <h3>Videos</h3>
  {#if trailer}
    <YoutubeEmbed videoId={trailer.key} />
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
