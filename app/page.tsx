import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>hello</h1>
      <Link href="/api/auth/signin">login</Link>
      <Link href="/api/auth/signout">logout</Link>
      {/* <Link>login</Link> */}
    </div>
  );
}
