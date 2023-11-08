<script>
	import '$src/app.postcss';
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import { dev } from '$app/environment'
  export const prerender = true;

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false)
    // 👆 false parameter is required for svelte
  })
</script>

<nav class="navbar mx-auto h-16 border-b-2 bg-base-100">
	<a class="flex-none" href="/"><h1>Dr.&nbsp;Lovász&nbsp;Sándor&nbsp;Ph.D.</h1></a>

  <ul class="hidden sm:flex flex-1 menu menu-horizontal menu-sm">
    <li><a href="ic-bps">IC/BPS</a></li>
    <li><a href="eletrajz">Szakmai életrajz</a></li>
    <li><a href="talalmanyok">Találmányok</a></li>
    <li><a href="publikaciok">Publikációk</a></li>
  </ul>

  <div class="dropdown dropdown-end ml-auto sm:hidden">
    <button aria-label="Dropdown menu" class="btn btn-ghost btn-sm p-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </button>
    <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a href="ic-bps">IC/BPS</a></li>
      <li><a href="eletrajz">Szakmai életrajz</a></li>
      <li><a href="talalmanyok">Találmányok</a></li>
      <li><a href="publikaciok">Publikációk</a></li>
      </ul>
  </div>
</nav>

{#if dev}
  <div class="drawer drawer-end">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer" class="btn btn-primary btn-circle drawer-button w-16 h-16 m-3">
        <svg class="h-12 w-12" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
          <path fill="#abaad5" d="M85,50.149l-1.725,1.725h-8.694c0.052-0.569,0.069-1.139,0.069-1.725 c0-13.334-10.816-24.15-24.15-24.15c-0.587,0-1.156,0.017-1.725,0.069v-8.694l1.725-1.725c9.522,0,18.147,3.864,24.392,10.108 C81.619,32.485,85,41.317,85,50.149z"></path><path fill="#ee5490" d="M85,50.149c0,9.522-3.864,18.147-10.108,24.392c-6.728,6.727-15.56,10.108-24.392,10.108 l-1.725-1.725V74.23c0.569,0.052,1.138,0.069,1.725,0.069c12.748,0,23.201-9.901,24.081-22.425 c0.052-0.569,0.069-1.139,0.069-1.725H85z"></path><path fill="#31c4f3" d="M50.5,74.299v10.35c-9.522,0-18.147-3.864-24.392-10.108C19.364,67.813,16,58.981,16,50.149 l1.725-1.725h8.694c-0.052,0.569-0.069,1.138-0.069,1.725c0,12.748,9.901,23.201,22.425,24.081 C49.344,74.282,49.913,74.299,50.5,74.299z"></path><path fill="#f9e65c" d="M50.5,15.649v10.35c-0.587,0-1.156,0.017-1.725,0.069C36.821,26.913,27.264,36.47,26.419,48.424 c-0.052,0.569-0.069,1.138-0.069,1.725H16c0-9.522,3.864-18.147,10.108-24.392C32.836,19.013,41.668,15.649,50.5,15.649z"></path><path fill="#1f212b" d="M50.5,85.649c-19.575,0-35.5-15.925-35.5-35.5s15.925-35.5,35.5-35.5S86,30.574,86,50.149 S70.075,85.649,50.5,85.649z M50.5,16.649c-18.472,0-33.5,15.028-33.5,33.5s15.028,33.5,33.5,33.5S84,68.621,84,50.149 S68.972,16.649,50.5,16.649z"></path><path fill="#1f212b" d="M68.5,26.649c-0.105,0-0.211-0.033-0.301-0.101c-0.321-0.242-0.65-0.474-0.983-0.703 c-0.227-0.157-0.284-0.468-0.128-0.695c0.158-0.229,0.469-0.284,0.696-0.128c0.343,0.237,0.684,0.477,1.017,0.728 c0.221,0.166,0.265,0.479,0.099,0.7C68.802,26.58,68.651,26.649,68.5,26.649z"></path><path fill="#1f212b" d="M65.5,24.672c-0.085,0-0.172-0.021-0.25-0.067c-0.718-0.415-1.361-0.758-1.967-1.05 c-0.249-0.12-0.354-0.419-0.233-0.667c0.12-0.25,0.419-0.353,0.667-0.234c0.629,0.303,1.294,0.658,2.033,1.086 c0.239,0.138,0.321,0.444,0.183,0.683C65.84,24.583,65.672,24.672,65.5,24.672z"></path><path fill="#1f212b" d="M50.5,25.649c-13.531,0-24.5,10.969-24.5,24.5s10.969,24.5,24.5,24.5S75,63.68,75,50.149 S64.031,25.649,50.5,25.649z M50.5,72.649c-12.426,0-22.5-10.074-22.5-22.5s10.074-22.5,22.5-22.5S73,37.722,73,50.149 S62.926,72.649,50.5,72.649z"></path><line x1="16" x2="27" y1="50.649" y2="50.649" fill="none" stroke="#1f212b" stroke-miterlimit="10" stroke-width="2"></line><line x1="74" x2="85" y1="50.649" y2="50.649" fill="none" stroke="#1f212b" stroke-miterlimit="10" stroke-width="2"></line><line x1="50.5" x2="50.5" y1="16.149" y2="27.149" fill="none" stroke="#1f212b" stroke-miterlimit="10" stroke-width="2"></line><line x1="50.5" x2="50.5" y1="74.149" y2="85.149" fill="none" stroke="#1f212b" stroke-miterlimit="10" stroke-width="2"></line><path fill="none" stroke="#1f212b" stroke-linecap="round" stroke-miterlimit="10" d="M53.5,20.297 c2.43,0.241,4.775,0.773,7,1.559"></path><path fill="none" stroke="#1f212b" stroke-linecap="round" stroke-miterlimit="10" d="M41.5,78.775 c-2.298-0.722-4.477-1.713-6.5-2.936"></path><path fill="none" stroke="#1f212b" stroke-linecap="round" stroke-miterlimit="10" d="M47.5,80.001 c-0.673-0.067-1.34-0.156-2-0.267"></path><path fill="none" stroke="#1f212b" stroke-linecap="round" stroke-miterlimit="10" d="M68.502,74.149 c-4.263,3.203-9.406,5.296-15.002,5.852"></path><path fill="none" stroke="#1f212b" stroke-linecap="round" stroke-miterlimit="10" d="M72.5,70.545 c-0.514,0.555-1.05,1.09-1.604,1.604"></path><path fill="none" stroke="#1f212b" stroke-linecap="round" stroke-miterlimit="10" d="M76.5,65.125 c-0.606,1.05-1.274,2.059-1.998,3.024"></path><path fill="none" stroke="#1f212b" stroke-linecap="round" stroke-miterlimit="10" d="M71,28.246 c5.392,5.048,8.918,12.065,9.434,19.903"></path>
        </svg>
      </label>
    </div> 
    <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu join-vertical p-4 w-40 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <!--<li class="btn" data-set-theme="light">Light</li>
        <li class="btn" data-set-theme="emerald">Emerald</li>
        --><li class="btn" data-set-theme="corporate">Light</li>
        <!--<li class="btn" data-set-theme="pastel">Pastel</li>
        <li class="btn" data-set-theme="cmyk">CMYK</li>
        <li class="btn" data-set-theme="winter">Winter</li>
        <li class="btn" data-set-theme="aqua">Aqua</li>
        <li class="btn" data-set-theme="dark">Dark</li>
        --><li class="btn" data-set-theme="business">Dark</li>
        <!--<li class="btn" data-set-theme="night">Night</li>-->
      </ul>
    </div>
  </div>
{/if}

<main class="mt-12 p-2 mx-auto">
<!--
  <button class="btn btn-sm">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path fill="none" stroke="#000" stroke-miterlimit="10" d="M10 2C6.7 2 4 4.8 4 8.2c0 2.7 3.6 7.4 5.2 9.4.4.5 1.1.5 1.5 0 1.6-2 5.2-6.8 5.2-9.4C16 4.8 13.3 2 10 2zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>
  Térkép
</button>
-->
	<slot />
</main>


<footer class="footer footer-center flex-nowrap p-4 bg-base-300 text-base-content">
  <aside>
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
  </aside>
</footer>

<style type="postcss">
	nav {
    max-width: 90ch;
    position: sticky;
    top: 0;
    z-index: 999;
	}
  nav ul {
    justify-content: end;
  }

  .drawer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .drawer-content {
    margin-left: auto;
    z-index: 999;
  }

	svg {
		display: inline-block;
	}
</style>
