import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptService {

  constructor() { }

  iv = CryptoJS.enc.Utf8.parse('8951236478945612');
  secretKey = '123@#$%^&FA15EYs';

  Encrypt(value: string): string{
    const key = CryptoJS.enc.Utf8.parse(this.secretKey);
    const iv = CryptoJS.enc.Utf8.parse(this.secretKey);
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()) , key , {
      keySize: 128 / 8,
      iv,
      /*mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7*/
    });
    return encrypted.toString();
  }

  Decrypt(value: string): string{
    const key = CryptoJS.enc.Utf8.parse(this.secretKey);
    const iv = CryptoJS.enc.Utf8.parse(this.secretKey);
    const decrypted = CryptoJS.AES.decrypt(value , key , {
      keySize: 128 / 8,
      iv,
      /*mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7*/
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
