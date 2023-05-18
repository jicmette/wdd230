const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener('click', () => {
    const chapter1 = input.value;
    input.value = '';

    const li = document.createElement('li');
    const listText = document.createElement('span');
    const button = document.createElement('button');

    li.appendChild(listText);
    listText.textContent = chapter1;
    li.appendChild(button);
    button.textContent = "X";
    list.appendChild(li);

    button.addEventListener('click', () => {
        list.removeChild(li);
    }); 

    input.focus();
});