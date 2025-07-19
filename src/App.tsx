import styles from "./App.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
