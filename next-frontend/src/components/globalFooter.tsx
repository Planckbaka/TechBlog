import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function GlobalFooter() {
  return (
    <footer className="bottom-0 left-0 right-0 bg-white dark:bg-slate-950 h-10 mt-6 flex items-center justify-center">
      <div className="flex max-w-4xl w-full justify-center border-t-1 pt-6">
        <p className="text-sm font-body mb-2">
          © 2025 <Link href="https://github.com/Planckbaka" className={`underline`}>Aki Wayne</Link>. All right reserved.
        </p>
      </div>


    </footer>
  );
}
export default GlobalFooter;
