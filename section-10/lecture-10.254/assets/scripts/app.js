/**
 *
 *  Lecture 10.254: Using Inheritance Everywhere
 *  Robert Hieger
 *  06/12/2023
 *
 *  Now that inheritance has been used in creation of the ShoppingCart
 *	class, through the extension of the Component class, the aim of
 *	this lecture is to explore using this inheritance wherever appropriate
 *	throughout this application.
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

class ElementAttribute {

	constructor(attrName, attrValue) {
		this.name = attrName;
		this.value = attrValue;
	}

}

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
			this.cart = new ShoppingCart('app');
			this.cart.render();
			const productList = new ProductList();
			const prodListEl = productList.render();

			// Append Shopping Cart and List to root node
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
