import { GetStaticPaths } from "next";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Category() {
  const params = useParams<{ slug: string }>();

  return (
    <div className="flex w-full h-dvh">
      <main className="flex flex-col gap-4 m-auto justify-center items-center">
        <Link href="/throws">Page that throws</Link>
        <Link href="/?q=any">Page that rewrites to a throw</Link>
        <Link href="/category_1">Dynamic page link 1</Link>
        <Link href="/category_2">Dynamic page link 2</Link>
        <p>Slug: {params?.slug || "No Slug"}</p>
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { slug: "category_1" } },
    { params: { slug: "category_2" } },
  ];
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
