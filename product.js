class product {
    constructor(productname, productcode, stock, price) {
        this.productname = productname;
        this.productcode = productcode;
        this.stock = stock;
        this.price = price;
    }
    get() {
        console.log(`Available stock is:${this.stock}`);
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

        var temp = 0;
        temp = this.stock - this.quantitysold;

        if (this.stock == 0) {
            console.log("outofstock");
        }
        else if (temp <= 0) {
            console.log(`stocks available after selling ${this.stock} .`);
            this.stock = 0;
        }
        else {
            this.totalamt = this.price * this.quantitysold;
            console.log("welcome back again");
            console.log("bill is:" + this.totalamt);
        }
    }
print(product_code,quantitysold,stock,totalamt,price){
    super.display();
    console.log(`The customer name is ${this.customername} .`);
    console.log(`The product code is ${this.product_code} .`);
    console.log(`The quantity sold is ${this.quantitysold} .`);
    console.log(`The total amount is ${this.totalamt} .`);
}
}
var e = new activity("shampoo", "101", "30", "5", "ranita", "111", "35", "175")
e.print();
e.sales(e.product_code,e.quantitysold,e.stock);

