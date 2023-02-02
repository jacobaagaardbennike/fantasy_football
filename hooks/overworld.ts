import { useRef, useEffect } from 'react';

export const InitOverworld = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const image = new Image();
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    };
    image.src = '/images/maps/DemoLower.png';

    const x = 5;
    const y = 6;

    const shadow = new Image();
    shadow.onload = () => {
      ctx.drawImage(
        shadow,
        0, //left cut
        0, //top cut,
        32, //width of cut
        32, //height of cut
        x * 16 - 8,
        y * 16 - 18,
        32,
        32,
      );
    };
    shadow.src = '/images/characters/shadow.png';

    const hero = new Image();
    hero.onload = () => {
      ctx.drawImage(
        hero,
        0, //left cut
        0, //top cut,
        32, //width of cut
        32, //height of cut
        x * 16 - 8,
        y * 16 - 18,
        32,
        32,
      );
    };
    hero.src = '/images/characters/people/hero.png';
  }, []);

  return { canvasRef };
};
