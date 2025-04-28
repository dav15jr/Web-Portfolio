import {defineConfig} from 'vite'
import { resolve } from 'path'

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				gymTracker: resolve(__dirname, 'pages/gym-tracker.html'),
				wheelOfLife: resolve(__dirname, 'pages/wheel-of-life.html'),
			},
		},
	},
	plugins: []	
})