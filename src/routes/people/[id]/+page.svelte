<script lang="ts">
  import dayjs from 'dayjs';
  import type { ResolvedPersonDetails } from '$lib/types/resolved-data';

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
    (() => {
      return data.credits.cast
        .filter(credit => new Date(credit.release_date) < now)
        .sort((a, b) => {
          return b.popularity - a.popularity;
        })
        .filter(credit => credit.vote_average > 7)
        .slice(0, 5)
        .map(credit => credit.title)
    })()
  );
</script>

<main>
  <h2>{data.details.name}</h2>
  <img {src} alt={data.details.name} />
  <div id="bio">
    <p>Born {birthday} in {data.details.place_of_birth} ({age} years old)</p>
    <div>Known for:</div>
    <ul>
      {#each knownForCredits as credit}
        <li><em>{credit}</em></li>
      {/each}
    </ul>
  </div>
</main>
