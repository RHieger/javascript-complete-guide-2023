/**
 *
 *  Lecture 10.243: Working with Constructor Methods
 *
 *  Robert Hieger
 *  04/16/2023
 *
 *  This lecture introduces the concept behind class constructors
 *  and starts the process of further development on the
 *  Section 10 project—"Mini-Shop."
 *
 *  Tasks for this lecture:
 *
 *  1. Refactor products property of productList Object such that the
 *  array containing individual products makes calls to the constructor
 *  of the Product class in order to build each product appended to
 *  the array.
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

const productList = {

  products: [
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
  ],
  render() {

    // Capture node for root element of product list
    const renderHook = document.getElementById('app');

    // productList node
    const prodList = document.createElement('ul');

    // Add styling
    prodList.className = 'product-list';

    // Assemble List of products:
    for (const prod of this.products) {

      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';

      // Set content for prodEl:
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `
      // Add product to product list.
      prodList.append(prodEl);
    }
    // Append product list to root node 'app';
    renderHook.append(prodList);
  }
};

productList.render();
