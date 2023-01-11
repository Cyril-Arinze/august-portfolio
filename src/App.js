import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import UiUxPage from "./pages/UiUxPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<AboutPage />} />
        <Route path="UIUX" element={<UiUxPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
