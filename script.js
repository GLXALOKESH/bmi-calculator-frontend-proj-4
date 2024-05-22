console.log("Script running...");

let btn = document.getElementById("submit");
let wtinp = document.getElementById("weight");
let htinp = document.getElementById("height");

function checkcat(bmi) {
    if (bmi < 15) {
        return "Starvation";
    } else if (bmi >= 15 && bmi <= 18.5) {
        return "Underweight";
    } else if (bmi > 18.5 && bmi <= 24.9) {
        return "Ideal";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else if (bmi >= 30 && bmi < 40) {
        return "Obese";
    } else if (bmi >= 40) {
        return "Morbidly Obese";
    }
}

let color = {
    "Starvation": "red",
    "Underweight": "orange",
    "Ideal": "green",
    "Overweight": "yellow",
    "Obese": "orange",
    "Morbidly Obese": "red"
};

btn.onclick = () => {
    let weight = wtinp.value;
    let height = htinp.value;

    if (isNaN(weight) || isNaN(height) || weight.trim() === "" || height.trim() === "" || parseFloat(weight) <= 0 || parseFloat(height) <= 0) {
        wtinp.value = "";
        htinp.value = "";
        alert("Please enter valid numeric values for both weight and height.");
    
    } else {
        weight = parseFloat(weight);
        height = parseFloat(height);
        let bmi = weight / ((height / 100) ** 2);
        let showbmi = document.getElementById("bmi");
        showbmi.innerText = `BMI: ${bmi.toFixed(1)}`;

        let showcat = document.getElementById("cat");
        let category = checkcat(bmi);
        showcat.innerText = category;
        showcat.style.color = color[category];
        showcat.style.padding = "5px";
    }
};
