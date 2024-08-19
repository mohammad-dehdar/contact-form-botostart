const name = document.getElementById('name-input');
const email = document.getElementById('email-input');
const message = document.getElementById('message-input');
const queryTypeContainer = document.getElementById('query-type-container');

export const validateInput = (input, type) =>{
    const value = input.value.trim();
    switch (type) {
        case 'name': return value.length >= 2;
        case 'email': return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        case 'message': return value.length >= 10;
        default: return false;
    }
}
export const showFeedback =(input, isValid) => {
    input.classList.toggle('ring-red-500', !isValid);
    input.classList.toggle('ring-green-500', isValid);
    const errorSpan = input.parentElement.querySelector('.error');
    const successSpan = input.parentElement.querySelector('.done');
    if (errorSpan) errorSpan.classList.toggle('hidden', isValid);
    if (successSpan) successSpan.classList.toggle('hidden', !isValid);
}
export const validateQueryType =() =>{
    const queryTypes = document.querySelectorAll('input[name="query-type"]');
    const isSelected = Array.from(queryTypes).some(radio => radio.checked);

    queryTypeContainer.querySelectorAll('label').forEach(label => {
        label.classList.toggle('bg-red-300', !isSelected);
    });

    return isSelected;
}
export const validateForm =()=> {
    const inputs = [
        { el: name, type: 'name' },
        { el: email, type: 'email' },
        { el: message, type: 'message' }
    ];
    const inputsValid = inputs.map(({ el, type }) => {
        const isValid = validateInput(el, type);
        showFeedback(el, isValid);
        return isValid;
    });
    const isQueryTypeValid = validateQueryType();
    return inputsValid.every(Boolean) && isQueryTypeValid;
}
