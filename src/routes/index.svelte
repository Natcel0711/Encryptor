<script>
	import Encrypter from '../components/encrypt.svelte';
	import Decrypter from '../components/decrypt.svelte';
  let encryptMode = true;
  function toggleEncryptMode() {
  encryptMode = !encryptMode;
}
</script>

<div>
	<div>
		<button class="bg-white hover:bg-gray-100 text-gray-800 my-2 font-semibold py-2 px-4 border border-gray-400 rounded shadow" on:click={toggleEncryptMode}>Mode</button>
	</div>
	<div class="grid text-4xl py-4 gap-4 grid-cols-1 text-center">
		{#if encryptMode}
			<Encrypter />
		{:else}
			<Decrypter />
		{/if}
	</div>
</div>
