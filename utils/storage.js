import { cookies } from "next/headers";
import { createHash, encryptData } from "./helper";

export const cookieName = "Cookie";

export function saveSession(session, age) {
    const hash = createHash(JSON.stringify(session));
    const encryptedData = encryptData({ ...session, hash });

    cookies().set(cookieName, encryptedData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: '/',
        // maxAge: age,
    });
}

export function removeSession() {
    cookies().delete(cookieName);
}