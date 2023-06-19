/**
 *
 *  Lecture 10.256: super() Constructor Execution, Order & "this"
 *  Robert Hieger
 *  06/19/2023
 *
 *  The previous lecture left an error in the code, causing a message
 *  that states "this.products is not an iterable". This lecutre will
 *	fix that error.
 *
 *  Tasks for this lecture:
 *
 *	1. Declare empty products[] array to contain product items rendered
 *		 by ProductList class.
 *
 *	2. Move mock datastore of this.products() array into new fetchProducts()
 *		 method, which specifies product items to be rendered.
 *
 *	3. Within ProductList.constructor(), call new fetchProducts() method
 *		 using this keyword—-this.fetchProducts();
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

class ElementAttribute {

	constructor(attrName, attrValue) {
		this.name = attrName;
		this.value = attrValue;
	}

}

/* Base Class */
class Component {

	constructor(renderHookId) {
		this.hookId = renderHookId;
		this.render();
	}

	// Empty method present only for reference to this
	// method present in subclasses of Component.
	render() {}

	// Set the root node for Product List
	createRootElement(tag, cssClasses, attributes) {

		const rootElement = document.createElement(tag);

		// Add styling if specified
		if (cssClasses) {
			rootElement.className = cssClasses;
		}

		// Add attributes if specified
		if (attributes && attributes.length > 0) {

			// Loop through and assign any attributes
			for (const attr of attributes) {
				rootElement.setAttribute(attr.name, attr.value);
			}

		}
		document.getElementById(this.hookId).append(rootElement);
		return rootElement;
	}

}

class ShoppingCart extends Component {

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

	constructor(renderHookId) {
		// References Component.renderHookId
		super(renderHookId);
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

	  // Root element for shopping cart—-
	  // refers to Component.createRootElement().
	  const cartEl = this.createRootElement('section', 'cart',);

	  // Content for cartEl (provisional code)
	  cartEl.innerHTML = `
	    <h2>Total: \$${0}</h2>
	    <button>Order Now!</button>
	  `;

	  // Make cartEl <h2> available to addProduct() method
		this.totalOutput = cartEl.querySelector('h2');

	}

}

class ProductItem extends Component {

  constructor(product, renderHookId) {
  	super(renderHookId);
  	this.product = product;
  }

  addToCart() {
  	// References static method in App class
  	App.addProductToCart(this.product);
  }

  render() {
  	// Set root element for ProductItem.
    const prodEl = this.createRootElement('li', 'product-item');
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
  }

}

class ProductList extends Component {

	// Declare products array to hold product items.
	products = [];

  constructor(renderHookId) {
		super(renderHookId);
		this.fetchProducts();
  }

  // STOP-GAP CODE UNTIL HTTP REQUESTS ARE COVERED:

  fetchProducts() {

		this.products = [
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
  }

  render() {

    // productList node
    const prodList = this.createRootElement(
    	'ul', 'product-list',
    	[new ElementAttribute('id', 'prod-list')]
    );

    // Assemble List of products:
    for (const prod of this.products) {

	  	new ProductItem(prod, 'prod-list');

    }

  }

}


class Shop {

	constructor() {
		this.render();
	}

	// Render combined content of ShoppingCart and Shop
	render() {

		// Instantiate ShoppingCart & render productList.
		this.cart = new ShoppingCart('app');
		new ProductList('app');

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

