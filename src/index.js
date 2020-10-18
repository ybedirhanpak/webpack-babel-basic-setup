import './style.css';
import * as Heading from './components/heading.js';

const root = document.getElementById("root");

root.appendChild(Heading.heading("Normal Heading"));

Heading.asyncHeading("Async Heading").then((asyncHeading) => {
    root.appendChild(asyncHeading);
});
