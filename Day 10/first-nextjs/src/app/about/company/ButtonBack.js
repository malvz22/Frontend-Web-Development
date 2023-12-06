"use client";

import { useRouter } from "next/navigation";

export default function ButtonBack() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push("/")}>
      Back to home
    </button>
  );
}
