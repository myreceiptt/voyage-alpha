"use client";

import DarkButton from "./DarkButton";
import { FaUser } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useGetENSName } from "@/hooks/useGetENSName";
import { useGetENSAvatar } from "@/hooks/useGetENSAvatar";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { blo } from "blo";
import { UserConnect } from "./UserConnect";
import { useDisconnect } from "thirdweb/react";
import type { Wallet } from "thirdweb/wallets";

export function UserMenu({
  address,
  wallet,
}: {
  address: string;
  wallet: Wallet;
}) {
  const { data: ensName } = useGetENSName({ address });
  const { data: ensAvatar } = useGetENSAvatar({ ensName });
  const { disconnect } = useDisconnect();

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };
  return (
    <>
      <div className="flex flex-row gap-4">
        <button
          type="button"
          onClick={toggleUserMenu}
          className="rounded-lg border-2 border-solid border-transparent bg-background dark:bg-foreground text-foreground dark:text-background hover:border-background dark:hover:border-foreground hover:bg-foreground dark:hover:bg-background hover:text-background dark:hover:text-foreground block items-center justify-center text-3xl font-bold p-3.5 transition-colors duration-300 ease-in-out"
        >
          <span className="flex flex-row gap-4 items-center justify-between">
            <FaUser className="w-6 h-6" />
            <Image
              src={ensAvatar ?? blo(address as `0x${string}`)}
              width={24}
              height={24}
              alt="ENS Avatar"
              className="rounded-lg"
            />
          </span>
        </button>
        <div
          className={`fixed top-0 right-0 min-h-screen w-64 bg-foreground dark:bg-background transform transition-transform duration-300 ease-in-out ${
            isUserMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex flex-row items-center justify-between p-4 border-b-2 border-background dark:border-foreground">
            <DarkButton />
            <button
              type="button"
              onClick={toggleUserMenu}
              className="absolute right-4 rounded-lg border-2 border-solid border-transparent bg-background dark:bg-foreground text-foreground dark:text-background hover:border-background dark:hover:border-foreground hover:bg-foreground dark:hover:bg-background hover:text-background dark:hover:text-foreground block items-center justify-center text-3xl font-bold p-3.5 transition-colors duration-300 ease-in-out"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-4 p-4">
            <UserConnect />
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
          </div>
        </div>
      </div>
    </>
  );
}
