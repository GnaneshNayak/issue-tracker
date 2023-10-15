import { Skeleton } from '@/app/components';

const IssueFormSkeleton = () => {
  return (
    <div className="max-w-2xl ">
      <Skeleton height="2rem" />
      <Skeleton height={'20rem'} />
    </div>
  );
};

export default IssueFormSkeleton;
