    const nomes =["Eduardo","Guardiano"]
    nomes.push("Neto")

    const lista = document.getElementById("lista")

    for (let nome of nomes) {
        lista.innerHTML += `<li>${nome}</li>`
    }