import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout/Layout";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Evening from "./pages/L1/Evening";
import Saturday from "./pages/L1/Saturday";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <Sidebar>
              <Layout>
                <Home />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/saturday"
          element={
            <Sidebar>
              <Layout>
                <Saturday />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/sunday"
          element={
            <Sidebar>
              <Layout>
                <Evening />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/monday"
          element={
            <Sidebar>
              <Layout>
                <Evening />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/tuesday"
          element={
            <Sidebar>
              <Layout>
                <Evening />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/friday"
          element={
            <Sidebar>
              <Layout>
                <Evening />
              </Layout>
            </Sidebar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
