// ITEM DATA: 
let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [
	//t-shirts
    {
        id: 1,
        productName: "Faded Purple CrewNeck",
		size: "L",
		quantity: "2",
		image:"https://i.postimg.cc/P56qnJ4S/Crew-Neck-1.jpg",
		price:"R600"
    },
	//sweatshirts
	{
        id: 2,
        productName: "Graphic SweatShirt",
		size: "M",
		quantity: "3",
		image:"https://i.postimg.cc/L8tD8d7Y/Graphic-Sweat-Shirt-1.jpg",
		price:"R699"
    },
	//jackets
	{
        id: 3,
        productName: "Carhartt Bones-Jacket",
		size: "L",
		quantity: "1",
		image:"https://i.postimg.cc/1XzWTW5C/Carhartt-Bones-1.jpg",
		price:"R2200"
    },
	//hoodies
	{
        id: 4,
        productName: "Nike Purple FlameHoodie",
		size: "M",
		quantity: "4",
		image:"https://i.postimg.cc/tgNGGMpp/Nike-Purple-Flames.jpg",
		price:"R1880"
    },
	//pants
	{
        id: 5,
        productName: "Graphic SW Pants",
		size: "XL",
		quantity: "1",
		image:"https://i.postimg.cc/cCfd6Mnc/275834450-542228100497493-5314424466359396574-n.jpg",
		price:"R1600"
    },
	//other
	{
        id: 6,
        productName: "Ski Mask",
		size: "M",
		quantity: "6",
		image:"https://i.postimg.cc/DfDT3Nt3/Ski-Mask-1.jpg",
		price:"R600"
    }
];

function displayProduct() {
	products.forEach((item) => {
		document.querySelector('#card').innerHTML +=`
		<div class="card-body">
		<h4>${item.productName}</h4>		
		<img class="card-img-top" src="${item.image}" alt="">
		<p class="card-text">Size: </p>
		<p class="card-text">In Stock: ${item.quantity}</p>
		<p class="card-text">Price: ${item.price}</p>
		<a href="#" class="btn btn-dark">Add to Checkout</a>
		</div>
		`
	});
}
displayProduct();

let CheckOutList = [];

function checkoutProducts(item) {
    try{
        //Save the selected products into an array.
        CheckOutList.push(item);
        localStorage.setItem('checkout', JSON.stringify(CheckOutList));
    }catch(e) {
        console.log(`Error: ${e.message}`);
    }
}

