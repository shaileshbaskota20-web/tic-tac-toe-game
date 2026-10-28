import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base:'/tic-tac-toe-game/',
  plugins: [react()],
})
