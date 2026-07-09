// ===============================
// Input box ko select kiya
// Isme numbers aur result show honge
// ===============================
let inputBox = document.getElementById("inputbox");

// ===============================
// Page ke sare buttons select kiye
// querySelectorAll() NodeList return karta hai
// ===============================
let buttons = document.querySelectorAll("button");

// ===============================
// Ye variable pura expression store karega
// Example: 12+5*3
// ===============================
let expression = "";

// ===============================
// Har button par click event lagaya
// forEach() ek-ek button ko check karta hai
// ===============================
buttons.forEach(function(button){

    button.addEventListener("click", function(){

        // Jis button par click hua uska text liya
        let value = button.innerText;

        // ===========================
        // AC BUTTON
        // Sab kuch clear karega
        // ===========================
        if(value === "AC"){

            expression = "";
            inputBox.value = "";

        }

        // ===========================
        // DEL BUTTON
        // Last character delete karega
        // slice(0,-1) last letter hata deta hai
        // ===========================
        else if(value === "DEL"){

            expression = expression.slice(0,-1);

            inputBox.value = expression;

        }

        // ===========================
        // EQUAL BUTTON
        // Expression calculate karega
        // ===========================
        else if(value === "="){

            // Agar expression khali hai
            if(expression === ""){
                inputBox.value = "";
            }

            else{

                try{

                    // eval() expression calculate karta hai
                    // Example:
                    // "5+5" -> 10
                    expression = eval(expression).toString();

                    // Result input box me show karo
                    inputBox.value = expression;

                }

                // Agar galat expression hua
                catch{

                    inputBox.value = "Error";

                    // Error ke baad expression reset
                    expression = "";

                }

            }

        }

        // ===========================
        // Baaki sare buttons
        // Numbers aur operators add honge
        // ===========================
        else{

            expression += value;

            inputBox.value = expression;

        }

    });

});
