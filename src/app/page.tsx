import Link from "next/link";

export default function Home() {
  return(
    <main>
      <h1>hello world</h1>
      <Link href="/users">User Signup</Link>
    </main>
  )
}
