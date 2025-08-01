
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Provider } from "react-redux";

import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import appStore from "./utils/appstore";
import Feed from "./Feed";

function App() {


  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
          <Routes>
                     <Route path="/" element={<Body/>}>
                      <Route path="/" element={<Feed/>}/>
                      <Route path="/login" element={<Login/>}/>
                      <Route path="/profile" element={<Profile/>}/>
               </Route>
          </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
