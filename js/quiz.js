
let score = 0;
let currentForm = 1;
const totalForms = 12;
var obj_score=document.getElementById("resultat");

function reponse(id) {

    const checkedRadio = document.querySelector(`#${id} input[name="check"]:checked`);

    if (checkedRadio) {
        if (checkedRadio.value == "correcte") {
            score += 1;
        }

        document.getElementById(`form${currentForm}`).style.display = "none";

       
        currentForm++;
        if (currentForm <= totalForms) {
            document.getElementById(`form${currentForm}`).style.display = "block";
        } else {
          
            obj_score.innerText  = score;
            document.getElementById(`final-score`).style.display = "block";
            
        }



    } else {
        alert("Veuillez sélectionner une réponse avant de valider."); 
    }





}


window.onload = function () {
    for (let i = 2; i <= totalForms; i++) {
        document.getElementById(`form${i}`).style.display = "none";
    }
};




function afficherReponsesCorrectes(){
    document.getElementById(`correction`).style.display = "block";
}