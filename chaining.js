class Calculator {
    constructor(value = 0) {
        this.value = value;
    }

    add(number) {
        this.value += number;
        return this; 
    }

    subtract(number) {
        this.value -= number;
        return this;
    }

    multiply(number) {
        this.value *= number;
        return this;
    }

    divide(number) {
        if (number === 0) {
            console.log("Cannot divide by 0");
        } else {
            this.value /= number;
        }
        return this;
    }

    result() {
        console.log(`Result: ${this.value}`);
        return this.value;
    }
}

const calc = new Calculator();

calc.add(10)
    .subtract(5)
    .multiply(2)
    .divide(3)
    .result();  
