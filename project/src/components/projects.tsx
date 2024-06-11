import React from 'react';
import '../styles/projects.css'
import Image from '../images/hackathonblur.png'
import { ReactOriginal, ExpressOriginal, PythonOriginal, SqliteOriginal, FlaskOriginal, OcamlOriginal, FirebaseOriginal } from 'devicons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Projects() {
    return (
        <div id = "projects">
            <h2 className="project-head">Projects</h2>
            <div className = "proj1">

                <div className = "project">
                    <p className="project-origin">Hack4Impact, Spring 2024</p>
                    <p className="project-title">Lagos Food Bank</p>
                    <div><ReactOriginal size = "22px"/>React<ExpressOriginal size = "22px"/>Express<FirebaseOriginal size = "22px"/>Firebase</div>
                    <p className="project-description">Created a volunteer tracking platform for the Lagos Food Bank in Nigeria.</p>
                    {/* <a href = "https://github.com/brandon-lerit" target = "_blank" className="github-button">View on Github <FontAwesomeIcon icon={faGithub} className = "giticon" /></a> */}
                </div>

                <img src = { Image } alt = "img"></img>

            </div>

            <div className = "proj2">

                <div className = "project">
                    <p className="project-origin">Functional Programming, Spring 2024</p>
                    <p className="project-title">OCaml UTOPia</p>
                    <div><OcamlOriginal size = "22px"/>OCaml</div>
                    <p className="project-description">Created a minigame hub featuring War, Connect4, Tic-Tac-Toe, & Rock Paper Scissors.</p>
                </div>
                    
                <img src = { Image } alt = "img"></img>

            </div>

            <div className = "proj3">

                <div className = "project">
                    <p className="project-origin">Backend Programming, Spring 2024</p>
                    <p className="project-title">Productivity App</p>
                    <div><PythonOriginal size = "22px"/>Python<SqliteOriginal size = "22px"/>SQL<FlaskOriginal size = "22px"/>Flask</div>
                    <p className="project-description">Created an app where the user can track their assigments and study time.</p>
                </div>

                <img src = { Image } alt = "img"></img>
                
            </div>

            <div className = "proj4">

                <div className = "project">
                    <p className="project-origin">Trends in Web Development, Fall 2023</p>
                    <p className="project-title">Recipe Diary</p>
                    <div><ReactOriginal size = "22px"/>React<ExpressOriginal size = "22px"/>Express<FirebaseOriginal size = "22px"/>Firebase</div>
                    <p className="project-description">Created a web-app where users can post recipes and view recipes from other accounts.</p>
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