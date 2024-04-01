import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectModal } from "./components/modalSlice";
import "./App.css";
import Calendar from "./components/Calendar";
import Modal from "./components/Modal";

function App() {
  // const [testData, setTestData] = useState(null);
  const [selectedTimes, setSelectedTimes] = useState([]); //move to store
  const [targetApptTime, setTargetApptTime] = useState(""); //move to store

  const showModal = useSelector(selectModal);

  // useEffect(() => {
  // console.log(selectedTimes);
  //   fetch("/api")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setTestData(data.message);
  //     });
  // }, []);
  return (
    <div className="App">
      <Calendar
      // setTargetApptTime={setTargetApptTime}
      // selectedTimes={selectedTimes}
      />
      {showModal && (
        <Modal
        // targetApptTime={targetApptTime}
        // selectedTimes={selectedTimes}
        // setSelectedTimes={setSelectedTimes}
        />
      )}
    </div>
  );
}

export default App;
