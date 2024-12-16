"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import DarkButton from "./DarkButton";
import { useGetENSName } from "@/hooks/useGetENSName";
import Link from "next/link";
import {
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
} from "thirdweb/react";
import { UserConnect } from "./UserConnect";

export function SideMenu() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const { data: ensName } = useGetENSName({ address: account?.address });
  const { disconnect } = useDisconnect();

  return (
    <>
      <button
        type="button"
        onClick={toggleSideMenu}
        className="rounded-lg border-2 border-solid border-transparent bg-background dark:bg-foreground text-foreground dark:text-background hover:border-background dark:hover:border-foreground hover:bg-foreground dark:hover:bg-background hover:text-background dark:hover:text-foreground block items-center justify-center text-3xl font-bold p-3.5 transition-colors duration-300 ease-in-out"
      >
        <FaBars className="w-6 h-6" />
      </button>
      <div
        className={`fixed top-0 right-0 min-h-screen w-64 bg-foreground dark:bg-background shadow-xl transform transition-transform duration-300 ease-in-out ${
          isSideMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden z-50`}
      >
        <div className="flex flex-row items-center justify-between p-4 border-b-2 border-background dark:border-foreground">
          <DarkButton />
          <button
            type="button"
            onClick={toggleSideMenu}
            className="absolute right-4 rounded-lg border-2 border-solid border-transparent bg-background dark:bg-foreground text-foreground dark:text-background hover:border-background dark:hover:border-foreground hover:bg-foreground dark:hover:bg-background hover:text-background dark:hover:text-foreground block items-center justify-center text-3xl font-bold p-3.5 transition-colors duration-300 ease-in-out"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <UserConnect />
          {account && (
            <>
              <button
                type="button"
                className="flex items-center p-3 text-lg gap-x-2 text-foreground dark:text-background hover:text-background dark:hover:text-foreground bg-background dark:bg-foreground hover:bg-foreground dark:hover:bg-background rounded-lg border-2 border-solid border-transparent hover:border-background dark:hover:border-foreground font-[family-name:var(--font-geist-mono)] font-semibold transition-colors duration-300 ease-in-out"
              >
                <Link href="/" className="flex items-center">
                  PROFILE {ensName ? `(${ensName})` : ""}
                </Link>
              </button>
              <button
                type="button"
                className="flex items-center p-3 text-lg gap-x-2 text-foreground dark:text-background hover:text-background dark:hover:text-foreground bg-background dark:bg-foreground hover:bg-foreground dark:hover:bg-background rounded-lg border-2 border-solid border-transparent hover:border-background dark:hover:border-foreground font-[family-name:var(--font-geist-mono)] font-semibold transition-colors duration-300 ease-in-out"
              >
                <Link
                  onClick={() => {
                    if (wallet) disconnect(wallet);
                  }}
                  href="/"
                  className="flex items-center"
                >
                  LOG OUT
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
