"use client";

import { useFormState } from "react-dom";
import { login, logout, me } from "@/actions/auth";

// components
import SubmitBtn from "@/components/SubmitBtn";

const LoginPage = () => {
  const [stateLogin, formActionLogin] = useFormState(login, {});
  const [stateMe, formActionMe] = useFormState(me, {});
  const [stateLogout, formActionLogout] = useFormState(logout, {});

  return (
    <>
      <section className="relative bg-gray-400">
        <div className="container w-screen h-screen flex items-center justify-center font-bold">
          <div className="relative flex flex-col items-center justify-end w-[200px] p-10 gap-y-5 bg-gray-50 rounded-md">
            <form
              action={formActionLogin}
              className="w-full flex flex-col items-center justify-center gap-y-5"
            >
              <SubmitBtn
                title="SET"
                style="flex items-center justify-center w-full h-12 text-center rounded-lg text-orange-700 bg-orange-300 hover:bg-orange-400 cursor-pointer transition-all"
              />
            </form>
            <form
              action={formActionMe}
              className="w-full flex flex-col items-center justify-center gap-y-5"
            >
              <SubmitBtn
                title="GET"
                style="flex items-center justify-center w-full h-12 text-center rounded-lg text-orange-700 bg-orange-300 hover:bg-orange-400 cursor-pointer transition-all"
              />
            </form>
            <form
              action={formActionLogout}
              className="w-full flex flex-col items-center justify-center gap-y-5"
            >
              <SubmitBtn
                title="DELETE"
                style="flex items-center justify-center w-full h-12 text-center rounded-lg text-orange-700 bg-orange-300 hover:bg-orange-400 cursor-pointer transition-all"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
