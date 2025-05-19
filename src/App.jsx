import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Country from "./pages/Country";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:country" element={<Country />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
