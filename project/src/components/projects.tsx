import React from 'react';
import '../styles/projects.css'
import Image from '../images/hackathonblur.png'
import Lagos from '../images/lagos.png'
import OCaml from '../images/ocamlutopia.png'
import Recipe from '../images/recipediary.png'
import { ReactOriginal, ExpressOriginal, PythonPlain, SqlitePlain, FlaskOriginal, OcamlPlain, FirebaseOriginal, MongodbOriginal } from 'devicons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Projects() {
    return (
        <div id = "projects">
            <h2 className="project-head">Projects</h2>
            <div className = "proj1">

                <img onClick={() => window.open('https://lagos-volunteers.vercel.app', '_blank')} src = { Lagos } alt = "Lagos Food Bank Image" className="proj-img"></img>

                <div className = "project">
                    <p className="project-origin">Hack4Impact, Full-Stack Developer</p>
                    <p className="project-title">Lagos Food Bank</p>
                    <div className="proj-lang"><ReactOriginal size = "22px"/>React<ExpressOriginal size = "22px"/>Express<FirebaseOriginal size = "22px"/>Firebase</div>
                    <p className="project-description">Created a volunteer tracking platform for the Lagos Food Bank in Nigeria.</p>
                    <a href="https://github.com/cornellh4i/lagos-volunteers" target="_blank" className="git-link"><FontAwesomeIcon icon={faArrowRight} className="git-arrow"/> View on Github</a>
                </div>

            </div>

            <div className = "proj2">

                <img onClick={() => window.open('https://github.com/brandon-lerit/minigame-hub', '_blank')} src = { OCaml } alt = "OCaml Utopia Photo" className="proj-img" ></img>

                <div className = "project">
                    <p className="project-origin">Functional Programming, Developer</p>
                    <p className="project-title">OCaml UTOPia</p>
                    <div className="proj-lang"><OcamlPlain size = "22px"/>OCaml</div>
                    <p className="project-description">Created a minigame hub featuring War, Connect4, Tic-Tac-Toe, & Rock Paper Scissors.</p>
                    <a href="https://github.com/brandon-lerit/minigame-hub" target="_blank" className="git-link"><FontAwesomeIcon icon={faArrowRight} className="git-arrow"/> View on Github</a>
                </div>

            </div>

            <div className = "proj3">

                <img onClick={() => window.open('https://github.com/brandon-lerit/ProductivityApp', '_blank')} src = { Image } alt = "Productivity App Image" className="proj-img"></img>

                <div className = "project">
                    <p className="project-origin">Backend Programming, Backend Developer</p>
                    <p className="project-title">Productivity App</p>
                    <div className="proj-lang"><PythonPlain size = "22px"/>Python<SqlitePlain size = "22px"/>SQL<FlaskOriginal size = "22px"/>Flask</div>
                    <p className="project-description">Created an app where the user can track their assigments and study time.</p>
                    <a href="https://github.com/brandon-lerit/ProductivityApp" target="_blank" className="git-link"><FontAwesomeIcon icon={faArrowRight} className="git-arrow"/> View on Github</a>
                </div>
                
            </div>

            <div className = "proj4">

                <img onClick={() => window.open('https://github.com/ESW-Software-Dev', '_blank')} src = { Recipe } alt = "Recipe Diary Image" className="proj-img"></img>

                <div className = "project">
                    <p className="project-origin">Engineers For a Sustainable World, Developer</p>
                    <p className="project-title">Food Waste Solutions</p>
                    <div className="proj-lang"><ReactOriginal size = "22px"/>React<ExpressOriginal size = "22px"/>Express<MongodbOriginal size = "22px"/>MongoDB</div>
                    <p className="project-description">Created a web-app where Cornell Organizations can post events to distrubute leftover food from events.</p>
                    <a href="https://github.com/ESW-Software-Dev" target="_blank" className="git-link"><FontAwesomeIcon icon={faArrowRight} className="git-arrow"/> View on Github</a>
                </div>

            </div>

        </div>
    );
  }
  
export default Projects;