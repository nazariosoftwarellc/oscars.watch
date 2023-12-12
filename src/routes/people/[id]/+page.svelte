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
      let knownForJobTitle = 'Actor';
      switch (data.details.known_for_department) {
        case 'Acting':
          knownForJobTitle = 'Actor';
          break;
        case 'Directing':
          knownForJobTitle = 'Director';
          break;
        case 'Production':
          knownForJobTitle = 'Producer';
          break;
        case 'Writing':
          knownForJobTitle = 'Writer';
          break;
      }
      let jobs = data.credits.crew.filter(
        credit => credit.job === knownForJobTitle
      );
      if (knownForJobTitle === 'Actor') {
        jobs = jobs.concat(data.credits.cast);
      }
      return jobs
        .filter(credit => new Date(credit.release_date) < now)
        .sort((a, b) => {
          return b.vote_count - a.vote_count;
        })
        .filter(credit => credit.vote_average > 7)
        .slice(0, 5);
    })()
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
