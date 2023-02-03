'use client';

// import { InitOverworld } from '@/hooks/overworld';
import { UseDrawBoard } from '@/hooks/sevensBoard';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const { canvasRef } = UseDrawBoard();

  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <canvas ref={canvasRef} className="border border-black rounded-md" />
    </div>
  );
};

export default page;
