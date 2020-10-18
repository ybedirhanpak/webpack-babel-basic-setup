/**
 * 
 * @param {*} content 
 * @returns {HTMLElement}
 */
export const heading = (content) => {
    const heading = document.createElement("h1"); 
    heading.classList.add("big-heading");
    heading.append(content);
    return heading;
}

/**
 * 
 * @param {*} content 
 * @returns {Promise<HTMLElement>}
 */
export const asyncHeading = (content) => {
    return new Promise((resolve, reject) => {
        const heading = document.createElement("h1");
        heading.classList.add("big-heading", "async");
        heading.append(content);
        resolve(heading);
    })
}
