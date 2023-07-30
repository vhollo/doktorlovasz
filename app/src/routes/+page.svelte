<script lang="ts">
	import Card from '../components/Card.svelte';
	import Welcome from '../components/Welcome.svelte';
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';

	export let data: PageData;
  console.log(data.body)
</script>

<!--
<section>
	{#if data.posts.length}
		{#each data.posts as post}
			<Card {post} />
		{/each}
	{:else}
		<Welcome />
	{/if}
</section>
-->

<section class="post">
	<!--{#if data.mainImage}
		<img
			class="post__contains"
			src={urlFor(data.mainImage).url()}
			alt="Cover image for {data.title}"
		/>
	{:else}
		<div class="post__cover--none" />
	{/if}-->
	<div class="post__container">
		<div class="post__content">

    {#if data.mainImage}
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
      <div>
        <h2 class="post__title">{data.title}</h2>
        <p class="post__excerpt">{data.excerpt}</p>
      </div>
      <date class="post__date">Frissítve: 
        {formatDate(data._createdAt)}
      </date>
			<PortableText value={data.body} />
		</div>
	</div>
</section>

<style>
  img {
    margin-inline: auto;
    min-height: 25vh;
  }
</style>
