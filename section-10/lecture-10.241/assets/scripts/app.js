/**
 *
 *  Lecture 10.241: Getting Started with OOP Code
 *
 *  Robert Hieger
 *  04/15/2023
 *
 *  This lecture introduces the concepts behind object-oriented
 *  programming (OOP) and introduces the project for this module.
 *  This module builds from the ground up a front-end for an
 *  online store with product lists, individual products for sale
 *  and the functionality to allow a user to order product(s).
 *
 *  Tasks for this lecture:
 *
 *  1. Create a dummy array of two product objects containing titles,
 *  prices and an image url for product photo.
 *
 *  2. Create stub for productList object.
 *
 *  3. Refactor products Object, moving it into productList and making
 *  the object into a property of productList.
 *
 *  4. Create stub for productList.render() Method.
 *
 *  5. Complete logic for render() Method:
 *    a. Create prodList node.
 *    b. Apply product-list CSS Class to prodList node.
 *
*/

const = productList {
  
  products:[
    {
      title: 'A Pillow', imageUrl: 'http://www.clker.com/cliparts/b/0/b/d/13444048401912257549buckwheat-pillow-hi.png',
      price: 19.99,
      description: 'A soft pillow!'
    },
    {
      title: 'A Carpet', imageUrl: 'https://secure.img1-fg.wfcdn.com/im/47722856/resize-h800-w800%5Ecompr-r85/1317/131735735/Serapi+Hand-Knotted+Oriental+Area+Rug+in+Rust%2FIvory%2FNavy.jpg',
      price: 89.99,
      description: 'A carpet which you might like - or not.'
    }
  ],
  render() {
    
    // Capture node for root element of product list
    const renderHook = document.getElementById('app');
    
    // productList node
    const prodList = document.createElement('ul');
    
    // Add styling
    prodList.className = 'product-list';
  }
};
