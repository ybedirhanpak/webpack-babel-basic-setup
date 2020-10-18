import './paragraph.scss';

/**
 * 
 * @param {*} content 
 * @returns {HTMLElement}
 */
export const paragraph = (content) => {
    const paragraph = document.createElement("p"); 
    paragraph.classList.add("paragraph");
    paragraph.append(content);
    return paragraph;
}
