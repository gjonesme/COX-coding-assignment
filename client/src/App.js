import { useSelector } from "react-redux";
import { selectModal } from "./components/modalSlice";
import "./App.css";
import Calendar from "./components/Calendar";
import Modal from "./components/Modal";

function App() {
  const showModal = useSelector(selectModal);

  return (
    <div className="App">
      <Calendar />
      {showModal && <Modal />}
    </div>
  );
}

export default App;
