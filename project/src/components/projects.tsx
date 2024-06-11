import React from 'react';
import { Link } from "react-router-dom";
import '../styles/projects.css'
import Image from '../images/hackathonblur.png'
import { ReactOriginal, ExpressOriginal, PythonOriginal, SqliteOriginal, FlaskOriginal, OcamlOriginal, FirebaseOriginal, MongodbOriginal, GithubOriginal } from 'devicons-react';

function Projects() {
    return (
        <div id = "projects">

            <div className = "proj1">

                <div className = "project">
                    <p className="project-title">Lagos Food Bank</p>
                    <p className="project-description">Created a volunteer tracking platform for the Lagos Food Bank in Nigeria.</p>
                    <p className="project-origin">Developer, Hack4Impact</p>
                    <div><ReactOriginal size = "22px"/>React<ExpressOriginal size = "22px"/>Express<FirebaseOriginal size = "22px"/>Firebase</div>
                    {/* <a className="github-button">View on Github <GithubOriginal className = "giticon" size = "22px"/></a> */}
                </div>

                <img src = { Image } alt = "img"></img>

            </div>

            <div className = "proj2">

                <div className = "project">
                    <p className="project-title">Minigame Hub, CS 3110</p>
                    <div><OcamlOriginal size = "28px"/>OCaml</div>
                    <p>Created a minigame hub featuring War, Connect4, Tic-Tac-Toe, & Rock Paper Scissors.</p>
                </div>
                    
                <img src = { Image } alt = "img"></img>

            </div>

            <div className = "proj3">

                <div className = "project">
                    <p className="project-title">Productivity App, Hackathon</p>
                    <div><PythonOriginal size = "28px"/>Python<SqliteOriginal size = "28px"/>SQL<FlaskOriginal size = "28px"/>Flask</div>
                    <p>Created an app where the user can track their assigments and study time.</p>
                </div>

                <img src = { Image } alt = "img"></img>
                
            </div>

            <div className = "proj4">

                <div className = "project">
                    <p className="project-title">Recipe Diary, INFO 1998</p>
                    <div><ReactOriginal size = "28px"/>React<ExpressOriginal size = "28px"/>Express<FirebaseOriginal size = "28px"/>Firebase</div>
                    <p>Created a web-app where users can post recipes and view recipes from other accounts.</p>
                </div>

                <img src = { Image } alt = "img"></img>

            </div>

            {/* <div className = "proj5">

                <div className = "project">
                    <p className="project-title">Arduino GUI, Hyperloop</p>
                    <div><PythonOriginal size = "28px"/>Python</div>
                    <p>Created a GUI that plots data taken from two Arduino Sensors, a Thermistor and Ultrasonic Sensor.</p>
                </div>

                <img src = { Image } alt = "img"></img>

            </div>

            <div className = "proj6">

                <div className = "project">
                    <p className="project-title">Cornell Capsule, Solo Project</p>
                    <div><ReactOriginal size = "28px"/>React<ExpressOriginal size = "28px"/>Express<MongodbOriginal size = "28px"/>MongoDB</div>
                    <p>Creating a web-app where Cornell Students enter text/pictures that will be displayed to them at the semester's end</p>
                </div>

                <img src = { Image } alt = "img"></img>

            </div> */}

        </div>
    );
  }
  
export default Projects;