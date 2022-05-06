let newAnimalImg = document.createElement("img");
let newAnimalName = document.createElement("pa");
let newAnimalDelete = document.createElement("button");
let plusAnimal = document.querySelector(".listanimaisplus");
let apagarAnimalList = document.querySelectorAll(".apagaranimal");

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
