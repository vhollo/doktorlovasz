<script lang="ts">
	import Heading from '$components/Heading.svelte';
	import Text from '$components/Text.svelte';
	import Details from '$components/Details.svelte';
	import TwoCols from '$components/TwoCols.svelte';
	import Cta from '$components/Cta.svelte';
	import type { PageData } from '../../routes/$types';

  const comps: PageData = {
    heading: Heading,
    body: Text,
    details: Details,
    twocols: TwoCols,
    cta: Cta,
    xcta: Cta,
  }

  export let content: PageData;
	export let ix: Number;

  console.log({content})
</script>

<svelte:component this={comps[content._type]} {content} {ix}/>
