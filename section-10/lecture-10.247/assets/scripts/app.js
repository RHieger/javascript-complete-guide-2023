/**
 *
 *  Lecture 10.247: Adding a Cart & Shop Class
 *  Robert Hieger
 *  04/30/2023
 *
 *  In this lecture, the instructor begins to build the infrastructure
 *  to accomodate having a shopping cart and enabling users to add
 *  items to that shopping cart.
 *
 *  Tasks for this lecture:
 *
 *  1. Create stub for new ShoppingCart class.
 *
 *  2. Add items[] Datastore to ShopingCart().
 *
 *  3. Add render() Method to ShoppingCart().
 *
 *  4. Create stub for Shop class, which joins the content
 *     of individual products to the ProductList content.
 *
 *  5. Add render method to Shop class including the
 *     following functionality:
 *
 *		 	a) Instantiate object of type ShoppingCart and render.
 *			b) Instantiate object of type ProductList and render.
 *
 *  6. Capture root node for productList (renderHook object).
 *
 *  7. Populate Shop class as follows:
 *
 *		 a) Append cartEl to 'app' node.
 *		 b) Append prodListEl to 'app' node.
 *
 *	8. Instantiate object of type Shop (named shop).
 *
 *	9. Call render() method on shop().
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

	  return cartEl;

	}

}

class ProductItem {

  constructor(product) {
  	this.product = product;
  }

  addToCart() {
  	// FOR DIAGNOSTIC PURPOSES ONLY
  	console.log('Adding product to cart...');
  	console.log(this.product);
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
			const cart = new ShoppingCart();
			const cartEl = cart.render();
			const productList = new ProductList();
			const prodListEl = productList.render();

			// Append Shopping Cart and List to root node
			renderHook.append(cartEl);
			renderHook.append(prodListEl);

  	}

}

const shop = new Shop();
shop.render()
