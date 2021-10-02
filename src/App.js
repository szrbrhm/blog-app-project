
import "./App.css";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContextProvider";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <AppRouter/>
      <ToastContainer/>

        </AuthContextProvider>
      
    </div>
  );
}

export default App;
