let btnPlus = document.querySelector(".plusencomendas");
let saveButton = document.querySelector(".saveLogoChange");
let cancelButton = document.querySelector(".cancelLogoChange");
list = document.querySelectorAll(".lineTable")

btnPlus.addEventListener("click", () => {
    document.querySelector(".encomendamodal").style = "display: flex;";
    
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
    //CANCELAR APAGAR O NEWROW

    newColumn1.textContent = document.querySelector(".product")
    newColumn2.textContent = document.querySelector(".value")
    newColumn3.textContent = document.querySelector(".date")
    newColumn4.textContent = document.querySelector(".dateP")
    newColumn5.textContent = document.querySelector(".status")

    newRow.classList.add("lineTable")
    list = document.querySelectorAll(".lineTable")

    document.querySelector(".bodytable").appendChild(newRow);
})

cancelButton.addEventListener("click", () => {
    document.querySelector(".encomendamodal").style = "display: none;";

    document.querySelector(".top_navbar").style="opacity:1;transition: opacity 0.8s ease"
    document.querySelector(".topPerfil").style="opacity:1;transition: opacity 0.8s ease"
    document.querySelector(".tablesection").style="opacity:1;transition: opacity 0.8s ease"

    document.querySelector(".sidebar").style="opacity:1;transition: opacity 0.8s ease"
})

saveButton.addEventListener("click", () => {
    document.querySelector(".encomendamodal").style = "display: none;";

    document.querySelector(".top_navbar").style="opacity:1;transition: opacity 0.8s ease"
    document.querySelector(".topPerfil").style="opacity:1;transition: opacity 0.8s ease"
    document.querySelector(".tablesection").style="opacity:1;transition: opacity 0.8s ease"

    document.querySelector(".sidebar").style="opacity:1;transition: opacity 0.8s ease"
})


list.forEach(member => {
    member.addEventListener("click", () => {
        swal({
            title: "Notificação",
            text: member.textContent,
            button: "Continuar"
        });
    })
});
