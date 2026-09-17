import { HashRouter, Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { DomainsPage } from "./pages/DomainsPage";
import { WinnersPage } from "./pages/WinnersPage";
import { CharterPage } from "./pages/CharterPage";
import { ApplyPage } from "./pages/ApplyPage";

// HashRouter：GitHub Pages 上刷新子路由不会 404，与博客保持一致。
function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/domains" element={<DomainsPage />} />
          <Route path="/winners" element={<WinnersPage />} />
          <Route path="/charter" element={<CharterPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
