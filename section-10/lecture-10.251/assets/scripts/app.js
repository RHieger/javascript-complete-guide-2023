/**
 *
 *  Lecture 10.251: Getters & Setters
 *  Robert Hieger
 *  05/04/2023
 *
 *  In this lecture, the instructor introduces the concept of
 *	Getters & Setters within objects. Getters & Setters are
 *	special methods which allow us to "get" the value of an
 *	object property and return it to the calling function, or
 *	"set" the value of an object property, either changing its
 *	current value or initializing it if no value is present.
 *
 *  Tasks for this lecture:
 *
 *	1. Add getter totalAmount() method to total all prices in the
 *		 ShoppingCart() class.
 *
 *	2. Add setter cartItems method to set display of total prices
 *		 in the shopping cart.
 *
*/

class Product {

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }

}

class ShoppingCart {

	// Datastore for individual products
	items = [];

	set cartItems(value) {
		this.items = value;

		// Logic to display total amount of shopping cart
		this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;

	}

	get totalAmount() {

		// Calculate ShoppingCart total
		const sum = this.items.reduce(
			(prevValue, curItem) => prevValue + curItem.price,
			0
		);
		return sum;
	}

	addProduct(product) {

		// References this.items in cartItems method
		const updatedItems = [...this.items];

		// Add product item to updatedItems array
		updatedItems.push(product);

		// Set contents of cartItems to updatedItems[]
		this.cartItems = updatedItems;

	}

	render() {

	  // Root element for shopping cart
	  const cartEl = document.createElement('section');

	  // Content for cartEl (provisional code)
	  cartEl.innerHTML = `
	    <h2>Total: \$${0}</h2>
	    <button>Order Now!</button>
	  `;

	  // Apply styling
	  cartEl.className = 'cart';

		// Make cartEl <h2> available to addProduct() method
		this.totalOutput = cartEl.querySelector('h2');

	  return cartEl;

	}

}

class ProductItem {

  constructor(product) {
  	this.product = product;
  }

  addToCart() {
  	// References static method in App class
  	App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';

    // Set content for prodEl:
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }

}

class ProductList {

  products = [
  	new Product(
  	  'A Pillow',
  	  'http://www.clker.com/cliparts/b/0/b/d/13444048401912257549buckwheat-pillow-hi.png',
  	  'A soft pillow!',
  	  19.99
  	),
  	new Product(
  	  'A Carpet',
  	  'https://secure.img1-fg.wfcdn.com/im/47722856/resize-h800-w800%5Ecompr-r85/1317/131735735/Serapi+Hand-Knotted+Oriental+Area+Rug+in+Rust%2FIvory%2FNavy.jpg',
	  'A carpet which you might like - or not.',
	  89.99
  	)
  ];

  // EXPERIMENTAL CODE
  constructor() {


  }

  render() {


    // productList node
    const prodList = document.createElement('ul');

    // Add styling
    prodList.className = 'product-list';

    // Assemble List of products:
    for (const prod of this.products) {

	  const productItem = new ProductItem(prod);
	  const prodEl = productItem.render();

      // Add product to product list.
      prodList.append(prodEl);

    }
	return prodList;
  }

}


class Shop {

    // Render combined content of ShoppingCart and Shop
  	render() {

			// Capture node for root element of product list
	    const renderHook = document.getElementById('app');

			// Instantiate ShoppingCart & render productList.
			this.cart = new ShoppingCart();
			const cartEl = this.cart.render();
			const productList = new ProductList();
			const prodListEl = productList.render();

			// Append Shopping Cart and List to root node
			renderHook.append(cartEl);
			renderHook.append(prodListEl);

  	}

}

class App {

	// Explicit initialization of static cart property
	static cart;

	static init() {
		const shop = new Shop();
		shop.render();
		// References cart contained within shop object
		this.cart = shop.cart;
	}

	static addProductToCart(product) {

		// References cart in instance object shop
		this.cart.addProduct(product);

	}

}

App.init();
