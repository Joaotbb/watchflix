import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { WatchlistPage } from "./pages/WatchlistPage";
import { SeriesPage } from "./pages/SeriesPage";
import { ContactsPage } from "./pages/ContactsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="/watchlist" element={<WatchlistPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
}

export default App;
