var button = document.createElement("input");
var selectedAnimals = document.querySelectorAll(".listanimais");

function EditarAnimal(){
    nomestat = document.getElementById("nome");
    nomestat.disabled = false;

    document.querySelector(".editable").lastElementChild.style = "background-color: #ffffff;border: 1px solid purple"

    button.setAttribute("type", "submit");   
    button.value = "Guardar Alterações";
    button.style = "font-family: Poppins-Regular, sans-serif;font-size: 14px;font-weight: 600;padding: 5px;cursor: pointer;border-radius: 15px 15px 15px 15px;background-color:#5C2976;color:white;border:2px solid #5C2976";

    document.querySelector(".infobtn").appendChild(button);
}

button.addEventListener("mouseover", () => {
    button.style = "font-family: Poppins-Regular, sans-serif;font-size: 14px;font-weight: 600;padding: 5px;cursor: pointer;border-radius: 15px 15px 15px 15px;background-color:white;color:#5C2976;border:2px solid #5C2976";
})

button.addEventListener("mouseout", () => {
    button.style = "font-family: Poppins-Regular, sans-serif;font-size: 14px;font-weight: 600;padding: 5px;cursor: pointer;border-radius: 15px 15px 15px 15px;background-color:#5C2976;color:white;border:2px solid #5C2976";
})

button.addEventListener("click", () => {
    nomestat = document.getElementById("nome");
    if(nomestat.value.length > 0)nomestat.placeholder = nomestat.value;
    nomestat.disabled = true;
    
    document.querySelector(".editable").lastElementChild.style = "background-color: #F1F1F1;border: 0"

    button.remove();
})

for(let i = 0; i < selectedAnimals.length; i++){
    selectedAnimals[i].addEventListener("click", () => {
        document.querySelector(".activeanimal").classList.remove("activeanimal");
        selectedAnimals[i].classList.add("activeanimal");

        document.querySelector(".selected").src = selectedAnimals[i].children[0].src;
        document.querySelector(".nameselected").innerHTML = selectedAnimals[i].children[1].innerHTML;

        document.querySelector(".logoanimalinfo").src = selectedAnimals[i].children[0].src;
        document.getElementById("nome").placeholder = selectedAnimals[i].children[1].textContent;
    })
}