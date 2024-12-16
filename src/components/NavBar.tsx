"use client";

import { TitleLogo } from "./TitleLogo";
import DarkButton from "./DarkButton";
import { UserMenu } from "./UserMenu";
import { useActiveAccount, useActiveWallet } from "thirdweb/react";
import { SideMenu } from "./SideMenu";
import { UserConnect } from "./UserConnect";

export function NavBar() {
  const account = useActiveAccount();
  const wallet = useActiveWallet();

  return (
    <div className="flex flex-row content-center justify-between p-4 bg-foreground dark:bg-background">
      <TitleLogo />
      <div className="hidden md:flex flex-row gap-4 items-center justify-between">
        <DarkButton />
        {account && wallet ? (
          <UserMenu address={account.address} wallet={wallet} />
        ) : (
          <UserConnect />
        )}
      </div>
      <div className="md:hidden flex flex-row gap-4 items-center justify-between">
        <SideMenu />
      </div>
    </div>
  );
}
