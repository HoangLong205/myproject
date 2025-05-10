class Product {
    name;
    price;
    description;
    category;
    img;

    constructor(name, price, description, category, img) {
        this.name = name;
        this.img = img;
        this.description = description;
        this.category = category;
        this.price = price;

    }

}

const products = [
    new Product('Iphone 16', 1000, 'Iphone 16 pro max', 'Smartphone'),
    new Product('Samsung Galaxy S23',
        900,
        'Samsung Galaxy S23 Ultra',
        'Smartphone',
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTILyNBxcqTrRytjHi5ykPDGjvVx4EKw8wDyhY3tLXwZSzlhmw6c_R1rA7ki208_EVgd1S4JAvfui-Rb-oQRc5ey2OMZlAoy6jGcjUws0w6e-cTsiHY-aRqIizA8RRizOj2qTucLg&usqp=CAc'
    ),
    new Product('Google Pixel 7', 800, 'Google Pixel 7 Pro', 'Google'),
    new Product('OnePlus 11', 700, 'OnePlus 11 Pro', 'Smartphone'),
    new Product(
        'Xiaomi 13 Pro',
        600,
        'Xiaomi 13 Pro',
        'Smartphone',
        'data:image/webp;base64,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'
    )
];

let productIndex = -1;

// ham hien thi san pham
function displayProduct() {
    // hien thi so luong san pham
    document.getElementById('productCount').innerHTML =
        products.length + ' products';

    //hien thi tung san pham suw dung vong lap
    const tableBody = document.getElementById('productList');
    tableBody.innerHTML = '';
    let row = '';

    for (var  i = 0; i < products.length; i++) {
        row += `<tr>
<td>${products[i].name}</td>
<td><img src="${products[i].img ? products[i].img : "?"}"></td>
<td>${new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(products[i].price)}</td>
<td>${products[i].description}</td>
<td>${products[i].category}</td>
<td><button class="edit" type="button" onclick="handleEdit(${i})">EDIT</button></td>
<td><button class="delete" type="button" onclick="handleDelete(${i})">DELETE</button></td>
</tr>`;
    }

    tableBody.innerHTML = row;
}

//ham tao san pham moi
function createProducts(event) {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productDescription = document.getElementById('productDescription').value;
    const productCategory = document.getElementById('productCategory').value;

    if (productIndex !== -1) {
        products[productIndex].name = productName;
        products[productIndex].price = productPrice;
        products[productIndex].description = productDescription;
        products[productIndex].category = productCategory;

        productIndex = -1; //reset chi so sau khi cap nhat (edit) lai san pham

        document.getElementById('productName').value = ''; //clear field after edit
        document.getElementById('btnAdd').innerText = 'Add';
    } else {
        products.push(new Product(
            productName,
            productPrice,
            productDescription,
            productCategory,
        ));
    }
    displayProduct();
}

//ham xoa san pham
function handleDelete(index) {
    if (confirm(`Ban có muốn xoá sản phẩm ${products[index].name} không`)) {
        products.splice(index, 1);
        displayProduct();
    }
}

// ham edit san pham
function handleEdit(index) {
    productIndex = index;
    document.getElementById('productName').value = products[index].name;
    document.getElementById('productPrice').value = products[index].price;
    document.getElementById('productDescription').value = products[index].description;
    document.getElementById('productCategory').value = products[index].category;

    document.getElementById('btnAdd').innerText = 'Update';
}
displayProduct();