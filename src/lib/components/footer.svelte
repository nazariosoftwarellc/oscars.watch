<script lang="ts">
  import { base } from '$app/paths';

  const creditsHref = `${base}/credits`;
</script>

<hr />
<footer>
  <div>
    <a href={creditsHref}>Credits</a>
  </div>
  <div>
    Created by <a href="https://kylenazario.com" target="_blank">Kyle Nazario</a
    >
  </div>
</footer>

<style lang="scss">
  @use 'src/app' as globals;
  footer {
    padding: globals.$main-spacing;
    padding-top: 0;
  }
</style>
