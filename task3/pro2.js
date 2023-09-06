document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";
    let operator = "";
    let firstOperand = null;
    let secondOperand = null;

    const clear = () => {
        currentInput = "";
        operator = "";
        firstOperand = null;
        secondOperand = null;
        display.value = "";
    };

    const calculate = () => {
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(secondOperand);

        switch (operator) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                if (num2 === 0) {
                    return "Error";
                }
                return num1 / num2;
            default:
                return "Error";
        }
    };

    const updateDisplay = () => {
        display.value = currentInput;
    };

    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", function () {
            const buttonText = this.textContent;

            if (buttonText >= "0" && buttonText <= "9") {
                currentInput += buttonText;
                updateDisplay();
            } else if (buttonText === "." && !currentInput.includes(".")) {
                currentInput += buttonText;
                updateDisplay();
            } else if (buttonText === "C") {
                clear();
            } else if (buttonText === "=") {
                if (firstOperand !== null && operator !== null && currentInput !== "") {
                    secondOperand = currentInput;
                    currentInput = calculate();
                    updateDisplay();
                    firstOperand = currentInput;
                    secondOperand = null;
                    operator = "";
                }
            } else {
                if (firstOperand === null) {
                    firstOperand = currentInput;
                    operator = buttonText;
                    currentInput = "";
                } else if (firstOperand !== null && operator !== null && currentInput !== "") {
                    secondOperand = currentInput;
                    currentInput = calculate();
                    updateDisplay();
                    firstOperand = currentInput;
                    secondOperand = null;
                    operator = buttonText;
                }
            }
        });
    });
});
