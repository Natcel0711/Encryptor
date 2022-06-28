<script>
  export let unencrypted = "";
  import {encrypt, decrypt, encrypted} from "../stores/CrypStore.js"
</script>
<div>
  <div>
    <h1>Encryptor</h1>
  </div>
  <div>
    <input type="text" bind:value={unencrypted}>
  </div>
  <div>
    <button on:click={encrypt(unencrypted)}>Encrypt</button>
    <button on:click={decrypt(unencrypted)}>Decrypt</button>
  </div>
  <div>
    <p>
      {#if unencrypted.length > 0 }
      {unencrypted} is now {$encrypted}
      {:else}
      Waiting for encryption...
      {/if}
    </p>
  </div>
</div>