import { HashRouter, Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { DomainsPage } from "./pages/DomainsPage";
import { DomainDetailPage } from "./pages/DomainDetailPage";
import { WinnersPage } from "./pages/WinnersPage";
import { DrawDetailPage } from "./pages/DrawDetailPage";
import { BulletinPage } from "./pages/BulletinPage";
import { BulletinItemPage } from "./pages/BulletinItemPage";
import { CommitteePage } from "./pages/CommitteePage";
import { CharterPage } from "./pages/CharterPage";
import { ApplyPage } from "./pages/ApplyPage";
import { NotFoundPage } from "./pages/NotFoundPage";

// HashRouter：GitHub Pages 上刷新子路由不会 404，与博客保持一致。
function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/domains" element={<DomainsPage />} />
          <Route path="/domains/:id" element={<DomainDetailPage />} />
          <Route path="/winners" element={<WinnersPage />} />
          <Route path="/winners/:id" element={<DrawDetailPage />} />
          <Route path="/bulletin" element={<BulletinPage />} />
          <Route path="/bulletin/:id" element={<BulletinItemPage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/charter" element={<CharterPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
