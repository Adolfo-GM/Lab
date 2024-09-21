function showAtom(name, atomicNumber, atomicWeight) {
    const atomDisplay = document.createElement('div');
    atomDisplay.style.position = 'fixed';
    atomDisplay.style.top = '0';
    atomDisplay.style.left = '0';
    atomDisplay.style.width = '100vw';
    atomDisplay.style.height = '100vh';
    atomDisplay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    atomDisplay.style.color = 'white';
    atomDisplay.style.display = 'flex';
    atomDisplay.style.flexDirection = 'column';
    atomDisplay.style.alignItems = 'center';
    atomDisplay.style.justifyContent = 'center';
    atomDisplay.style.zIndex = '1000';
    atomDisplay.style.transition = 'opacity 0.5s';

    atomDisplay.innerHTML = `
        <h1>${name}</h1>
        <p>Atomic Number: ${atomicNumber}</p>
        <p>Atomic Weight: ${atomicWeight}</p>
        <div class="atom-animation">
            <div class="nucleus"></div>
        </div>
        <button id="closeButton">Close</button>
    `;

    document.body.appendChild(atomDisplay);

    for (let i = 0; i < atomicNumber; i++) {
        const electron = document.createElement('div');
        electron.className = 'electron';
        const angle = (i / atomicNumber) * (2 * Math.PI);
        const radius = 70;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        electron.style.transform = `translate(${x}px, ${y}px)`;
        electron.style.animationDuration = `${2 + i * 0.5}s`;
        document.querySelector('.atom-animation').appendChild(electron);
    }

    document.getElementById('closeButton').onclick = function() {
        atomDisplay.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(atomDisplay);
        }, 500);
    };
}

const style = document.createElement('style');
style.innerHTML = `
    .atom-animation {
        width: 200px;
        height: 200px;
        position: relative;
        margin: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .nucleus {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: radial-gradient(circle, #ffcc00, #ff6600);
        position: absolute;
        animation: pulse 1.5s infinite;
    }

    .electron {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #00ccff;
        position: absolute;
        animation: orbit linear infinite;
        animation-fill-mode: forwards;
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }

    @keyframes orbit {
        0% { transform: rotate(0deg) translate(70px) rotate(0deg); }
        100% { transform: rotate(360deg) translate(70px) rotate(-360deg); }
`;
document.head.appendChild(style);
