/// <reference types="react-scripts" />

declare const canvas: HTMLCanvasElement;
declare const existingCanvas: HTMLElement | null;
declare const gl: WebGLRenderingContext | null;


declare module "*.mp4" {
    const src: string;
    export default src;
  }
  
  declare module "*.gif" {
    const src: string;
    export default src;
  }
  
  declare module "*.jpg" {
    const src: string;
    export default src;
  }
