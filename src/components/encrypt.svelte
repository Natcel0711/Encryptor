<script>
	let unencrypted = '';
  let key = '';
	import { EncryptionType ,encrypt, encrypted, copytoClipboard } from '../stores/CrypStore.js';
</script>

<div>
	<h1 class="text-4xl text-center mt-8 mb-4 uppercase">{$EncryptionType} Encryptor</h1>
  <p class="text-lg">You can change encryption type in the drop down above</p>
</div>
<div>
	<input class="w-96 rounded-md text-lg p-4 border-2 border-gray-200" placeholder="Text to encrypt..." type="text" bind:value={unencrypted} />
  {#if $EncryptionType !== 'Base64' }
    <input class="w-96 rounded-md text-lg p-4 border-2 border-gray-200" placeholder="Key..." type="text" bind:value={key} />
  {/if}
</div>
<div>
	<button class="bg-white hover:bg-gray-100 text-gray-800 my-2 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." on:click={() => encrypt(unencrypted, key, $EncryptionType)}>Encrypt</button>
  {#if $encrypted.length > 0}
  <button class="bg-white hover:bg-gray-100 text-gray-800 my-2 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..." on:click={() => copytoClipboard($encrypted)}>Copy to Clipboard</button>
  {/if}
</div>
<div>
	<p>
		{#if $encrypted.length > 0}
			Encrypted: <textarea disabled={true} bind:value="{$encrypted}"
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
			Waiting for encryption...
		{/if}
	</p>
</div>
