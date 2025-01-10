import products from "./data"

export default function getAsyncData() {
  console.log("Solicitando datos")  
  const promiseData = new Promise( (resolve, reject) => { 
    const errorFatal = false;

    setTimeout( () => {
      if (errorFatal) reject("Algo salió mal!!!!")
      console.log("Promesa Terminada")
      resolve(products)
    }, 1000)     
  })

  console.log("Promesa generada.")

  return promiseData;
}

export function getAsyncItemById(requestID) {
  console.log("Solicitando datos para ID", requestID)  
  const promiseData = new Promise( (resolve, reject) => { 
    const errorFatal = false;

    setTimeout( () => {
      if (errorFatal) reject("Algo salió mal!!!!")
      console.log("Promesa Terminada")
      resolve(products.find(item => item.id === requestID))      
    }, 1000)     
  })

  console.log("Promesa generada.")

  return promiseData;
}


export function getAsyncItemsByCategory(catID) {
  console.log("Solitando productos para... ", catID)
  
  const promiseData = new Promise( (resolve, reject) => {    

    setTimeout( () => {    
      if (errorFatal) reject("Algo salió mal!!!!")  
      const requestedProduct = products.filter( (item) => item.category.toLowerCase() === catID.toLowerCase())
      // TODO: validar si encontramos un producto -> si no es así, rechazamos la promesa
      resolve(requestedProduct)
    }, 1000)     
  })

  console.log("Promesa generada.")

  return promiseData;
}