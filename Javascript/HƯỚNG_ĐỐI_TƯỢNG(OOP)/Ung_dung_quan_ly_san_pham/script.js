const products = [
    'Apple meomeo',
    'Samsung galaxy',
    'GG pixels',
]
let productIndex = -1;

const tableBody = document.getElementById('productList');
function displayProduct() {
    tableBody.innerHTML = '';
    let row = '';
    for (let i = 0; i < products.length; i++) {
        row +='<tr>';
        row += `<td>${products[i]}</td>`;
        row += `<td><button type="button" onclick="handleEdit(${i})">Edit</button></td>`;
        row += `<td><button type="button" onclick="handleDelete(${i})">Delete</button></td>`;
        row += '</tr>';
    }
    tableBody.innerHTML = row;
}

function createProduct(e) {
    e.preventDefault();
    const productName = document.getElementById('productName').value;
    products.push(productName);
    displayProduct();
}

function handleDelete(index) {
    products.splice(index, 1);
    displayProduct();
}

function handleEdit(index) {
    productIndex = index;
    const productName = product[index];
    document.getElementById('productName').value = productName;
}

displayProduct();