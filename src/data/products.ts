import type { Product } from "../types";

import camV4 from "../assets/products/wyze-cam-v4.png";
import camV4Grey from "../assets/products/wyze-cam-v4-grey.png";
import camV4Black from "../assets/products/wyze-cam-v4-black.png";
import camPanV3 from "../assets/products/wyze-cam-pan-v3.png";
import camPanV3White from "../assets/products/wyze-cam-pan-v3-white.png";
import camPanV3Black from "../assets/products/wyze-cam-pan-v3-black.png";
import floodlightV2 from "../assets/products/wyze-cam-floodlight-v2.png";
import floodlightV2Black from "../assets/products/wyze-cam-floodlight-v2-black.png";
import duoDoorbell from "../assets/products/wyze-duo-cam-doorbell.png";
import batteryCamPro from "../assets/products/wyze-battery-cam-pro.png";
import batteryCamProBlack from "../assets/products/wyze-battery-cam-pro-black.png";

// New Item Images (Ensure these exist in your assets folder!)
import camUnlimited from "../assets/products/cam-unlimited.svg";
import senseMotion from "../assets/products/wyze-sense-motion.png";
import senseHub from "../assets/products/wyze-sense-hub.png";
import microsd from "../assets/products/wyze-microsd-256.png";

export const products: Product[] = [
  // === CAMERAS ===
  {
    id: "wyze-cam-v4",
    category: "camera",
    title: "Wyze Cam v4",
    description: "The clearest Wyze Cam ever made.",
    image: camV4,
    badge: "Save 22%",
    price: 27.98,
    compareAtPrice: 35.98,
    learnMoreUrl: "#",
    variants: [
      { id: "white", name: "White", image: camV4 },
      { id: "grey", name: "Grey", image: camV4Grey },
      { id: "black", name: "Black", image: camV4Black },
    ],
  },
  {
    id: "wyze-cam-pan-v3",
    category: "camera",
    title: "Wyze Cam Pan v3",
    description: "360° pan and 180° tilt security camera.",
    image: camPanV3,
    badge: "Save 12%",
    price: 34.98,
    compareAtPrice: 39.98,
    learnMoreUrl: "#",
    variants: [
      { id: "white", name: "White", image: camPanV3White },
      { id: "black", name: "Black", image: camPanV3Black },
    ],
  },
  {
    id: "wyze-cam-floodlight-v2",
    category: "camera",
    title: "Wyze Cam Floodlight v2",
    description: "2K floodlight camera with bright LEDs.",
    image: floodlightV2,
    badge: "Save 22%",
    price: 69.98,
    compareAtPrice: 89.98,
    learnMoreUrl: "#",
    variants: [
      { id: "white", name: "White", image: floodlightV2 },
      { id: "black", name: "Black", image: floodlightV2Black },
    ],
  },
  {
    id: "wyze-duo-doorbell",
    category: "camera",
    title: "Wyze Duo Cam Doorbell",
    description: "Dual-camera smart doorbell.",
    image: duoDoorbell,
    price: 69.98,
    learnMoreUrl: "#",
  },
  {
    id: "wyze-battery-cam-pro",
    category: "camera",
    title: "Wyze Battery Cam Pro",
    description: "Wire-free outdoor security camera.",
    image: batteryCamPro,
    price: 89.98,
    learnMoreUrl: "#",
    variants: [
      { id: "white", name: "White", image: batteryCamPro },
      { id: "black", name: "Black", image: batteryCamProBlack },
    ],
  },

  // === PLANS ===
  {
    id: "cam-unlimited",
    category: "plan",
    title: "Cam Unlimited",
    description: "Unlimited cameras. Unlimited peace of mind.",
    image: camUnlimited,
    price: 9.99,
    compareAtPrice: 12.99,
    suffix: "/mo",
  },

  // === SENSORS ===
  {
    id: "wyze-sense-motion",
    category: "sensor",
    title: "Wyze Sense Motion Sensor",
    description: "Catch movement from anywhere in the room.",
    image: senseMotion,
    price: 29.99, 
  },
  {
    id: "wyze-sense-hub",
    category: "sensor",
    title: "Wyze Sense Hub (Required)",
    description: "The central brain of your Wyze security system.",
    image: senseHub,
    price: 0,
    compareAtPrice: 29.92,
  },

  // === ACCESSORIES ===
  {
    id: "wyze-microsd-256",
    category: "accessory",
    title: "Wyze MicroSD Card (256GB)",
    description: "Keep continuous recording locally.",
    image: microsd,
    price: 20.98,
  },
];