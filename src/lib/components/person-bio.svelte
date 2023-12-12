<script lang="ts">
  import { tmdbMostKnownRoles } from '$lib/utils';
  import dayjs from 'dayjs';

  let { details, credits } = $props<{
    details: TMDBPersonDetails;
    credits: TMDBPersonCreditsResponse;
  }>();
  const now = new Date();

  const src = $derived(
    `https://image.tmdb.org/t/p/w500${details.profile_path}`
  );
  const birthday = $derived(dayjs(details.birthday).format('MMMM D, YYYY'));
  const age = $derived(
    now.getFullYear() - new Date(details.birthday).getFullYear()
  );

  let knownForCredits = $derived(tmdbMostKnownRoles(details, credits));
</script>

<aside>
  <h2>{details.name}</h2>
  <img {src} alt={details.name} />
  <div id="bio">
    <div>
      Born {birthday} in {details.place_of_birth}
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
