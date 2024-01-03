<script lang="ts">
  import type { TMDBMovieDetails } from '$lib/types/tmdb-movie-details';
  import { convertToInternationalCurrencySystem } from '$lib/utils';
  import dayjs from 'dayjs';

  let { details } = $props<{ details: TMDBMovieDetails }>();

  function getDollarValue(value: number | undefined): string {
    return value
      ? '$' + convertToInternationalCurrencySystem(value)
      : 'No data provided';
  }

  const metadata = $derived([
    {
      name: 'Released',
      value: dayjs(details.release_date).format('MMMM D, YYYY')
    },
    {
      name: 'Global Box Office',
      value: getDollarValue(details.revenue)
    },
    {
      name: 'Budget',
      value: getDollarValue(details.budget)
    }
  ]);
</script>

<table>
  <tbody>
    {#each metadata as { name, value }}
      <tr>
        <td>{name}</td>
        <td class="table-value">{value}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style lang="scss">
  .table-value {
    text-align: right;
  }

  table {
    // Override milligram's table styles
    display: table;
  }
</style>
