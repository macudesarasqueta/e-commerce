import products from "./data"

export default function getAsyncData() {
  console.log("Solicitando datos getAsyncData")  
    return new Promise( (resolve, reject) => { 
      const errorFatal = false;

      setTimeout( () => {
        if (errorFatal)
          reject("Algo salió mal!!!!");
        else
          resolve(products);
        console.log("Promesa Terminada getAsyncData");
      }, 1000);  
      console.log("Promesa generada getAsyncData") 
  });
}

export function getAsyncItemById(requestID) {
  // console.log("Solicitando datos getAsyncItemById");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(item => item.id === parseInt(requestID, 10)); // Convierte a número si es necesario
      if (product)
        resolve(product);
      else
        reject("Producto no encontrado");
      console.log("Promesa terminada getAsyncItemById");
    }, 1000);
    console.log("Promesa generada getAsyncItemById")
  });
}

export function getAsyncItemsByCategory(catID) {
  return new Promise( (resolve, reject) => {   
    console.log("Solitando productos para... ", catID)
    const errorFatal = false; 
    setTimeout( () => {    
      const requestedProduct = products.filter( (item) => item.category.toLowerCase() === catID.toLowerCase())
      if (errorFatal) 
        reject("Algo salió mal!!!!")  
      else
        resolve(requestedProduct)
        console.log("Promesa terminada getAsyncItemsByCategory");
    }, 1000);
    console.log("Promesa generada getAsyncItemsByCategory")
  })
}