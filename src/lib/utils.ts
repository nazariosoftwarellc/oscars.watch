// courtesy https://stackoverflow.com/a/36734774
export function convertToInternationalCurrencySystem(
  labelValue: string | number
) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? +(Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + 'b'
    : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? +(Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + 'm'
      : // Three Zeroes for Thousands
        Math.abs(Number(labelValue)) >= 1.0e3
        ? +(Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + 'k'
        : +Math.abs(Number(labelValue));
}

export function tmdbMostKnownRoles(
  details: TMDBPersonDetails,
  credits: TMDBPersonCreditsResponse
): TMDBPersonCredit[] {
  const now = new Date();
  let knownForJobTitle = 'Actor';
  switch (details.known_for_department) {
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
  let jobs = credits.crew.filter(credit => credit.job === knownForJobTitle);
  if (knownForJobTitle === 'Actor') {
    jobs = jobs.concat(credits.cast);
  }
  return jobs
    .filter(credit => new Date(credit.release_date) < now)
    .sort((a, b) => {
      return b.vote_count - a.vote_count;
    })
    .filter(credit => credit.vote_average > 7)
    .slice(0, 5);
}

export function removeYearFromListName(name: string): string {
  return name.replace(/\d/g, '');
}
