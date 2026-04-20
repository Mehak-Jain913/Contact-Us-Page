import React from 'react';
import './Navigation.module.css';
export default function Navigation() {
    return (
        <nav className="container">
            <div className='logo'>
                <img src="https://www.shutterstock.com/image-vector/vector-share-contact-bubble-speech-600nw-2532470011.jpg"width={40}
                alt="contact" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

//yarn dev