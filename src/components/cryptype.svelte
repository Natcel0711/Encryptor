<script>
  import {toggleMenu, windowClick, encryptionManager, EncryptionType} from '../stores/CrypStore.js';
</script>
<svelte:window on:click={windowClick}></svelte:window>
<div class="relative inline-block text-left">
  <div>
    <button on:click={toggleMenu} type="button" class="inline-flex justify-center ml-5 w-full rounded-md border border-gray-400 shadow-sm px-4 py-2.5 bg-white text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-slate-900" id="menu-button" aria-expanded="true" aria-haspopup="true">
      {$EncryptionType}
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  <div id="toggleMenu" class="origin-top-right hidden absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <button on:click={() => encryptionManager('RC4')} class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">RC4</button>
      <button on:click={() => encryptionManager('AES')} class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">AES</button>
      <button on:click={() => encryptionManager('DES')} class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">DES</button>
      <button on:click={() => encryptionManager('Base64')} class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Base64 Encoding</button>
    </div>
  </div>
</div>