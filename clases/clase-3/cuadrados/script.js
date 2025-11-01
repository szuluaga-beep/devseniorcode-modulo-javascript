
const container = document.getElementById('container'); 
for (let i = 1; i <= 10; i++) {
    
    const type = (i % 2 === 0) ? 'par' : 'impar';

    const div = document.createElement('div');
    div.classList.add(`square-${type === 'par' ? 'red' : 'blue'}`);
    div.textContent = i;

    container.appendChild(div);
}