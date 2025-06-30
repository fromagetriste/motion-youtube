import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Nabar.tsx";
import Blog from "./components/Blog.tsx";
import Radio from "./components/Radio.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-blue-950 pt-4 min-h-screen text-white">
      <Navbar />
      <Blog />
      <Radio />
    </div>
  </StrictMode>
);
