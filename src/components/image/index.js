import { h } from 'preact';

export const Image = (props) => {
    const { source } = props;
    return(
        <img src={source}></img>
    );
}