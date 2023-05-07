import { Route, Routes } from "react-router-dom";
import Users from "./users/pages/Users";
import Layout from "./shared/Layout/Layout";
import Places from "./places/pages/Places";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Users />} />
        <Route path="/places" element={<Places />} />
        <Route path="*" element={<div>Page not found!</div>} />
      </Route>
    </Routes>
  );
}

export default App;
