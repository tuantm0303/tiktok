import { Routes, Route } from "react-router-dom";
import Client from "./component/Layout/client/Client";
import UserPage from "./component/Layout/user/User";
import Following from "./page/client/Following";
import Home from "./page/client/Home";
import Setting from "./page/user/Setting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Client />}>
          <Route index element={<Home />} />
          <Route path="setting" element={<Setting />} />
          <Route path="following" element={<Following />} />
        </Route>

        <Route path="user" element={<UserPage />}>
          <Route index element={<Setting />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
