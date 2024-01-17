<script lang="ts">
  import type { ResolvedPersonDetails } from '$lib/types/resolved-data';
  import CalloutBox from '$lib/components/callout-box.svelte';
  import PersonBio from '$lib/components/person-bio.svelte';
  import PageTitle from '$lib/components/page-title.svelte';

  let { data } = $props<{ data: ResolvedPersonDetails }>();
</script>

<PageTitle content="{data.details.name}" />

<main>
  <div id="bio-container">
    <CalloutBox>
      <PersonBio details={data.details} credits={data.credits} />
    </CalloutBox>
  </div>
  <div id="review-container">
    {@html data.reviewHtml}
  </div>
</main>

<style lang="scss">
  @use 'src/app' as globals;

  main {
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: globals.$main-spacing;

    @media screen and (max-width: globals.$mobile) {
      flex-direction: column;
    }
  }

  #bio-container {
    min-width: 45rem;

    @media screen and (max-width: globals.$mobile) {
      min-width: 0;
    }
  }

  #review-container {
    max-width: globals.$text-body-max-width;
  }
</style>
