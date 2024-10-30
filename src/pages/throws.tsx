export default function PageThatThrows() {
  throw new Error("TEST ERROR");
  return <>Page that throws</>;
}
