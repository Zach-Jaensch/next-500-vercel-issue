import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full h-dvh">
      <main className="flex flex-col gap-4 m-auto justify-center items-center">
        <Link href="/throws">Page that throws</Link>
        <Link href="/?q=any">Page that rewrites to a throw</Link>
      </main>
    </div>
  );
}
