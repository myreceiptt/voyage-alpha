import Link from "next/link";
import Image from "next/image";

export function TitleLogo() {
  return (
    <div className="flex flex-row gap-4 items-center justify-between">
      <button
        type="button"
        className="rounded-lg border-2 border-solid border-transparent bg-background dark:bg-foreground hover:border-background hover:dark:border-foreground hover:bg-foreground hover:dark:bg-background transition-colors duration-300 ease-in-out items-center justify-center"
      >
        <Image
          src="/memora-logo.png"
          width={52}
          height={52}
          alt="Memora Logo"
          className="invert-0 dark:invert hover:invert dark:hover:invert-0"
          priority
        />
      </button>
      <button
        type="button"
        className="hidden md:flex items-center p-2 rounded-lg border-2 border-solid border-transparent bg-background dark:bg-foreground hover:border-background hover:dark:border-foreground hover:bg-foreground hover:dark:bg-background transition-colors duration-300 ease-in-out text-foreground dark:text-background hover:text-background hover:dark:text-foreground"
      >
        <Link href="/" title="Welcome to the world of Memora NFT!">
          <h1 className="text-lg leading-9 font-[family-name:var(--font-geist-sans)] font-semibold">
            MEMORA NFT (DEMO)
          </h1>
        </Link>
      </button>
    </div>
  );
}
