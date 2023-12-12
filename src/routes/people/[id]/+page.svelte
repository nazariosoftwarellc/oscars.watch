<script lang="ts">
  import dayjs from 'dayjs';
  import type { ResolvedPersonDetails } from '$lib/types/resolved-data';
  import { tmdbMostKnownRoles } from '$lib/utils';

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
  <h2>{data.details.name}</h2>
  <img {src} alt={data.details.name} />
  <div id="bio">
    <p>Born {birthday} in {data.details.place_of_birth} ({age} years old)</p>
    <div>Known for acting in:</div>
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
</main>
