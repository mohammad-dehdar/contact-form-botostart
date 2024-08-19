import { showFeedback, validateForm, validateInput } from "./validation.js";

const submit = document.getElementById('submit');
const finalSuccess = document.getElementById('final-success');

const items = ['name', 'email', 'message']

items.forEach(id => {
    document.getElementById(`${id}-input`).addEventListener('input', function() {
        showFeedback(this, validateInput(this, id));
    });
});

submit.addEventListener('click', function(e) {
    e.preventDefault();
    if (validateForm()) {
        finalSuccess.classList.toggle('hidden');
        // اینجا کد فچ دیتا قرار دهید
    } else {
        finalSuccess.classList.add('flex'); 
    }
});