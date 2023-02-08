import React from "react";
import Header from "./header";
import Footer from "./footer";
import Employee from "./employee";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const [teams, addTeam] = useState([{
    tName: "TeamA"
  },
  {
    tName: "TeamB"
  },
  {
    tName: "TeamC"
  },
  {
    tName: "TeamD"
  }])
  const [currentTeam, setTeam] = useState(JSON.parse(localStorage.getItem('updatedTeamList')) || "TeamA");
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }])
  function handleChange(event) {

    setTeam(event.target.value)
  }

  function onClickCard(event) {
    const transformedEmployeeArray = employees.map((employee) => {
      return employee.id === parseInt(event.currentTarget.id)
        ? (employee.teamName === currentTeam)
          ? { ...employee, teamName: '' }
          : { ...employee, teamName: currentTeam }
        : employee;
    });
    setEmployees(transformedEmployeeArray);
  }



  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees])

  useEffect(() => {
    localStorage.setItem('updatedTeamList', JSON.stringify(currentTeam))
  }, ([currentTeam]))

  return (
    <div className="container">
      <Header currentTeam={currentTeam}
        teamMemberCount={employees.filter((employee) => employee.teamName === currentTeam).length}

      />
      <Employee employees={employees}
        currentTeam={currentTeam}
        teams={teams}
        handleChange={handleChange}
        onClickCard={onClickCard}
        addTeam={addTeam}
      />
      <Footer />
    </div>
  )
}
export default App;