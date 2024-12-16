import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 content-normal px-8 md:px-20 m-4">
      <Image src="/voyage-01.jpg" alt="VOYAGE" width={1920} height={1080} />
    </div>
  );
}
