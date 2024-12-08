window.onload = (event) => {
    const button1 = document.getElementById('1');
    const inputField = document.getElementById('input-field');

    if (button1 && inputField) {
        button1.addEventListener('click', () => {
            inputField.value = '1';
        });
    } else {
        console.error('Required elements not found in the DOM');
    }
};
