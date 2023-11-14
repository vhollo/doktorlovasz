<script lang="ts">
	import Comps from '$components/Comps.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
  <meta name="description" content={data.desc} />
  <meta name="keywords" content={data.keywords} />
</svelte:head>

{#each data.pageBuilder as content, ix}
  <Comps {content} {ix}/>
{/each}
