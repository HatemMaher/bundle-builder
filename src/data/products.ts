import type { Product } from "../types";

import camV4 from "../assets/products/wyze-cam-v4.png";
import camPanV3 from "../assets/products/wyze-cam-pan-v3.png";
import floodlightV2 from "../assets/products/wyze-cam-floodlight-v2.png";
import duoDoorbell from "../assets/products/wyze-duo-cam-doorbell.png";
import batteryCamPro from "../assets/products/wyze-battery-cam-pro.png";

export const products: Product[] = [
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
      { id: "white", name: "White" },
      { id: "grey", name: "Grey" },
      { id: "black", name: "Black" },
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
      { id: "white", name: "White" },
      { id: "black", name: "Black" },
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
      { id: "white", name: "White" },
      { id: "black", name: "Black" },
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
      { id: "white", name: "White" },
      { id: "black", name: "Black" },
    ],
  },
];