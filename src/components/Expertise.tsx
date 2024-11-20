import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React Native",
    "TypeScript",
    "JavaScript",
    "git",
];

const labelsSecond = [
    "Git",
    "Docker",
    "HTML",
    "CSS",
    "Typescript",
    "Javascript",
    "React",
    "Nextjs",
    "SQL",
    "MongoDB",
    "Firebase",
];

const labelsThird = [
    "Python",
    "OpenAI",
    "Groq",
    "LangChain",
    "LangGraph",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",

];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Mobile Development</h3>
                    <p>I have experience working at two different startups during their early-stage development. I have 3 years of experience developing with React Native in combination with TypeScript</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>FullStack Development</h3>
                    <p>I have worked on all types of development, ranging from Frontend using technologies like React and Next.js to Backend development, including API creation, management of various relational and non-relational databases, and the implementation of different APIs from various services such as Mercado Pago, OpenAI API, Manteca, and others</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>I have experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;