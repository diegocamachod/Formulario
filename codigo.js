
const form = document.getElementById("formulario");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(form);
    let tableRef = document.getElementById("Table");
    let newRow = tableRef.insertRow(-1);

    let newCell = newRow.insertCell(0);
    newCell.textContent = formData.get("tType")

    newCell = newRow.insertCell(1);
    newCell.textContent = formData.get("producto")

    newCell = newRow.insertCell(2);
    newCell.textContent = formData.get("monto")

    newCell = newRow.insertCell(3);
    newCell.textContent = formData.get("categoria")
})

function validarInput() {
    document.getElementById("btn").disabled = !document.getElementById("producto").value.length;
}