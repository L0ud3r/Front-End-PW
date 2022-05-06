document.getElementById("help").addEventListener("submit", (e) => {
    e.preventDefault();
    swal({
        title: "Sucesso",
        text: "Email enviado com sucesso!",
        icon: "success",
        button: "Continuar",
    });

    /*const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < 5000);*/
})