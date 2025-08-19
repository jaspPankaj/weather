import { WeatherInfo } from './components/WeatherInfo';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {


  return (
    <>
      <WeatherInfo />     
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
