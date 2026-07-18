let mainscr = document.querySelector(".mainScreen")
let historyscr = document.querySelector(".historyScreen")
function displaynum(num) {
    mainscr.textContent += num;
}
function calculate() {
    try {

        let result = eval(mainscr.textContent);
        if (typeof (result) != 'number') {
            historyscr.textContent = mainscr.textContent + `= ${result}`;
        }
        else if (!Number.isFinite(result)) {
            historyscr.textContent = mainscr.textContent + `= ${result}`;
            mainscr.textContent = "";
        }
        else {

            historyscr.textContent = mainscr.textContent + `= ${result}`;
            mainscr.textContent = result;
        }

    }
    catch (err) {
        console.log(err.name);
        console.log(err.message);

    }


}

function clearDisplay(){
     mainscr.textContent = "";
     historyscr.textContent="";
}


function deleteLast(){
     mainscr.textContent  =  mainscr.textContent.slice(0,-1);
}

//Adding the Key Listeners
document.body.addEventListener("keydown", (event) => {
     const key = event.key;

    if(!isNaN(key) || "+-*/.%".includes(key)){
        displaynum(key);
    }

    else if(key === "Enter"|| key==="="){
        calculate();
    }

    else if(key === "Backspace"){
       deleteLast();
    }

    else if(key === "Escape"){
      clearDisplay();
    }

   
}
)