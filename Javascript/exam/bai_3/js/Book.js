class Book{
        constructor(id, name, year, quantity, status) {
        this.id = parseInt(id);
        this.name = name;
        this.year = parseInt(year);
        this.quantity = parseInt(quantity);
        this.status = quantity > 0;
    }

    increaseQuantity() {
        this.quantity++;
        this.status = true;
    }

    borrow() {
        if (this.quantity > 0) {
            this.quantity--;
            if (this.quantity === 0) this.status = false;
        }
    }
}