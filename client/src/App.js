import { Header } from './Components/Header/Header';
import { Home } from './pages/Home/Home';
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>   
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
])

function App() {
  return (
    <div className="App">
        <RouterProvider router={router}/>     
    </div>
  );
}

export default App;
