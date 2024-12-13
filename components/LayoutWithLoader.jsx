'use client';

import { useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Loading from './loading';

const LayoutWithLoader = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  return (
    <Suspense fallback={<Loading />}>
      {loading && <Loading />}
      {children}
    </Suspense>
  );
};

export default LayoutWithLoader;
