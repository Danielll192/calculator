const display = document.getElementById('display');


function appendToDisplay(value) {
    document.getElementById('display').value += value;
    };


function clearDisplay() {
    document.getElementById('display').value = "";
    document.addEventListener("click", function(){
        location.reload();
    })
}

function calculateResult() {
    const displayValue = document.getElementById('display').value.trim();
    
    if (displayValue === "") {
        return;
    }

    try {
        var result = eval(displayValue);
        
        if (isNaN(result)) {
            throw new Error("Invalid result");
        }

        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = "Error";
    }
}


document.querySelector("html").addEventListener("keydown", function(event){
    if (event.key === "Escape") {
        clearDisplay();
    } else if(event.key === "Enter") {
        calculateResult();
    } else if (event.key === "1") {
        appendToDisplay("1");
    } else if (event.key === "2") {
        appendToDisplay("2");
    } else if (event.key === "3") {
        appendToDisplay("3");
    } else if (event.key === "4") {
        appendToDisplay("4");
    } else if (event.key === "5") {
        appendToDisplay("5");
    } else if (event.key === "6") {
        appendToDisplay("6");
    } else if (event.key === "7") {
        appendToDisplay("7");
    } else if (event.key === "8") {
        appendToDisplay("8");
    } else if (event.key === "9") {
        appendToDisplay("9");
    } else if (event.key === "0") {
        appendToDisplay("0");
    } else if (event.key === ",") {
        appendToDisplay(".");
    } else if (event.key === ".") {
        appendToDisplay(".");
    } else if (event.key === "/") {
        appendToDisplay("/");
    } else if (event.key === "*") {
        appendToDisplay("*");
    } else if (event.key === "-") {
        appendToDisplay("-");
    } else if (event.key === "+") {
        appendToDisplay("+");
    } else if (event.key === "Backspace") {
        event.preventDefault();  
        display.value = display.value.slice(0, -1);
        
    }
       
}); 
