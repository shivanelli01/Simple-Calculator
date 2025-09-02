let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText.trim(); // safer than innerHTML

        if (value === '=') {
            try {
                let result = eval(string); // calculate
                input.value = result;      // display result
                string = result.toString(); // keep result for next calculation
            } catch {
                input.value = "Error";   // show error if invalid
                string = "";
            }
        }
        else if (value === 'AC') {
            string = "";
            input.value = "";
        }
        else if (value === 'DEL') {
            string = string.slice(0, -1); // shorter way
            input.value = string;
        }
        else {
            string += value;
            input.value = string;
        }
    });
});

