import React from "react";


function DynamicElement({ props }) {
    return props.map((element, index) => {
        return React.createElement(element.htmlElementName, { key: index, style: element.style }, element.innerHTML);
    });
}

export default DynamicElement;

// const callback = () => console.log('Timeout executed');
// undefined
// const timeoutRef = setTimeout(callback, 5000);
// undefined
// clearTimeout(timeoutRef);