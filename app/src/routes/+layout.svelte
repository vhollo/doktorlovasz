<script>
	import '$src/app.postcss';
  import { dev } from '$app/environment'
	import Themes from '$components/Themes.svelte';
</script>

<div class="navbar h-16 border-b-2 bg-primary text-base-content">
<nav class="mx-auto">
	<a class="flex-none" href="/"><h1>Dr.&nbsp;Lovász&nbsp;Sándor&nbsp;Ph.D.</h1></a>

  <ul class="hidden min-[920px]:flex flex-1 menu menu-horizontal menu-sm">
    <li><a href="rendeles">Rendelési idők</a></li>
    <li><a href="ic-bps">IC/BPS</a></li>
    <li><a href="eletrajz">Szakmai életrajz</a></li>
    <li><a href="talalmanyok">Találmányok</a></li>
    <li><a href="publikaciok">Publikációk</a></li>
  </ul>

  <div class="dropdown dropdown-end ml-auto min-[920px]:hidden">
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <label tabindex="0" aria-label="Dropdown menu" class="btn btn-ghost btn-sm p-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary text-primary-content rounded-box">
      <li><a href="rendeles">Rendelési idők</a></li>
      <li><a href="ic-bps">IC/BPS</a></li>
      <li><a href="eletrajz">Szakmai életrajz</a></li>
      <li><a href="talalmanyok">Találmányok</a></li>
      <li><a href="publikaciok">Publikációk</a></li>
      </ul>
  </div>
</nav>
</div>

<main class="mt-12 p-2 mx-auto">
	<slot />
</main>


<footer class="footer footer-center flex-nowrap p-4 bg-base-300 text-base-content">
  <div>
    <p class="mx-auto w-max">
      Made with <svg
        data-sanity-icon="heart-filled"
        width="1em"
        height="1em"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1.2"
        /></svg
      >&nbsp;at&nbsp;<a href="https://www.urosystem.com/hu">UroSystem</a>
    </p>
  </div>
</footer>

<!--{#if dev}-->
  <Themes/>
<!--{/if}-->


<style type="postcss">
  footer {
    display: none;
  }
	.navbar {
    position: sticky;
    top: 0;
    z-index: 999;
    font-weight:bold;
    text-transform: uppercase;
	}
	nav {
    max-width: 96ch;
	}
  nav ul {
    justify-content: end;
    width: max-content;
  }

  nav > a {
    padding-left: 0;
    padding-right: 1.25rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }

  li:last-child > a {
    padding-right: 0;
  }

</style>
