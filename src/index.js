Modules
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './style.scss';

// Assets
import logo from './assets/infinite_workout.png';

// Components
import * as Heading from './components/heading.js';
import * as Paragraph from './components/paragraph.js';
import * as Image from './components/image.js';

const root = document.getElementById("root");

root.appendChild(Heading.heading("Normal Heading"));

Heading.asyncHeading("Async Heading").then((asyncHeading) => {
    root.appendChild(asyncHeading);
});

root.appendChild(Paragraph.paragraph("Paragraph"));

root.appendChild(Image.image(logo));

ReactDOM.render(
    <div>Hello React</div>,
    document.getElementById("react-root")
);
