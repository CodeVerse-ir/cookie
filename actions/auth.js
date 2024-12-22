"use server";

import { cookies } from "next/headers";
import { cookieName, removeSession, saveSession } from "@/utils/storage";
import { parseSessionCookie } from "@/utils/parseData";

async function login(stateOtp, formData) {
  const data = {
    "username": "test",
    "first_name": "mohammad",
    "last_name": "kabiri",
  };

  saveSession(data, 60 * 30);  

  console.log("save session");
}

async function me(stateOtp, formData) {

  const rawSession = cookies().get(cookieName)?.value;
  const session = parseSessionCookie(rawSession)

  console.log(session);
}

async function logout(stateOtp, formData) {

  removeSession();

  console.log("remove session");
}

export { login, me, logout };
