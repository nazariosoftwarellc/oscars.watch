<script lang="ts">
  import type { DTDDTopic } from '$lib/types/dtdd-media-item-stats';

  let { dtddTopics, dtddMovieId } = $props<{ dtddTopics: DTDDTopic[], dtddMovieId: number }>();
  
  const href = $derived(
    `https://www.doesthedogdie.com/media/${dtddMovieId}`
  )
  
  const nonSpoilerTopics = $derived(
    dtddTopics.filter(topic => topic.isSpoiler === false)
  )
  const spoilerTopics = $derived(
    dtddTopics.filter(topic => topic.isSpoiler === true)
  )
</script>

<aside>
  <h3>Content warnings</h3>
  <p>Via <a {href} target="_blank">Does The Dog Die</a>.</p>
  <div>
  <ul>
    {#each nonSpoilerTopics as topic}
      <li>
        {topic.name}
      </li>
    {/each}
  </ul>
  <details>
    <summary>Spoilers</summary>
    <ul>
      {#each spoilerTopics as topic}
        <li>
          {topic.name}
        </li>
      {/each}
    </ul>
  </details>
  </div>
</aside>

<style lang="scss">
  aside {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 2rem;
    max-width: 45rem;
    border-radius: 1rem;
  }

  div {
    max-height: 50rem;
    overflow-y: scroll;
  }
</style>