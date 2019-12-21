import React,{ lazy, Suspense} from 'react';

const HomeLazy = lazy(()=> import('.'));
const Loading = () => <div>loading...</div>;

 const LazyLoad = () => (
  <Suspense fallback={<Loading />}>
    <HomeLazy />
  </Suspense>
);

export default LazyLoad;