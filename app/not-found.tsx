import Link from "next/link";

export default function PageNotFound() {
  return (
    <>
      <h1>Page not found , go back to</h1>
      <Link href="/">Home page</Link>
    </>
  );
}
