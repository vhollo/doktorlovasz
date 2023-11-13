<script lang="ts">
	import type { PageData } from '../../routes/$types';
	import { PortableText } from '@portabletext/svelte';
	import internalLink from '$lib/utils/internalLink.svelte';
	import Link from '$lib/utils/Link.svelte';
  import DefaultListItem from '$lib/utils/DefaultListItem.svelte'

	export let content: PageData;
	export const ix: Number = 0;

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


  {#if content.details}
  <section class="prose gap-x-8 gap-y-0 card text-primary-content max-w-prosee bg-primary"><div class="card-body">
    <div class="card-body collapse collapse-arrow">
      <input type="radio" name="details" /> 
      <p class="collapse-title">
        <b>{content.summary}</b>
      </p>
      <div class="collapse-content"> 
        <PortableText value={content.details} components={formatBody}/>
      </div>
    </div>
  </div></section>
  {:else}
  <section class="prose gap-x-8 gap-y-0 card max-w-prosee bg-neutral text-neutral-content"><div class="card-body">
    <p class="card-body">{content.summary}</p>
  </div></section>
  {/if}
  
  <!--{#if content.details}
    <details>
      <summary><b>{content.summary}</b></summary>
      <PortableText value={content.details} components={formatBody}/>
    </details>
  {:else}
    <p><b>{content.summary}</b></p>
  {/if}-->

<style>
  .card-body {
    max-width: max-content;
    margin-inline: auto;
    padding: 0;
  }
  p.card-body {
    padding: 1rem;
  }

  details > summary {
  cursor: pointer;
}
  details > summary, details > :global(p) {
  margin-bottom: .5rem;
}

</style>
