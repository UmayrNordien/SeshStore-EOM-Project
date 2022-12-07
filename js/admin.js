//GET DATA (LOCAL STORAGE)
let products = JSON.parse(localStorage.getItem('products'));

// function onDelete(th) {
//     if (confirm('Are you sure to delete this record ?')) {
//         row = th.parentElement.parentElement;
//         document.getElementById("admin-list").deleteRow(row.rowIndex);
//         resetForm();
//     }
// }