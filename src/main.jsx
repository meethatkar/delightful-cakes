import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './theme'
import HomePage from './pages/home/HomePage'
import ShopPage from './pages/shop/ShopPage'
import ContactPage from './pages/contact/ContactPage'
import BlogPage from './pages/blogs/BlogPage'
import BlogDetailPage from './pages/blogs/BlogDetailPage'
import AboutPage from './pages/about/AboutPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "blogs", element: <BlogPage /> },
      { path: "blogs/:id", element: <BlogDetailPage /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
