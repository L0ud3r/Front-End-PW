let btnPlus = document.querySelector(".pluspagamentos");
let saveButton = document.querySelector(".saveLogoChange");
let cancelButton = document.querySelector(".cancelLogoChange");


btnPlus.addEventListener("click", () => {
    document.querySelector(".pagamentomodal").style = "display: flex;";
    
    document.querySelector(".top_navbar").style="opacity:0.2;transition: opacity 0.8s ease"
    document.querySelector(".topPerfil").style="opacity:0.2;transition: opacity 0.8s ease"
    document.querySelector(".tablesection").style="opacity:0.2;transition: opacity 0.8s ease"

    document.querySelector(".sidebar").style="opacity:0.2;transition: opacity 0.8s ease"

    let newRow = document.createElement("tr");


    let newColumn1 = document.createElement("td");
    let newColumn2 = document.createElement("td");
    let newColumn3 = document.createElement("td");
    let newColumn4 = document.createElement("td");
    let newColumn5 = document.createElement("td");


    newRow.appendChild(newColumn1);
    newRow.appendChild(newColumn2);
    newRow.appendChild(newColumn3);
    newRow.appendChild(newColumn4);
    newRow.appendChild(newColumn5);

    //FAZER PARA BAIXO APENAS SE CARREGAR EM GUARDAR
    //CANCELAR APAHAR O NEWROW

    newColumn1.textContent = document.querySelector(".type")
    newColumn2.textContent = document.querySelector(".date")
    newColumn3.textContent = document.querySelector(".value")
    newColumn4.textContent = document.querySelector(".location")
    newColumn5.textContent = document.querySelector(".status")

    newRow.classList.add("lineTable")

    document.querySelector(".bodytable").appendChild(newRow);
})

cancelButton.addEventListener("click", () => {
    document.querySelector(".pagamentomodal").style = "display: none;";

    document.querySelector(".top_navbar").style="opacity:1;transition: opacity 0.8s ease"
    document.querySelector(".topPerfil").style="opacity:1;transition: opacity 0.8s ease"
    document.querySelector(".tablesection").style="opacity:1;transition: opacity 0.8s ease"

    document.querySelector(".sidebar").style="opacity:1;transition: opacity 0.8s ease"
})

saveButton.addEventListener("click", () => {
    document.querySelector(".pagamentomodal").style = "display: none;";

    document.querySelector(".top_navbar").style="opacity:1;transition: opacity 0.8s ease"
    document.querySelector(".topPerfil").style="opacity:1;transition: opacity 0.8s ease"
    document.querySelector(".tablesection").style="opacity:1;transition: opacity 0.8s ease"

    document.querySelector(".sidebar").style="opacity:1;transition: opacity 0.8s ease"
})