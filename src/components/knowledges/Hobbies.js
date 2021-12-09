import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                <i className="fas fa-running"  ></i>
                    <span>Judo Ceinture noire 2ème Dan</span>
                </li>
            
                <li className="hobby">
                    <i className="fas fa-film"  ></i>
                    <span>Cinéma</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-music"  ></i>
                    <span>Musique</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-gamepad"  ></i>
                    <span>Jeux vidéo</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-sim-card"  ></i>
                    <span>Technologies</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;