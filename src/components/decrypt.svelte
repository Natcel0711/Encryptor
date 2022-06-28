<script>
	let encrypted = '';
	import { decrypted, decrypt, copytoClipboard } from '../stores/CrypStore.js';
</script>

<div>
	<h1 class="text-4xl my-8 uppercase">Decryptor</h1>
</div>
<div>
	<input class="w-96 rounded-md text-lg p-4 border-2 border-gray-200" type="text" bind:value={encrypted} />
</div>
<div>
	<button class="bg-white hover:bg-gray-100 text-gray-800 my-2 font-semibold py-2 px-4 border border-gray-400 rounded shadow" on:click={decrypt(encrypted)}>Decrypt</button>
  {#if $decrypted.length > 0}
  <button class="bg-white hover:bg-gray-100 text-gray-800 my-2 font-semibold py-2 px-4 border border-gray-400 rounded shadow" on:click={copytoClipboard($decrypted)}>Copy to Clipboard</button>
  {/if}
</div>
<div>
	<p>
		{#if $decrypted.length > 0}
			Decrypted: <textarea disabled="true" bind:value="{$decrypted}"
      class="
        form-control
        block
        w-full
				my-4
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder="Your message"
    ></textarea>
		{:else}
			Waiting for Decryption...
		{/if}
	</p>
</div>