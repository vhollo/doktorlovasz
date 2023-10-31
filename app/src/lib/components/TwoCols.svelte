<script lang="ts">
	import Comps from '$components/Comps.svelte';
	import type { PageData } from '../../routes/$types';

  export let content: PageData;
	export let ix: Number = -1;

  console.log(content.col1)
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
    {#each content.col1.textBlock as col}
      <Comps content={col} {ix}/>
    {/each}
  </section>

  <section>
    {#each content.col2.textBlock as col}
      <Comps content={col} {ix}/>
    {/each}
  </section>
</article>
