import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import Listed_Books from './components/ListedBooks/Listed_Books';
import PageToBooks from './components/PageToBook/PageToBooks';
import Error from './components/Error/Error';
import BooksDetails from './components/BooksDetails/BooksDetails';
import Read from './components/ListedBooks/Read/Read';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: '/book_details/:id',
        element:<BooksDetails></BooksDetails>,
        loader: () => fetch('Book.json')
      },
      {
        path: '/listed_books',
        element:<Listed_Books></Listed_Books>,
        loader: () => fetch('/Book.json'),
      },

      {
        path:'/pages_to_read',
        element:<PageToBooks></PageToBooks>,
        loader: () => fetch('/Book.json')
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
