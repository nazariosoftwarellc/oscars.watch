<script lang="ts">
  import dayjs from 'dayjs';
  import type { ResolvedPersonDetails } from '$lib/types/resolved-data';
  import { tmdbMostKnownRoles } from '$lib/utils';
  import CalloutBox from '$lib/components/callout-box.svelte';
  import PersonBio from '$lib/components/person-bio.svelte';

  let { data } = $props<{ data: ResolvedPersonDetails }>();
</script>

<main>
  <CalloutBox>
    <PersonBio details={data.details} credits={data.credits} />
  </CalloutBox>
  <div>main stuff</div>
</main>

<style lang="scss">
  @use 'src/app' as globals;

  main {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: globals.$main-spacing;

    @media screen and (max-width: globals.$mobile) {
      flex-direction: column;
    }
  }
</style>
