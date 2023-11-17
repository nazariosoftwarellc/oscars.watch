<script lang="ts">
  import type { ResolvedMovieDetails } from '$lib/types/resolved-data';

  let { data } = $props<{ data: ResolvedMovieDetails }>();
</script>

<h2>{data.movieDetails.title}</h2>