class Book{
        constructor(id, name, year, quantity, status) {
        this.id = parseInt(id);
        this.name = name;
        this.year = parseInt(year);
        this.quantity = parseInt(quantity);
        this.status = this.quantity > 0;
    }

    increaseQuantity() {
        this.quantity++;
        this.status = true;
    }

    borrow() {
        if (this.quantity > 0) {
            this.quantity--;
            this.status = this.quantity > 0;
            return true;
        }
        return false;
    }
}