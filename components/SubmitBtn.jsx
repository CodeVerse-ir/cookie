"use client";

import { useFormStatus } from "react-dom";

const SubmitBtn = ({ title, style }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`${style} flex items-center justify-center`}
    >
      {!pending ? (
        title
      ) : (
        <div className="flex items-center justify-center gap-x-2">
          <div>منتظر بمانید</div>
          <span className="loading loading-dots loading-md"></span>
        </div>
      )}
    </button>
  );
};

export default SubmitBtn;
