export default function Error500() {
  return (
    <div className="flex w-full h-dvh">
      <main className="flex flex-col gap-4 m-auto justify-center items-center">
        <h1 className="text-2xl">500 Error page</h1>
      </main>
    </div>
  );
}

export function getStaticProps() {
  return { props: {} };
}
