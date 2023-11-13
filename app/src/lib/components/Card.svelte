<script lang="ts">
	import Comps from '$components/Comps.svelte';
	import type { PageData } from '../../routes/$types';

  export let content: PageData;
	let ix: Number;

  //console.log(content)
</script>

<section class="card bg-neutral text-neutral-content max-w-prose "><div class="card-body">
  <div class="prose card-title">
  {#if content.title}
    {#if ix == 0}
      <h1 class="font-semibold">{content.title}</h1>
    {:else}
      <h2 class="font-medium">{content.title}</h2>
    {/if}
  {/if}
  </div>
{#each content.pageBuilder as c, ix}
  <Comps content={c} ix={0}/>
{/each}
</div></section>

<style>
  /*:global(article + h1) {

  }*/

  .card-body {
    max-width: max-content;
    margin-inline: auto;
  }

  .card-title {
    margin-block-end: .75rem;
  }
</style>