// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let prices = Number(product.querySelector(".price span").innerText)
  let quantity = Number(product.querySelector(".quantity input").value)
  let subtotal = prices * quantity 

  product.querySelector(".subtotal span").innerText = subtotal
  return subtotal

} 

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let allProduct = document.querySelectorAll(".product")
 
  // allProduct.forEach( (eachProduct) =>{
  //   let sumTotal = updateSubtotal(eachProduct)
  //   console.log(sumTotal)
  // })
  let sum = 0;
  for (let i = 0; i < allProduct.length; i++){
    sum = sum + updateSubtotal(allProduct[i])
   
  } return sum
  
  
  

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
