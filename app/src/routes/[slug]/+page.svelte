<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';
  import { setContext } from 'svelte'


	export let data: PageData;
  setContext('data', { data });

</script>

<article class="post prose">

  {#if !!data.mainImage}
    {@const src = data.mainImage}
    <!--{@debug src}-->
    <p>
      <img
        class="post__contains"
        src={urlFor(data.mainImage).url()}
        alt="Cover image for {data.title}"
      />
    </p>
  {:else}
    <p class="post__cover--none" />
  {/if}

    <h1 class="post__title">{data.title}</h1>
    {#if data.excerpt}<div class="post__excerpt">{data.excerpt}</div>{/if}
    <date class="post__date text-sm">Frissítve: 
      {formatDate(data._createdAt)}
    </date>
    <PortableText value={data.body} components={{}} />
</article>

<style>
  img {
    margin-inline: auto;
    min-height: 25vh;
  }
</style>

<!--<style data-global>
.post__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32ch, 1fr));
  grid-auto-flow: dense;
}
:global(.post__content) > * {
  margin-inline: auto;
  /* max-width: max(100%,29ch); */
  padding: 0 1vw;
  box-sizing: content-box;
  transition: all .25s;
  /* position: relative; */
  display: block;
  border-radius: 0.35rem;
  background-color: aliceblue;
  box-shadow: var(--shadow) 0 0 0.5rem;
}

</style>-->