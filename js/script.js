
const printBtn = document.getElementById("printPage");

if (printBtn) {
    printBtn.addEventListener("click", () => {
        window.print();
    });
}


const welcomeText = "Welcome to My Portfolio!";
const welcomeElement = document.getElementById("welcome");
let index = 0;

function typeWriter() {
    if (index < welcomeText.length) {
        welcomeElement.innerHTML += welcomeText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

document.addEventListener("DOMContentLoaded", typeWriter);