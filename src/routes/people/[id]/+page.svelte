<script lang="ts">
  import dayjs from 'dayjs';
  import type { ResolvedPersonDetails } from '$lib/types/resolved-data';
  import { tmdbMostKnownRoles } from '$lib/utils';
  import CalloutBox from '$lib/components/callout-box.svelte';

  let { data } = $props<{ data: ResolvedPersonDetails }>();

  const now = new Date();

  const src = $derived(
    `https://image.tmdb.org/t/p/w500${data.details.profile_path}`
  );
  const birthday = $derived(
    dayjs(data.details.birthday).format('MMMM D, YYYY')
  );
  const age = $derived(
    now.getFullYear() - new Date(data.details.birthday).getFullYear()
  );

  let knownForCredits = $derived(
    tmdbMostKnownRoles(data.details, data.credits)
  );
</script>

<main>
  <CalloutBox>
    <aside>
      <h2>{data.details.name}</h2>
      <img {src} alt={data.details.name} />
      <div id="bio">
        <div>
          Born {birthday} in {data.details.place_of_birth}
        </div>
        <p>{age} years old</p>
        <h3>Known for</h3>
        <ul>
          {#each knownForCredits as credit}
            <li>
              <em
                ><a
                  href={'https://www.themoviedb.org/movie/' + credit.id}
                  target="_blank">{credit.title}</a
                ></em
              >
            </li>
          {/each}
        </ul>
      </div>
    </aside>
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
