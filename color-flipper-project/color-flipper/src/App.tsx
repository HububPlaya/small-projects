import React, { useState } from 'react';
import "./App.css"
function App() {
    // State to hold the current background color
    const [bgColor, setBgColor] = useState('white'); // Default background color
    const randomColor = () => {
        const makeColorCode = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += makeColorCode[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    // Update the document's background color whenever bgColor changes
    document.body.style.backgroundColor = bgColor;

    return (
        <div>
            <h1>Click a button to change the background color:</h1>
            <button className="red-button" onClick={() => setBgColor('red')}>Red</button>
            <button className="blue-button" onClick={() => setBgColor('blue')}>Blue</button>
            <button className="green-button" onClick={() => setBgColor('green')}>Green</button>
            <button onClick={() => setBgColor(randomColor)}>Random</button>
        </div>
    );
}

export default App;