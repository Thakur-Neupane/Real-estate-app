import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8001", // Ensure this matches your backend server's URL and port
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
