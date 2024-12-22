import { createHash, decryptData } from "./helper";

export function parseSessionCookie(cookie) {
    try {
        const decryptedData = decryptData(cookie);

        const originalHash = decryptedData.hash;
        delete decryptedData.hash;

        const newHash = createHash(JSON.stringify(decryptedData));

        if (originalHash !== newHash) {
            throw new Error(
                "The data has been manipulated!"
            )
        } else {
            return decryptedData
        }
    } catch {
        return false;
    }

}
