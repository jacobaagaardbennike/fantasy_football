import { useRef, useEffect } from 'react';

interface Square {
  color: string;
}

interface SquareMatrix {
  squares: Square[][];
}

export const UseDrawBoard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = 1200;
      const height = (width / 20) * 11;
      canvas.width = width;
      canvas.height = height;

      const squareWidth = width / 20;
      const squareHeight = height / 11;

      const matrix: SquareMatrix = {
        squares: Array.from({ length: 20 }, (_, h) =>
          Array.from({ length: 11 }, (_, v) => {
            return { color: h === 0 ? 'blue' : h === 19 ? 'red' : 'green' };
          }),
        ),
      };

      matrix.squares.forEach((row, h) => {
        row.forEach((square, v) => {
          ctx.fillStyle = square.color;
          ctx.fillRect(h * squareWidth, v * squareHeight, squareWidth, squareHeight);
        });
      });

      ctx.strokeStyle = 'white';
      ctx.lineWidth = 1;
      for (let i = 0; i <= 20; i++) {
        ctx.beginPath();
        ctx.moveTo(i * squareWidth, 0);
        ctx.lineTo(i * squareWidth, height);
        ctx.stroke();
      }
      for (let i = 0; i <= 11; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * squareHeight);
        ctx.lineTo(width, i * squareHeight);
        ctx.stroke();
      }

      // Draw the 2x border
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(7 * squareWidth, 0);
      ctx.lineTo(7 * squareWidth, height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(13 * squareWidth, 0);
      ctx.lineTo(13 * squareWidth, height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, 2 * squareHeight);
      ctx.lineTo(width, 2 * squareHeight);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, 9 * squareHeight);
      ctx.lineTo(width, 9 * squareHeight);
      ctx.stroke();
    }
  }, [canvasRef]);

  return { canvasRef };
};
