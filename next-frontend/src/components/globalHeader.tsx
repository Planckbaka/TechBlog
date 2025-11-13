"use client"
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function GlobalHeader() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 left-0 right-0 flex bg-slate-950 h-16 items-center justify-between z-10 border-b border-white/10">
        <div><Link href="/">
          <p className="font-press text-xl pl-10">
            Aki Wayne&#39;s HomePage - Backend Developer
          </p>
        </Link>

        </div>

        <nav className="flex items-center ">
            <Button variant="ghost" asChild>
              <Link href={`/`}>
                <p className={`${pathname=="/"& &"underline"} font-press`}>Home</p>

              </Link>
            </Button>
          <Separator orientation="vertical" />
          <Button variant="ghost" >
            <Link href={`/blog`}>
              <p className={`${pathname=="/blog"&&"underline"} font-press`}>Blog</p>
            </Link>


          </Button>
          <Separator orientation="vertical"/>
          <Button variant="ghost" >
            <Link href={`/contact`}>
              <p className={`${pathname=="/contact"&&"underline"} font-press`}>Contact</p>
            </Link>
          </Button>
        </nav>
    </header>
  );
}
export default GlobalHeader;
