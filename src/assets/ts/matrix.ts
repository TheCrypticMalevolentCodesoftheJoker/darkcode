const characters: string = '世1AᏐBこDEFలోHIJ#LMչN〄OP嗎RSはUVW你YZ0ड?H☯23ດີ78༄9';

let matrixContainer: HTMLElement | null;
const columnCount: number = Math.floor(window.innerWidth / 40);
const columnPositions: number[] = Array.from({ length: columnCount }, (_, i) => i * (100 / columnCount));

function createColumn(position: number): void {
    const column: HTMLDivElement = document.createElement('div');
    column.classList.add('column');

    for (let i = 0; i < 25; i++) {
        const span: HTMLSpanElement = document.createElement('span');
        span.textContent = getRandomCharacter();
        span.classList.add('char');
        column.appendChild(span);
    }

    if (matrixContainer) {
        matrixContainer.appendChild(column);
        column.style.left = `${position}vw`;
        column.style.animationDuration = `${getRandomDuration()}s`;

        column.addEventListener('animationend', () => {
            column.remove();
            createColumn(position);
        });

        setInterval(() => {
            const chars: NodeListOf<HTMLSpanElement> = column.querySelectorAll('.char');
            chars.forEach((char) => {
                if (Math.random() > 0.9) {
                    char.textContent = getRandomCharacter();
                }
                if (Math.random() > 0.7) {
                    char.classList.add('bright');
                } else {
                    char.classList.remove('bright');
                }
                if (Math.random() > 0.9) {
                    char.classList.add('flicker');
                } else {
                    char.classList.remove('flicker');
                }
            });
        }, getRandomInterval());
    }
}

export const iniciarMatriz = (): void => {
    matrixContainer = document.querySelector('.matrix');
    columnPositions.forEach((position) => {
        setTimeout(() => {
            createColumn(position);
        }, Math.random() * 3000);
    });
};

function getRandomCharacter(): string {
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

function getRandomInterval(): number {
    return Math.floor(Math.random() * 300) + 200;
}

function getRandomDuration(): number {
    return Math.random() * 5 + 3;
}
