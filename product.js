class product {
    constructor(productname, productcode, stock, price) {
        this.productname = productname;
        this.productcode = productcode;
        this.stock = stock;
        this.price = price;
    }
    get() {
        console.log(`The value of stock is ${this.stock} .`);
    }
    display() {
        console.log(`The product name is ${this.productname} .`);
        console.log(`The product code is ${this.productcode} .`);
        console.log(`The stock is ${this.stock} .`);
        console.log(`The product price is ${this.price} .`);
    }
}
class activity extends product {
    constructor(productname, productcode, stock, price, customername, product_code, quantitysold, totalamt) {
        super(productname, productcode, stock, price)
        this.customername = customername;
        this.product_code = product_code;
        this.quantitysold = quantitysold;
        this.totalamt = totalamt;
    }
    sales() {
        super.get();
        console.log(`the total amount is ${this.product_code} + ${this.quantitysold} `);
        console.log(`the decreased value of stock is ${this.stock > 0} `);
        console.log(`the avaliable quantity is already sold `);
    }
    print() {
        super.display();
        console.log(`The customer name is ${this.customername} .`);
        console.log(`The product code is ${this.product_code} .`);
        console.log(`The quantity sold is ${this.quantitysold} .`);
        console.log(`The total amount is ${this.totalamt} .`);
    }
}
