import CryptoJS from 'crypto-js';
import { writable } from 'svelte/store';
import {supabase} from '../supabase.js';
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

export const encrypt = async (text, key, type) => {
  let encryption = "";
  if(type === 'AES')
    encryption = CryptoJS.AES.encrypt(text, key).toString();
  else if(type === 'DES')
    encryption = CryptoJS.DES.encrypt(text, key).toString();
  else if(type === 'RC4')
    encryption = CryptoJS.RC4.encrypt(text, key).toString();
  else if(type === 'Base64')
    encryption = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
  encrypted.set(encryption);
  const {data, error} = await supabase.from('Encrypted').insert({
    Unencrypted: text,
    Key: key,
    EncryptType: type,
    Encrypted: encryption
  });
  if(error){
     return console.log(error);
  }
  console.log(data);
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