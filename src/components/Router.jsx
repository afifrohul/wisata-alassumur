import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Amour from '../pages/Amour';
import Tentang from '../pages/Tentang';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';

export default function Router() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/amour-ecopark" element={<Amour />} />
      <Route path="/tentang" element={<Tentang />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/revolusi-hijau-di-desa-alassumur-mengubah-kotoran-sapi-dan-tanaman-apu-apu-menjadi-solusi-lingkungan-berkelanjutan" element={<BlogDetail/>} />
    </Routes>
  );
}
