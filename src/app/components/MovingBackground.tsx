"use client";

import { useEffect, useRef } from "react";

export default function MovingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const blobs: Blob[] = [];
    for (let i = 0; i < 5; i++) {
      blobs.push(new Blob(canvas.width, canvas.height));
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      blobs.forEach((blob) => blob.update(ctx));
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed left-0 top-0 -z-10 h-full w-full"
    />
  );
}

class Blob {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.radius = Math.random() * 100 + 50;
    this.color = `rgba(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    },0.2)`;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
  }

  update(ctx: CanvasRenderingContext2D) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > ctx.canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > ctx.canvas.height) this.vy *= -1;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
