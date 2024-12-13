'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Mark as hydrated
  }, []);

  useEffect(() => {
    if (hydrated) {
      AOS.init({
        duration: 1200,
        once: true,
      });
      AOS.refresh();
    }
  }, [hydrated]);

  return null;
};

export default AOSInitializer;
