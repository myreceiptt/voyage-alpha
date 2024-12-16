"use client";

import { client } from "@/consts/client";
import { ConnectButton, darkTheme } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { ethereum, polygon, base, baseSepolia } from "thirdweb/chains";

const dompets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "email",
        "passkey",
        "phone",
        "apple",
        "facebook",
        "x",
        "telegram",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("app.phantom"),
  createWallet("com.okex.wallet"),
  createWallet("com.coinbase.wallet"),
];

export function UserConnect() {
  return (
    <>
      <ConnectButton
        client={client}
        chains={[ethereum, polygon, base, baseSepolia]}
        supportedTokens={{
          [ethereum.id]: [
            {
              address: "0x83fD0F66eA4f55D846c44539fD7BdB8F0a1d25Df", // Not exist. Change it!
              name: "OiOi",
              symbol: "OiOi",
              icon: "/erc20-icons/oioi.png",
            },
          ],
          [polygon.id]: [
            {
              address: "0x83fD0F66eA4f55D846c44539fD7BdB8F0a1d25Df",
              name: "OiOi",
              symbol: "OiOi",
              icon: "/erc20-icons/oioi.png",
            },
          ],
          [base.id]: [
            {
              address: "0x83fD0F66eA4f55D846c44539fD7BdB8F0a1d25Df", // Not exist. Change it!
              name: "OiOi",
              symbol: "OiOi",
              icon: "/erc20-icons/oioi.png",
            },
          ],
          [baseSepolia.id]: [
            {
              address: "0x83fD0F66eA4f55D846c44539fD7BdB8F0a1d25Df", // Not exist. Change it!
              name: "OiOi",
              symbol: "OiOi",
              icon: "/erc20-icons/oioi.png",
            },
          ],
        }}
        connectButton={{
          label: "LOG IN",
          style: { height: "56px", border: "2px solid #ededed" },
        }}
        wallets={dompets}
        theme={darkTheme({
          colors: {
            primaryText: "#ededed",
            secondaryText: "#ededed",
            accentText: "#ededed",
            danger: "#ededed",
            success: "#ededed",
            accentButtonBg: "#ededed",
            accentButtonText: "#0a0a0a",
            primaryButtonBg: "#0a0a0a",
            primaryButtonText: "#ededed",
            modalBg: "#0a0a0a",
            tooltipBg: "#ededed",
            tooltipText: "#0a0a0a",
            secondaryIconColor: "#ededed",
            secondaryIconHoverBg: "#ededed",
            secondaryIconHoverColor: "#0a0a0a",
            connectedButtonBgHover: "#0a0a0a",
          },
        })}
        connectModal={{
          size: "compact",
          title: "Please LOG IN!",
          titleIcon: "/memora-logo.png",
          showThirdwebBranding: false,
          termsOfServiceUrl: "/terms",
          privacyPolicyUrl: "/policy",
        }}
      />
    </>
  );
}
