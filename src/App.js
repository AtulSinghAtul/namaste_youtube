import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/stores/store";
import { Route, Routes } from "react-router-dom";
import SearchText from "./components/SearchText";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import MainContainer from "./components/MainContainer";
// import WatchPage from "./components/WatchPage";
// import SearchText from "./components/SearchText";
// import MemoCallbackUseRefHook, {
//   Ref,
// } from "./components/MemoCallbackUseRefHook";

// const appRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       { path: "/", element: <MainContainer /> },
//       {
//         path: "/watch",
//         element: <WatchPage />,
//       },
//       {
//         path: "/searchResult",
//         element: <SearchText />,
//       },

//       {
//         path: "/memoCallbackUseRefHook",
//         element: (
//           <>
//             <MemoCallbackUseRefHook />
//             <Ref />
//           </>
//         ),
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <Provider store={store}>
      <div className="App w-screen">
        <Head />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<MainContainer />} />
            <Route path={"/watch"} element={<WatchPage />} />
            <Route path="/searchResult" element={<SearchText />} />
          </Route>
        </Routes>
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
