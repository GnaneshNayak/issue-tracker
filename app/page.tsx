import Image from 'next/image';
import Link from 'next/link';
import Pagination from './components/Pagination';

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <div>
      <h1>hello</h1>
      <Link href="/api/auth/signin">login</Link>
      <Link href="/api/auth/signout">logout</Link>
      <Pagination
        itemCount={100}
        pageSize={10}
        currentPage={parseInt(searchParams.page)}
      />
      {/* <Link>login</Link> */}
    </div>
  );
}
