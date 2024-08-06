// src/pages/Home.tsx
import React, { useRef, useEffect, useState } from 'react';
import { Canvas as ThreeCanvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '../components/Navbar';

gsap.registerPlugin(ScrollTrigger);

const frameCount = 61; // Adjust this number based on your actual frame count

const currentFrame = (index: number) => 
  `/pics/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [airpods, setAirpods] = useState<{ frame: number }>({ frame: 0 });

  // Function to render the current image to the canvas
  const render = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx && images.length > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(images[airpods.frame], 0, 0);
    }
  };

  useEffect(() => {
    const loadImages = () => {
      const imgs = [];
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
          if (i === 0) render(); // Render the first image immediately
        };
        imgs.push(img);
      }
      setImages(imgs);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (canvasRef.current && sectionRef.current) {
      gsap.to(airpods, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
        onUpdate: render, // Ensure `render` is correctly referenced
      });

      render(); // Initial render
      ScrollTrigger.refresh(); // Refresh ScrollTrigger to ensure it captures the latest state
    }
  }, [airpods.frame, images,airpods]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <ThreeCanvas className="h-screen">
        <ambientLight intensity={0.5} />
        <OrbitControls />
        {/* Add your 3D model here */}
      </ThreeCanvas>
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url(/path/to/dripping-chocolate.jpg)' }}
      >
        <Navbar />
        <div className="text-center mt-20">
          <h1 className="text-white text-5xl">Welcome to Exotic Handmade Chocolates</h1>
          <Link to="/contents" className="mt-5 inline-block px-4 py-2 bg-white text-brown-700">Shop Now</Link>
        </div>
      </div>
      <div ref={sectionRef} className="relative w-full h-[600vh] overflow-hidden">
        <canvas
          ref={canvasRef}
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
          width={window.innerWidth}
          height={window.innerHeight}
        />
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <h1 className="text-5xl">Welcome to Exotic Handmade Chocolates</h1>
        </div>
      </div>
      <div className="relative w-full h-screen bg-brown-200">
        <div className="text-center mt-20">
          <h2 className="text-4xl">Discover Our Chocolates</h2>
          <p className="mt-5 text-xl">Scroll down to explore our range of exotic handmade chocolates.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
