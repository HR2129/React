import React, {useState} from "react";
import './Glass.css';
import AutoTypingText from "../Auto/AutoTypingText";

function Glass(){
    const lines = ['$ npm create vite@latest','Project name: » vite-project','Select a framework:React','Select a variant:JavaScript','cd vite-project','npm install','npm run dev'];
    return(
        <>
        <div id="main">
            <div className="glass">
                <div id="card">
                    <div id="card1">
                            <img src="https://cdn4.iconfinder.com/data/icons/CS5/256/ExtendScript_JSX_file_document.png" alt="" />
                            <center><a href="D:\My-React\vite-project\src\App.jsx"><h1>Edit src/App.jsx <br />and save to reload</h1></a></center>
                    </div>
                    <div id="card2">
                        <center>
                            <h1>Scaffolding First REACT Project</h1>
                            <div id="info">
                            <AutoTypingText lines={lines} speed={100} />
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Glass