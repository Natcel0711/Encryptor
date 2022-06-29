import CryptoJS from 'crypto-js';
import { writable } from 'svelte/store';
export let encrypted = writable('');
export let decrypted = writable('');
export let EncryptionType = writable('Base64');
export function copytoClipboard(text) {
  navigator.clipboard.writeText(text);
  alert("Copied the text: " + text);
}
//get writable<string> value from store
EncryptionType.subscribe(function (type) {
  console.log(type);
});
export const encryptionManager = (text) => {
  if(text === 'AES')
    EncryptionType.update(n => 'AES');
  else if(text === 'DES')
    EncryptionType.update(n => 'DES');
  else if(text === 'RC4')
    EncryptionType.update(n => 'RC4');
  else if(text === 'Base64')
    EncryptionType.update(n => 'Base64');
}

export const encrypt = (text, key, type) => {
  if(type === 'AES')
    encrypted.set(CryptoJS.AES.encrypt(text, key).toString());
  else if(type === 'DES')
    encrypted.set(CryptoJS.DES.encrypt(text, key).toString());
  else if(type === 'RC4')
    encrypted.set(CryptoJS.RC4.encrypt(text, key).toString());
  else if(type === 'Base64')
    encrypted.set(CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text)));
}
export const decrypt = (text, key, type) => {
  if(type === 'AES')
    encrypted.set(CryptoJS.AES.decrypt(text, key).toString());
  else if(type === 'DES')
    encrypted.set(CryptoJS.DES.decrypt(text, key).toString());
  else if(type === 'RC4')
    encrypted.set(CryptoJS.RC4.decrypt(text, key).toString());
  else if(type === 'Base64')
    encrypted.set(CryptoJS.enc.Base64.parse(text).toString(CryptoJS.enc.Utf8));
}
export function toggleMenu(){
  let menu = document.getElementById('toggleMenu');
  if (menu?.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  }
  else {
      menu?.classList.add('hidden');
  }
}

export function windowClick(event) {
  let menu = document.getElementById('toggleMenu');
  let dropdownWrapper = document.getElementById('menu-button');
  if (!dropdownWrapper?.contains(event.target) && !menu?.classList.contains('hidden')) {
      menu?.classList.add('hidden');
  }
}