/**
 *
 *  Lecture 10.249: Static Methods & Properties
 *  Robert Hieger
 *  05/03/2023
 *
 *  In this lecture, the instructor introduces the concept of static
 *	methods and properties, which may be used where global values are
 *	needed, e.g. settings and configuration tasks. The static method or
 *	property may only be accessed from within the class itself.
 *
 *
 *  Tasks for this lecture: TBD
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

	addProduct(product) {

		// Add individual product to list
		this.items.push(product);

		// Preliminary logic to display total amount of shopping cart,
		// not yet dynamic.
		this.totalOutput.innerHTML = `<h2>Total: \$${1}</h2>`;

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

