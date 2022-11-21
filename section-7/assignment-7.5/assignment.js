/**
 * 
 * Assignment 7.5
 * 
 * Robert Hieger
 * 11/20/2022
 * 
 * OBJECTIVES:
 * 
 * 1. Select first list item (in two different ways at least!)
 *    and change the background-color to black, text-color
 *    to white.
 * 
 * 2. Change the document title (in <head>) to "Assignment - Solved!".
 *    Use two different ways for getting access to the <title>
 *    element: Via querySelector on document and via querySelector
 *    on the certain property you find in document.
 * 
 * 3. Select the <h1> element in index.html and change it's text to
 *    "Assignment&mdash;Solved!"
 * 
 */

// Task 1: My Solution

// Oldest means of capturing first list item:
const listItem = document.getElementById('task-1');

// Newer methods achieving the same end:
const listItemNew = document.querySelector('li');

const list = document.querySelector('ol');
const firstItem = list.querySelector('li:first-of-type');

// Change styles of listItemNew according to instructions.
firstItem.style.color = '#ffffff';
firstItem.style.backgroundColor = '#000000';
