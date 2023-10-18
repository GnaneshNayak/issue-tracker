import Image from 'next/image';
import Link from 'next/link';
import Pagination from './components/Pagination';
import LatestIssues from './LatestIssues';

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <>
      <LatestIssues />
    </>
  );
}
