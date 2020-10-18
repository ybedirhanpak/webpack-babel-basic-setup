import './style.scss';
import * as Heading from './components/heading.js';
import * as Paragraph from './components/paragraph';

const root = document.getElementById("root");

root.appendChild(Heading.heading("Normal Heading"));

Heading.asyncHeading("Async Heading").then((asyncHeading) => {
    root.appendChild(asyncHeading);
});

root.appendChild(Paragraph.paragraph("Paragraph"));
