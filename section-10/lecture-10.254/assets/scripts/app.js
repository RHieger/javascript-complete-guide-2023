/**
 *
 *  Lecture 10.254: Using Inheritance Everywhere
 *  Robert Hieger
 *  06/14/2023
 *
 *  Now that inheritance has been used in creation of the ShoppingCart
 *	class, through the extension of the Component class, the aim of
 *	this lecture is to explore using this inheritance wherever appropriate
 *	throughout this application.
 *
 *  Tasks for this lecture:
 *
 *	1. Refactor ProductItem by extending Component class.
 *
 *	2. Refactor ProductItem.render():
 *		a. Remove hard-coded root element creation using createElement
 *			 method, and instead reference Component.createRootElement().
 *
 *	3. Refactor ProductList class:
 *		a. Remove hard-coded declaration of prodEl object adding a product
 *			 to the product list.
 *		b. Add temporary object whose sole property is an id that corresponds
 *			 to the root element the to which the product will be append.
 *
 *	4. Refactor ProductItem.constructor():
 *		a. Add renderHookId as second argument.
 *		b. Call super(renderHookId) to reference root element provided
 *			 by Component, our base class.
 *
 *	5. Refactor ProductList class:
 *		a. Set ProductList to extend our base class, Component.
 *		b. Add third argument to CreateRootElement by instantiating
 *			 an object of type ElementAttribute where the attribute is
 *			 'id' and the value is 'prod-list'.
 *		c. Remove hard-coded id attribute.
 *		d. Remove hard-coded style of 'product-list'.
 *		e. Remove superfluous return prodList statement.
 *		f. In ProductList.constructor(), add renderHookId as its single
 *			 argument.
 * 		g. Call super() on Component class with argument of renderHookId.
 *
 *	6. Refactor Shop class:
 *		a. Remove superfluous append statement that appends productList.
 *		b. Remove superfluous creation of prodListEl.
 *		c. Remove superfluous declaration of renderHook.
 *		d. In Shop.render(), add 'app' as argument to declaration of
 *			 productList object.
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
		console.log('Component constructor called!');
		this.hookId = renderHookId;
	}

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

  constructor(renderHookId) {
		super(renderHookId);
  }

  render() {

    // productList node
    const prodList = this.createRootElement(
    	'ul', 'product-list',
    	[new ElementAttribute('id', 'prod-list')]
    );

    // Assemble List of products:
    for (const prod of this.products) {

	  const productItem = new ProductItem(prod, 'prod-list');
	  productItem.render();

    }

  }

}


class Shop {

    // Render combined content of ShoppingCart and Shop
  	render() {

			// Instantiate ShoppingCart & render productList.
			this.cart = new ShoppingCart('app');
			this.cart.render();
			const productList = new ProductList('app');
			productList.render();

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
