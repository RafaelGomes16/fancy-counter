const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const counterTitleEl = document.querySelector('.counter__title');
const counterEl = document.querySelector('.counter');

resetButtonEl.addEventListener("click", () => {
    //set value to 0
    counterValueEl.textContent = 0;

    //other resets
    counterEl.classList.remove('counter--limit');
    counterTitleEl.textContent = 'Fancy Counter';

    //disable buttons
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;
});

 function decreaseCounter() {
    //get current value
    const currentValue = counterValueEl.textContent;

    //convert value to number type
    const currentValueAsNumber = +currentValue;

    // decrement by 1
    let newValue = currentValueAsNumber - 1;

    // value is always 0 or >
    if (newValue < 0) {
        newValue = 0;
    }

    // set counter with new value
    counterValueEl.textContent = newValue;
}  ;

function incrementCounter() {
    //get current value
    const currentValue = counterValueEl.textContent;

    //convert value to number type
    const currentValueAsNumber = +currentValue;

    // increment by 1
    let newValue = currentValueAsNumber + 1;

    if (newValue > 10) {
        newValue = 10;

        //custom configs
        counterEl.classList.add('counter--limit');
        counterTitleEl.innerHTML = 'Buy <b>Pro</b> if you want more :)'

        //disable buttons
        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;
    }

    // set counter with new value
    counterValueEl.textContent = newValue;
}

increaseButtonEl.addEventListener("click", incrementCounter);
decreaseButtonEl.addEventListener("click", decreaseCounter)