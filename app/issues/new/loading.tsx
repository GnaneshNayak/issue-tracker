import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type Props = {};

const LoadingNewIssuePage = (props: Props) => {
  return (
    <div className="max-w-2xl ">
      <Skeleton />
      <Skeleton height={'20rem'} />
    </div>
  );
};

export default LoadingNewIssuePage;
