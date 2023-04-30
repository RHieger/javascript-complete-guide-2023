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
  	// TBD
  }

  render() {

  	// Capture node for root element of product list
    const renderHook = document.getElementById('app');

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
	renderHook.append(prodList);
  }

}

const productList = new ProductList();
productList.render();
