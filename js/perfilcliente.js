let newAnimalImg = document.createElement("img");
let newAnimalName = document.createElement("pa");
let plusAnimal = document.querySelector(".listanimaisplus");

plusAnimal.addEventListener("click", () => {
    let newAnimal = document.createElement("div");

    newAnimal.classList.add("listanimais");
    
    newAnimalImg.src = document.querySelector(".logolistanimal").src
    newAnimalImg.classList.add("logolistanimal")
    
    newAnimalName.textContent = "Animal";

    newAnimal.appendChild(newAnimalImg);
    newAnimal.appendChild(newAnimalName);


    document.querySelector(".animais").appendChild(newAnimal).before(document.querySelector(".listanimaisplus"));
})