import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/stores/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App w-screen">
        <Head />
        <RouterProvider router={appRoute} />
      </div>
    </Provider>
  );
}

export default App;

/*
- Head
- Body
 - Sidebar
   - MenuItems
 - MainContainer
   - ButtonsList
   - VideoContainer
   - VideoCard  
*/
