let newAnimalImg = document.createElement("img");
let newAnimalName = document.createElement("pa");
let newAnimalDelete = document.createElement("button");
let plusAnimal = document.querySelector(".listanimaisplus");
let apagarAnimalList = document.querySelectorAll(".apagaranimal");
let lembreteApagar = document.querySelectorAll(".lembretebtnlist");
let lembretes = document.querySelectorAll(".listlembrete");

plusAnimal.addEventListener("click", () => {
    let newAnimal = document.createElement("div");

    newAnimal.classList.add("listanimais");
    
    newAnimalImg.src = document.querySelector(".logolistanimal").src
    newAnimalImg.classList.add("logolistanimal");
    
    newAnimalName.textContent = "Animal";

    newAnimalDelete.innerHTML = "X";
    newAnimalDelete.classList.add("apagaranimal");

    newAnimal.appendChild(newAnimalImg);
    newAnimal.appendChild(newAnimalName);
    newAnimal.appendChild(newAnimalDelete);


    document.getElementById("animais").appendChild(newAnimal);
})

for(let i = 0; i < apagarAnimalList.length; i++){
    apagarAnimalList[i].addEventListener("click", () => {
        document.getElementById("animais").removeChild(document.getElementById("animais").lastElementChild);
    })
}

lembreteApagar.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.style = "display: none";
    })
});

//to do
lembretes.forEach(lembrete => {
    document.querySelector(".logoanimalmodal").style = "display: flex;";
 
    document.querySelector(".top_navbar").style="opacity:0.2;transition: opacity 0.8s ease"
    document.querySelector(".animalselected").style="opacity:0.2;transition: opacity 0.8s ease"
    document.querySelector(".box").style="opacity:0.2;transition: opacity 0.8s ease"

    document.querySelector(".sidebar").style="opacity:0.2;transition: opacity 0.8s ease"
})