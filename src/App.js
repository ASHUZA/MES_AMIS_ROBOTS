import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import InputPage from "./inputname";

function App() {
  let [Robots, setRobots] = useState([]);
  let [RobotTampon,setRobotTampon]=useState(Robots)

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const robTab = data.map(function ({ id, name, email }) {
        return { id, name, email };
      });

      console.log(robTab);
      setRobots(robTab);
      setRobotTampon(robTab)
    });

  },[])

    const change = (e) => {
      const filteredRobot = Robots.filter((element) => {
        return element.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      console.log(filteredRobot);
      setRobotTampon(filteredRobot);
    }

  return (
    <div className="App">
      <h1> MES AMIS ROBBOTS </h1> <InputPage onChange={change}/>
      <div class="row row-cols-1 row-cols-md-2 g-4 box-robot">
        {" "}
        {RobotTampon.map(function (element) {
          return (
            <Card
              nom={element.name}
              texte={element.email}
              src={`https://robohash.org/${element.id}`}
            />
          );
        })}{" "}
      </div>{" "}
    </div>
  );
}

export default App;
