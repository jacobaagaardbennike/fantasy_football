'use client';

import { InitOtherworld } from '@/hooks/overworld';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const { canvasRef } = InitOtherworld();

  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <canvas ref={canvasRef} width={750} height={750} className="border border-black rounded-md" />
    </div>
  );
};

export default page;
