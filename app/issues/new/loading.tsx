import { Skeleton } from '@/app/components';

const LoadingNewIssuePage = () => {
  return (
    <div className="max-w-2xl ">
      <Skeleton />
      <Skeleton height={'20rem'} />
    </div>
  );
};

export default LoadingNewIssuePage;
