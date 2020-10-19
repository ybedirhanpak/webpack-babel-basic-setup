import { h, Component } from 'preact';
import './paragraph.scss';

export const Paragraph = (props) => {
    const { content } = props;
    return (
        <p class="paragraph">{content}</p>
    );
};
