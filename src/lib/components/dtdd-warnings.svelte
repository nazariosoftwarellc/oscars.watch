<script lang="ts">
  let { dtddUrl } = $props<{ dtddUrl: string }>();

  const warningLinks = [
    {
      name: 'Does the Dog Die?',
      href: dtddUrl
    }
  ];
</script>

<aside>
  <h3>Content warnings</h3>
  <ul>
    {#each warningLinks as { name, href }}
      <li>
        <a {href} target="_blank">{name}</a>
      </li>
    {/each}
  </ul>
</aside>

<style lang="scss">
  aside {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 2rem;
    max-width: 45rem;
    border-radius: 1rem;
  }
  a {
    cursor: pointer;
  }
</style>
