<script>
	let unencrypted = '';
	import { encrypt, encrypted, copytoClipboard } from '../stores/CrypStore.js';
</script>

<div>
	<h1 class="text-4xl text-center my-8 uppercase">Encryptor</h1>
</div>
<div>
	<input class="w-96 rounded-md text-lg p-4 border-2 border-gray-200" type="text" bind:value={unencrypted} />
</div>
<div>
	<button class="bg-white hover:bg-gray-100 text-gray-800 my-2 font-semibold py-2 px-4 border border-gray-400 rounded shadow" on:click={encrypt(unencrypted)}>Encrypt</button>
  {#if $encrypted.length > 0}
  <button class="bg-white hover:bg-gray-100 text-gray-800 my-2 font-semibold py-2 px-4 border border-gray-400 rounded shadow" on:click={copytoClipboard($encrypted)}>Copy to Clipboard</button>
  {/if}
</div>
<div>
	<p>
		{#if $encrypted.length > 0}
			Encrypted: {$encrypted}
		{:else}
			Waiting for encryption...
		{/if}
	</p>
</div>
