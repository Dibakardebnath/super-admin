// vite.config.ts
import { defineConfig } from "file:///Users/dibakar/Documents/admin/my-monorepo/node_modules/.bun/vite@5.4.21+4cbbb20073436eb8/node_modules/vite/dist/node/index.js";
import react from "file:///Users/dibakar/Documents/admin/my-monorepo/node_modules/.bun/@vitejs+plugin-react@4.7.0+85dadbfd21fba641/node_modules/@vitejs/plugin-react/dist/index.js";
import { TanStackRouterVite } from "file:///Users/dibakar/Documents/admin/my-monorepo/node_modules/.bun/@tanstack+router-vite-plugin@1.136.11+42fa11aa798ecf2a/node_modules/@tanstack/router-vite-plugin/dist/esm/index.js";
import path from "path";
var __vite_injected_original_dirname = "/Users/dibakar/Documents/admin/my-monorepo/apps/web";
var vite_config_default = defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@crm": path.resolve(__vite_injected_original_dirname, "./src/routes/crm"),
      "@cms": path.resolve(__vite_injected_original_dirname, "./src/routes/cms"),
      "@admin": path.resolve(__vite_injected_original_dirname, "./src/routes/admin"),
      "@auth": path.resolve(__vite_injected_original_dirname, "./src/routes/auth"),
      "@/components": path.resolve(__vite_injected_original_dirname, "./src/components"),
      "@/features": path.resolve(__vite_injected_original_dirname, "./src/features"),
      "@/services": path.resolve(__vite_injected_original_dirname, "./src/services"),
      "@/lib": path.resolve(__vite_injected_original_dirname, "./src/lib"),
      "@/hooks": path.resolve(__vite_injected_original_dirname, "./src/hooks"),
      "@/server": path.resolve(__vite_injected_original_dirname, "./src/server"),
      "@crm/ui": path.resolve(__vite_injected_original_dirname, "../../packages/ui/src"),
      "@crm/utils": path.resolve(__vite_injected_original_dirname, "../../packages/utils/src"),
      "@crm/types": path.resolve(__vite_injected_original_dirname, "../../packages/types/src"),
      "@crm/config": path.resolve(__vite_injected_original_dirname, "../../packages/config/src"),
      "@crm/db": path.resolve(__vite_injected_original_dirname, "../../packages/db/src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZGliYWthci9Eb2N1bWVudHMvYWRtaW4vbXktbW9ub3JlcG8vYXBwcy93ZWJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9kaWJha2FyL0RvY3VtZW50cy9hZG1pbi9teS1tb25vcmVwby9hcHBzL3dlYi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZGliYWthci9Eb2N1bWVudHMvYWRtaW4vbXktbW9ub3JlcG8vYXBwcy93ZWIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgVGFuU3RhY2tSb3V0ZXJWaXRlIH0gZnJvbSAnQHRhbnN0YWNrL3JvdXRlci12aXRlLXBsdWdpbidcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBUYW5TdGFja1JvdXRlclZpdGUoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0Bjcm0nOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvcm91dGVzL2NybScpLFxuICAgICAgJ0BjbXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvcm91dGVzL2NtcycpLFxuICAgICAgJ0BhZG1pbic6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9yb3V0ZXMvYWRtaW4nKSxcbiAgICAgICdAYXV0aCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9yb3V0ZXMvYXV0aCcpLFxuICAgICAgJ0AvY29tcG9uZW50cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb21wb25lbnRzJyksXG4gICAgICAnQC9mZWF0dXJlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9mZWF0dXJlcycpLFxuICAgICAgJ0Avc2VydmljZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc2VydmljZXMnKSxcbiAgICAgICdAL2xpYic6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9saWInKSxcbiAgICAgICdAL2hvb2tzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2hvb2tzJyksXG4gICAgICAnQC9zZXJ2ZXInOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc2VydmVyJyksXG4gICAgICAnQGNybS91aSc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9wYWNrYWdlcy91aS9zcmMnKSxcbiAgICAgICdAY3JtL3V0aWxzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL3BhY2thZ2VzL3V0aWxzL3NyYycpLFxuICAgICAgJ0Bjcm0vdHlwZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vcGFja2FnZXMvdHlwZXMvc3JjJyksXG4gICAgICAnQGNybS9jb25maWcnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vcGFja2FnZXMvY29uZmlnL3NyYycpLFxuICAgICAgJ0Bjcm0vZGInOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vcGFja2FnZXMvZGIvc3JjJyksXG4gICAgfSxcbiAgfSxcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVSxTQUFTLG9CQUFvQjtBQUN4VyxPQUFPLFdBQVc7QUFDbEIsU0FBUywwQkFBMEI7QUFDbkMsT0FBTyxVQUFVO0FBSGpCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7QUFBQSxFQUN2QyxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxRQUFRLEtBQUssUUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxNQUNsRCxRQUFRLEtBQUssUUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxNQUNsRCxVQUFVLEtBQUssUUFBUSxrQ0FBVyxvQkFBb0I7QUFBQSxNQUN0RCxTQUFTLEtBQUssUUFBUSxrQ0FBVyxtQkFBbUI7QUFBQSxNQUNwRCxnQkFBZ0IsS0FBSyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLE1BQzFELGNBQWMsS0FBSyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQ3RELGNBQWMsS0FBSyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQ3RELFNBQVMsS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQSxNQUM1QyxXQUFXLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDaEQsWUFBWSxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2xELFdBQVcsS0FBSyxRQUFRLGtDQUFXLHVCQUF1QjtBQUFBLE1BQzFELGNBQWMsS0FBSyxRQUFRLGtDQUFXLDBCQUEwQjtBQUFBLE1BQ2hFLGNBQWMsS0FBSyxRQUFRLGtDQUFXLDBCQUEwQjtBQUFBLE1BQ2hFLGVBQWUsS0FBSyxRQUFRLGtDQUFXLDJCQUEyQjtBQUFBLE1BQ2xFLFdBQVcsS0FBSyxRQUFRLGtDQUFXLHVCQUF1QjtBQUFBLElBQzVEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
