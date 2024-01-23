<script lang="ts">
  import type { PeopleCategory } from '$lib/types/resolved-data';
  import { autoScrollElement } from '$lib/auto-scroll-element';

  let { peopleCategory } = $props<{ peopleCategory: PeopleCategory }>();

  let container: HTMLDivElement | undefined;

  $effect(() => {
    if (container) {
      autoScrollElement(container);
    }
  });
</script>

<div bind:this={container} class="people-list">
  {#each peopleCategory.people as person}
    <a href={'/people/' + person.id} class="person-container">
      <img
        src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
        alt={person.name}
        loading="lazy"
      />
      <h3>{person.name}</h3>
    </a>
  {/each}
</div>

<style lang="scss">
  .people-list {
    border: 1px solid;
    overflow: scroll;
    white-space: nowrap;
    padding: 4rem 0 0 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  a {
    color: white;
  }

  .person-container {
    margin: 0 2rem;
    display: inline-block;

    &:first-child {
      margin-left: 4rem;
    }

    img {
      transition: all 0.2s ease-in-out;
      border-radius: 200px;

      &:hover {
        transform: scale(1.1);
        animation: glow 1s infinite alternate;
      }
    }
  }

  $glow-color: white;
  @keyframes glow {
    from {
      box-shadow: 0 0 10px -10px $glow-color;
    }
    to {
      box-shadow: 0 0 10px 10px $glow-color;
    }
  }
</style>
