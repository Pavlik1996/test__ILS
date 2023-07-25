import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import App from './App'
import 'antd/dist/antd.min.css'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
