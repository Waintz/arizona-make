import { createCanvas, loadImage, Image } from "canvas";
import path from "path";
import fs from "fs";

const MAP_MIN = -3000;
const MAP_MAX = 3000;
const MAP_SIZE = MAP_MAX - MAP_MIN;

export type RawCoord = { x: number | { x: number; y: number; z: number }; y?: number; z?: number };

export const mapService = {
  baseMapImage: null as Image | null,

  async loadBaseMap() {
    if (this.baseMapImage) return this.baseMapImage;

    const mapPath = path.join(process.cwd(), "assets/map.jpg");

    if (!fs.existsSync(mapPath)) {
      throw new Error(`Файл карты не найден по пути: ${mapPath}`);
    }

    this.baseMapImage = await loadImage(mapPath);
    return this.baseMapImage;
  },

  async generateMapPreview(rawPath: RawCoord[]) {
    const image = await this.loadBaseMap();

    const cleanPath = rawPath.map((p) => {
      if (typeof p.x === "object" && p.x !== null) {
        return { x: p.x.x, y: p.x.y };
      }
      return { x: p.x as number, y: p.y as number };
    });

    if (cleanPath.length < 2) return null;

    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(image, 0, 0);

    const toX = (gameX: number) => ((gameX - MAP_MIN) / MAP_SIZE) * image.width;
    const toY = (gameY: number) => (1 - (gameY - MAP_MIN) / MAP_SIZE) * image.height;

    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 6;           
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    
    ctx.shadowColor = "rgba(0,0,0,0.5)";
    ctx.shadowBlur = 4;

    ctx.beginPath();
    ctx.moveTo(toX(cleanPath[0].x), toY(cleanPath[0].y));

    for (let i = 1; i < cleanPath.length; i++) {
      ctx.lineTo(toX(cleanPath[i].x), toY(cleanPath[i].y));
    }
    
    ctx.stroke();

    ctx.shadowBlur = 0;

    const start = cleanPath[0];
    ctx.fillStyle = "#00FF00";
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 3;
    
    ctx.beginPath();
    ctx.arc(toX(start.x), toY(start.y), 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    const end = cleanPath[cleanPath.length - 1];
    ctx.fillStyle = "#0000FF";
    
    ctx.beginPath();
    ctx.arc(toX(end.x), toY(end.y), 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    return canvas.toBuffer("image/jpeg");
  },
};