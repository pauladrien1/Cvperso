import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Navigation from '../components/Navigation';




const contact = () => {
    return (
        <div className="contact">
            <Navigation />
            
            <div className="contactContent">
           
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className= "fas fa-map-marker-alt"></i>
                            <span>Bordeaux</span>
                        </li>
                        <li>
                            <i className= "fas fa-mobile-alt" ></i>
                            <CopyToClipboard text="0606628047">
                                <span className="clickInput" onClick={() => {alert ('Téléphone copié');}} >06 06 62 80 47</span>
                            </CopyToClipboard>
                        </li>
                        
                        <li>
                            <i className= "far fa-envelope" ></i>
                            <CopyToClipboard text="petit.pauladrien@gmail.com">
                                <span className="clickInput" onClick={() => {alert ('E-mail copié');}} >petit.pauladrien@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                    <a href="https://www.linkedin.com/in/paul-petit-321870216/" target="_blank" rel="noopener noreferrer">
                        <h4>LinkedIn</h4>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    
                    <a href="https://github.com/pauladrien1/" target="_blank" rel="noopener noreferrer">
                        <h4>Github</h4>
                        <i className="fab fa-github"></i>
                    </a>
                    
                    <a href="https://twitter.com/PaulPETITPRO/" target="_blank" rel="noopener noreferrer">
                        <h4>Twitter</h4>
                        <i className="fab fa-twitter"></i>
                    </a>
                    
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default contact;