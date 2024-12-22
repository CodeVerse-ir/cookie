import CryptoJS from "crypto-js";

const secretKey = process.env.SECRET_KEY;

const createHash = (data) => {
    return CryptoJS.SHA256(data).toString();
}

const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
}

const decryptData = (cipherText) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
    const originalData = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(originalData);
}


export { createHash, encryptData, decryptData }