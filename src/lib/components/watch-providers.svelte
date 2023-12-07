<script lang="ts">
  import type { TMDBWatchProvidersResponse } from '$lib/types/tmdb-watch-provider';

  let { response } = $props<{
    response: TMDBWatchProvidersResponse;
  }>();
  let selectedLocale = $state('US');

  let watchProvidersForSelectedLocale = $derived(
    response.results[selectedLocale]
  );

  const englishRegionNames = new Intl.DisplayNames(['en'], { type: 'region' });
</script>

<aside id="providers" class="rounded">
  <h3>Streaming options</h3>
  <select bind:value={selectedLocale}>
    {#each Object.keys(response.results) as locale}
      <option value={locale}>{englishRegionNames.of(locale)}</option>
    {/each}
  </select>
  <div id="providers-list">
    <a
      href={watchProvidersForSelectedLocale.link}
      target="_blank"
      referrerpolicy="no-referrer"
    >
      {#each watchProvidersForSelectedLocale.flatrate ?? [] as provider}
        <div class="provider">
          <img
            src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`}
            alt={provider.provider_name}
          />
        </div>
      {/each}
    </a>
  </div>
</aside>

<style lang="scss">
  #providers {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 2rem;
    max-width: 45rem;
  }
  .rounded {
    border-radius: 1rem;
  }

  #providers-list a {
    display: flex;
    flex-wrap: wrap;

    .provider {
      margin: 0.5rem;
      img {
        height: 50px;
      }
    }
  }
</style>
