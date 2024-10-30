export default function PageThatThrows() {
  return <>Page that throws</>;
}

export function getServerSideProps() {
  throw new Error("TEST ERROR");
  return { props: {} };
}
