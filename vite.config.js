// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// // })
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: "/Food-delivery-frontend/"
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Agar GitHub Actions/Pages build hai toh repo name, warna Vercel/Local ke liye "/"
  base: process.env.GITHUB_ACTIONS ? "/Food-delivery-frontend/" : "/",
})