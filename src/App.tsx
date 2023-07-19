import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Header } from "./ui/Header";
import { Home } from "./ui/Home";
import { MovieList } from "./ui/MovieList";
import { movieService } from "./services/movieService";
import { load } from "./services/store/movieSlice";
import { Footer } from "./ui/Footer";
import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await movieService();
      dispatch(load(data));
    };
    fetchData();
  }, [dispatch]);

  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <div className={styles.homeBox}>
          <Home>
            <MovieList />
          </Home>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
