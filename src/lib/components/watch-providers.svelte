<script lang="ts">
  import type { TMDBWatchProvidersResponse } from '$lib/types/tmdb-watch-provider';

  let { response } = $props<{
    response: TMDBWatchProvidersResponse;
  }>();
  let selectedLocale = $state('US');

  const englishRegionNames = new Intl.DisplayNames(['en'], { type: 'region' });
</script>

<div id="providers" class="rounded">
  <select bind:value={selectedLocale}>
    {#each Object.keys(response.results) as locale}
      <option value={locale}>{englishRegionNames.of(locale)}</option>
    {/each}
  </select>
</div>

<style lang="scss">
  #providers {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 2rem;
    max-width: 45rem;
    overflow-y: scroll;
  }
  .rounded {
    border-radius: 1rem;
  }
</style>
