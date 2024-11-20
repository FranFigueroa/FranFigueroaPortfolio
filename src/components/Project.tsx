import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.webp';
import mock08 from '../assets/images/mock08.jpg';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/FranFigueroa/grcp-distributed-system" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/FranFigueroa/grcp-distributed-system" target="_blank" rel="noreferrer"><h2> grcp-distributed-system </h2></a>
                <p>This project implements a basic distributed system using the Go programming language and the gRPC framework</p>
            </div>
            <div className="project">
                <a href="https://analytics-dashboard-bay.vercel.app/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/FranFigueroa/analytics-dashboard?tab=readme-ov-file" target="_blank" rel="noreferrer"><h2>Bitcoin Market Dashboard</h2></a>
                <p>A Bitcoin Dashboard displaying real-time market information using the CoinGecko API. The dashboard includes Bitcoin's current price, its all-time high (ATH), trading volume, the percentage change over the last 24 hours, and a chart showing the price trend over the past 30 days.</p>
            </div>
            <div className="project">
                <a href="https://github.com/FranFigueroa/sistemagestiondelibros" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/FranFigueroa/sistemagestiondelibros" target="_blank" rel="noreferrer"><h2>Book Management</h2></a>
                <p>This project is a RESTful API for book management, enabling CRUD operations (Create, Read, Update, and Delete) on a MongoDB database. It currently includes data validation to ensure the quality of the information entered.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Password Generator CLI in Rust</h2></a>
                <p>Generate secure and customizable passwords directly from your terminal with this Rust-based password generator. This CLI project allows you to create passwords containing letters, numbers, and symbols, with options to configure length and character types.</p>
            </div>

            {/*<div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
                <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div>
            /* */}
        </div>
    </div>
    );
}

export default Project;