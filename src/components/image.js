/**
 * 
 * @param {*} content 
 * @returns {HTMLImageElement}
 */
export const image = (src) => {
    const image = document.createElement("img"); 
    image.src = src;
    return image;
}
