import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8001",
        changeOrigin: true, // Add this line if you have issues with CORS
        secure: false,
      },
    },
  },
  plugins: [react()],
});
