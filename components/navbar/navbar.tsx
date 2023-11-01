import React from "react";
import { BellDotIcon, BellRing, Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./navlink";
import SignInButton from "../auth/signIn";
import { UserInfo } from "../auth/user-info";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/hub", label: "Hub" },
];

export default async function NavBar() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex justify-between m-7 ">
      <Link href="/">
        <h2 className="text-4xl  flex items-center font-navaMono">
          <Image
            src="https://img.freepik.com/premium-vector/elegant-letter-sp-ps-minimalist-logo_649646-229.jpg?size=626&ext=jpg"
            className="object-contain rounded-lg"
            width={50}
            height={50}
            alt="Logo"
          />
          ARIFY
        </h2>
      </Link>
      <div className="flex gap-16 items-center">
        <div className="flex gap-2">
          {navLinks.map((link) => {
            return (
              <NavLink
                activeClassName="bg-slate-900 text-slate-50 rounded-full w-32 dark:bg-slate-50 dark:text-slate-300 flex py-2 items-center justify-center pr-2 "
                className="border w-32   flex items-center py-2 justify-center border-slate-200 bg-white pr-2 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 rounded-full"
                key={link.href}
                href={link.href}
              >
                <Dot />
                {link.label}
              </NavLink>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <BellDotIcon size={20} />
          {session ? <SignInButton /> : <UserInfo />}
        </div>
      </div>
    </div>
  );
}