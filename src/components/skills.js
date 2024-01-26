import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaEnvira, FaServer, FaGopher, FaC, FaCode, FaGithub, FaBitbucket, FaDatabase } from 'react-icons/fa';
import GitHubIcon from '@mui/icons-material/GitHub';

const Skills = () => {
  return (
    <div className="tech-container">
            <div className="tech-section">
              <h2>Programming Languages</h2>
              <div className="iconsdiv">
                <div className="icondiv">
                  <FaCode className="tech-icon" />
                  <h1>C++</h1>
                </div>
                <div className="icondiv">
                  <FaCode className="tech-icon" />
                  <h1>C</h1>
                </div>
              </div>
            </div>

            <div className="tech-section">
              <h2>Development Technology</h2>
              <div className="iconsdiv">
                <div className="icondiv">
                  <FaReact className="tech-icon" />
                  <h1>React</h1>
                </div>
                <div className="icondiv">
                  <FaReact className="tech-icon" />
                  <h1>React Native</h1>
                </div>
                <div className="icondiv">
                  <FaNode className="tech-icon" />
                  <h1>Node.js</h1>
                </div>
                <div className="icondiv">
                  <FaHtml5 className="tech-icon" />
                  <h1>HTML5</h1>
                </div>
                <div className="icondiv">
                  <FaCss3Alt className="tech-icon" />
                  <h1>CSS3</h1>
                </div>
                <div className="icondiv">
                  <FaJs className="tech-icon" />
                  <h1>JavaScript</h1>
                </div>
              </div>
            </div>

            <div className="tech-section">
              <h2>Database Systems</h2>
              <div className="iconsdiv">
                <div className="icondiv">
                  <FaEnvira className="tech-icon" />
                  <h1>MongoDB</h1>
                </div>
                <div className="icondiv">
                  <FaDatabase className="tech-icon" />
                  <h1>SQL</h1>
                </div>
              </div>
            </div>

            <div className="tech-section">
              <h2>Tools</h2>
              <div className="iconsdiv">
                <div className="icondiv">
                  <GitHubIcon className="tech-icon icon1"/>
                  <h1>GitHub</h1>
                </div>
                <div className="icondiv">
                <GitHubIcon className="tech-icon icon1"/>
                  <h1>Bitbucket</h1>
                </div>
                <div className="icondiv">
                  <FaServer className="tech-icon" />
                  <h1>Server Management</h1>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Skills