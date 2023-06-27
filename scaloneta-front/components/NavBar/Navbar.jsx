import Link from "next/link";

export default function Navbar() {
  return (
    <ul>
      <Link href="/">Home</Link>
      <Link href="/partidos">Partidos</Link>
    </ul>
  );
}
