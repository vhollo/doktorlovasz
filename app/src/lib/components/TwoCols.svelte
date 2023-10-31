<script lang="ts">
	import Comps from '$components/Comps.svelte';
	import type { PageData } from '../../routes/$types';

  export let content: PageData;
	export let ix: Number;

  console.log({content})
</script>

<article class="prose gap-x-8 gap-y-0 grid-cols-2xs">
  {#if content.title}
    {#if ix == 0}
      <h1>{content.title}</h1>
    {:else}
      <h2>{content.title}</h2>
    {/if}
  {/if}

  <section>
    {#each content.col1.pageBuilder as col, ix}
      <Comps content={col} {ix}/>
    {/each}
  </section>

  <section>
    {#each content.col2.pageBuilder as col, ix}
      <Comps content={col} {ix}/>
    {/each}
  </section>
</article>
