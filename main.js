// Destinations with adjusted coordinates to ensure Singapore/Australia are safe
const destinations = [
    // Asia (10)
    { name: "India", x: 440, y: 430 }, 
    { name: "Nepal", x: 470, y: 310 },
    { name: "Japan", x: 860, y: 260 }, 
    { name: "S. Korea", x: 810, y: 280 },
    { name: "China", x: 720, y: 240 }, 
    { name: "Thailand", x: 620, y: 510 },
    { name: "Vietnam", x: 670, y: 530 }, 
    { name: "Malaysia", x: 590, y: 630 },
    { name: "Singapore", x: 610, y: 710 }, // Moved down but inside viewBox
    { name: "Bhutan", x: 530, y: 295 },
    // International (5)
    { name: "USA", x: 120, y: 320 }, 
    { name: "UK", x: 320, y: 190 },
    { name: "Russia", x: 630, y: 140 }, 
    { name: "Canada", x: 170, y: 160 },
    { name: "Australia", x: 860, y: 670 }
];

const mapSvg = document.getElementById('global-map');

function initGlobalMap() {
    destinations.forEach((dest, index) => {
        setTimeout(() => {
            // New Dhaka point is at (500, 350)
            const d = `M 500 350 Q ${ (500 + dest.x) / 2 } ${ (350 + dest.y) / 2 - 160 } ${dest.x} ${dest.y}`;
            
            // Flowing Arc
            const flowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            flowPath.setAttribute("d", d);
            flowPath.setAttribute("class", "arc-flow");
            mapSvg.appendChild(flowPath);

            // Glowing Node
            const node = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            node.setAttribute("cx", dest.x);
            node.setAttribute("cy", dest.y);
            node.setAttribute("r", "3");
            node.setAttribute("fill", "#00f2ff");
            node.setAttribute("style", "filter: drop-shadow(0 0 10px #00f2ff)");
            mapSvg.appendChild(node);
            
            // Label with slightly better shadow for readability
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", dest.x);
            text.setAttribute("y", dest.y - 15);
            text.setAttribute("fill", "rgba(255,255,255,0.7)");
            text.setAttribute("font-size", "11px");
            text.setAttribute("text-anchor", "middle");
            text.textContent = dest.name;
            mapSvg.appendChild(text);

        }, index * 200);
    });
}

initGlobalMap();