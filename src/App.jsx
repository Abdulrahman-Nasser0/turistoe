import  Home  from "./pages/Home";
import BookingFlow from "./pages/BookingFlow";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/booking",
      element: <BookingFlow/>,
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


export default App