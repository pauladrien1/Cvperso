import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
state = {
 languages : [
     {id: 1, value:"Javascript",xp:0.6},
     {id: 2, value:"Php",xp:0.4},
     {id: 3, value:"Css",xp:0.6},
],

frameworks:[
    {id: 1, value:"React",xp:0.4},
    {id: 2, value:"Bootstrap",xp:0.6},
    {id: 3, value:"Sass",xp:0.4},
    {id: 4, value:"Lumen",xp:0.2},
]
    }


    render() {
        let {languages,frameworks} = this.state; 

        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                
                
                <ProgressBar 
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="frameworks - bibliotheques"
                
                />
            </div>
        );
    }
}

export default Languages;