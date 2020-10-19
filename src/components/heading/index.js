import { h } from 'preact';

export const Heading = (props) => {
    const { content } = props;
    return (
        <h1 class="big-heading">{content}</h1>
    );
}
