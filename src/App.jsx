import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import style from "./App.module.css";
import { Search } from "./components/Search";

export function App() {
  return (
    <BrowserRouter>
     <div >
     <header>
        <Link to="/">
          <div className={style.titleContainer}>
            <h1 className={style.title}>MovieMinds</h1>
          </div>
        </Link>
        <br />
      </header>
     </div>
      <main>
        <Routes>
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
