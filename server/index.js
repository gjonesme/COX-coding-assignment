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

//why should this be above app.listen?
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/available", (req, res) => {
  if (req.query.time) {
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
  } else {
    res.json(apptData);
  }
});

app.post("/reserve", (req, res) => {
  const targetTime = apptData.findIndex((appointment) => {
    return appointment.time === req.body.time;
  });
  if (targetTime >= 0) {
    apptData[targetTime].setName(req.body.name);
    apptData[targetTime].setNumber(req.body.number);
  } else {
    apptData.push(
      new Appointment(req.body.time, req.body.name, req.body.number)
    );
  }
  console.log(apptData); //can uncomment to see server updates
  res.status(201).send(apptData);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
