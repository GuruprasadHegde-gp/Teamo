import { useState } from "react";
import maleImage from "./images/maleProfile.jpg";
import femaleImage from "./images/femaleProfile.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
const employee = ({ employees, currentTeam, handleChange, onClickCard, teams, addTeam }) => {

    const [input, setInput] = useState("");
    const [showText, setVisibility] = useState("false");
    function addTeamToList() {
        setVisibility(!showText)
        addTeam([...teams, { tName: input }]);
        setInput("");
    }

    const handleInputChange = (event) => {
        setInput(event.target.value);

    }


    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="m-2">
                        <button type="button" className="btn btn-dark" onClick={() => { setVisibility(!showText) }}>Add Team</button>
                        {showText && (<div> <input className="form-control form-control-sm mt-3" type="text" value={input} onChange={handleInputChange}></input> <button className="btn btn-dark mt-3 mb-3" onClick={addTeamToList}>Add</button></div>)}
                        {/* This is called as conditional rendering in react */}
                    </div>
                    <select className="form-select form-select-lg" value={currentTeam} onChange={handleChange}>

                        {
                            teams.map((team) => {
                                return (
                                    <option value={team.tName}>{team.tName}</option>
                                )
                            })
                        }

                    </select>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">


                        {
                            employees.map((employee) => {
                                return (
                                    <div id={employee.id} className={(employee.teamName === currentTeam) ? 'card m-3 standout' : 'card m-2'} style={{ cursor: "pointer" }} onClick={onClickCard}>

                                        {(employee.gender === 'male') ? <img src={maleImage} alt="maleRep" srcset="" className="card-img-top" />
                                            : <img src={femaleImage} alt="femaleRep" srcset="" className="card-img-top" />}
                                        <div className="card-body">
                                            <h6 className="card-title">Full Name : {employee.fullName}</h6>
                                            <p className="card-text"><b>Designation </b>: {employee.designation}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </main >
    )
}

export default employee;