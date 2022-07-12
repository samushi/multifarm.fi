import { Routes, Route } from "react-router-dom";
import List from "./components/list";
import Item from "./components/item";
import Logo from "./components/logo";

const App = (): JSX.Element => {
  return (
    <div className="w-full px-10">
      <Logo className="logo" />
      <Routes>
        <Route path="/" element={<List />}>
          <Route path="item/:assetId" element={<Item />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
