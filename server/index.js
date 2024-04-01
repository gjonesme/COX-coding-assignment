const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

const apptData = [];

class Appointment {
  constructor(time, name, number) {
    this.time = time;
    this.name = name;
    this.number = number;
  }

  getName() {
    return this.name;
  }

  getNumber() {
    return this.number;
  }

  setName(name) {
    this.name = name;
  }

  setNumber(number) {
    this.number = number;
  }
}

console.log(apptData);
//why should this be above app.listen?
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/available", (req, res) => {
  const targetAppointment = apptData.find((appointment) => {
    return appointment.time == req.query.time;
  });
  targetAppointment
    ? res.json(
        apptData.find((appointment) => {
          return appointment.time == req.query.time;
        })
      )
    : res.json(new Appointment(req.query.time, "", ""));
});

app.post("/reserve", (req, res) => {
  const targetTime = apptData.findIndex((appointment) => {
    return appointment.time === req.body.time;
  });
  console.log(targetTime);

  if (targetTime >= 0) {
    apptData[targetTime].setName(req.body.name);
    apptData[targetTime].setNumber(req.body.number);
  } else {
    apptData.push(
      //not good... make copy
      new Appointment(req.body.time, req.body.name, req.body.number)
    );
  }
  //   console.log(req.body);
  console.log("POST REQUEST TO RESERVE");
  console.log(apptData);
  res.status(201).send(apptData);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
