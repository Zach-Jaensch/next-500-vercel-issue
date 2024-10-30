import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <Link href="/throws">Page that throws</Link>
      </main>
    </div>
  );
}
