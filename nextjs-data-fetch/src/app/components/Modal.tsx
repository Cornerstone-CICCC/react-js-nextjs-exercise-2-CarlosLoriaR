"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => router.back()}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-sm w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <div className="mt-4 flex gap-3">
          <button
            onClick={() => router.back()}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Close
          </button>
          <Link
            href="/users"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Back to Users
          </Link>
        </div>
      </div>
    </div>
  );
}
