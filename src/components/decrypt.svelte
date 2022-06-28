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
			Decrypted: {$decrypted}
		{:else}
			Waiting for Decryption...
		{/if}
	</p>
</div>