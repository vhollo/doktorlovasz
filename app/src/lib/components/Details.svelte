<script lang="ts">
	import type { PageData } from '../../routes/$types';
	import { PortableText } from '@portabletext/svelte';
	import internalLink from '$lib/utils/internalLink.svelte';
	import Link from '$lib/utils/Link.svelte';
  import DefaultListItem from '$lib/utils/DefaultListItem.svelte'

	export let content: PageData;
	//export let ix: Number;

  const formatBody = { /// TODO: move to utils and import this
    marks: {
      internalLink: internalLink,
      link: Link,
    },
    listItem: {
      bullet: DefaultListItem,
      number: DefaultListItem
    },
  }
  //console.log({content})
</script>


<article class="prose gap-x-8 gap-y-0">
  {#if content.details}
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="details" /> 
      <p class="collapse-title text-xl font-medium">
        <b>{content.summary}</b>
      </p>
      <div class="collapse-content"> 
        <PortableText value={content.details} components={formatBody}/>
      </div>
    </div>
  {:else}
    <p class="text-xl font-medium">{content.summary}</p>
  {/if}
  
  <!--{#if content.details}
    <details>
      <summary><b>{content.summary}</b></summary>
      <PortableText value={content.details} components={formatBody}/>
    </details>
  {:else}
    <p><b>{content.summary}</b></p>
  {/if}-->
</article>

<style>
  details > summary {
  cursor: pointer;
}
  details > summary, details > :global(p) {
  margin-bottom: .5rem;
}

</style>
