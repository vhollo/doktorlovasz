<script lang="ts">
	import type { PageData } from '../../routes/$types';
	import { PortableText } from '@portabletext/svelte';
	import internalLink from '$lib/utils/internalLink.svelte';
	import Link from '$lib/utils/Link.svelte';
  import DefaultListItem from '$lib/utils/DefaultListItem.svelte'

	export let content: PageData;
	//export let ix: Number;

  const formatBody = {
    marks: {
      internalLink: internalLink,
      link: Link,
    },
    listItem: {
      bullet: DefaultListItem,
      number: DefaultListItem
    },
  }
  console.log({content})
</script>


<article class="prose gap-x-8 gap-y-0">
  {#if content.details}
    <details>
      <summary><b>{content.summary}</b></summary>
      {#if content.details}
        <PortableText value={content.details} components={formatBody}/>
      {/if}
    </details>
  {:else}
    <p><b>{content.summary}</b></p>
  {/if}
</article>

<style>
  /*article {
    @apply mx-4;
  }*/
</style>
