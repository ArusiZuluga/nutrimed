import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
      <div className="text-gray-500">
        All Rights Reserved{" "}
        <a
          href="https://replicate.com/"
          target="_blank"
          className="font-bold hover:underline transition hover:text-gray-300 underline-offset-2"
        >
          Nutrimed{" "}
        </a>
        <a
          href="https://upload.io"
          target="_blank"
          className="font-bold hover:underline hover:text-gray-300 transition underline-offset-2"
        >
          Foods{" "}
        </a>
        <a
          href="https://loops.so"
          target="_blank"
          className="font-bold hover:underline hover:text-gray-300 transition underline-offset-2"
        >
          2023{" "}
        </a>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
      </div>
    </footer>
  );
}
