import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, query, where, getDoc, addDoc} from "firebase/firestore";
// import products from "./data";

const firebaseConfig = {
    apiKey: "AIzaSyBb3kj0p_rtv9fHirwSzKRoJCmHv6tulsk",
    authDomain: "react-amateallover.firebaseapp.com",
    projectId: "react-amateallover",
    storageBucket: "react-amateallover.firebasestorage.app",
    messagingSenderId: "40025528593",
    appId: "1:40025528593:web:c691c2beee1a0d5cb314b0"
};

// 1. Conexión con Firebase
const app = initializeApp(firebaseConfig);

// 2. Conexión con la base de datos de Firestore
const db = getFirestore(app);

export default async function getAsyncData() { 
  // leer todos los documentos de la colección "products"
  const collectionRef = collection(db, "products"); // referencia de coleccion
  const productsSnapshot = await getDocs(collectionRef) // snapshot de datos
  // snapshot -> docs
  console.log(productsSnapshot)

  const documentsData = productsSnapshot.docs.map( doc => { 
    /*  { ...doc.data(), id: doc.id} */
    const fullData = doc.data()
    fullData.id = doc.id;
    return fullData;
    }
  )  

  return documentsData; // resolve(documentsData)
 }


export async function getAsyncItemById(itemID) { 
  const docRef = doc(db, "products",itemID )
  const docSnapshot = await getDoc(docRef);
  const docData = docSnapshot.data();
  return docData;
 }

export async function getAsyncItemsByCategory(catID) {
  const productsColRef = collection(db, "products");
  const q = query(productsColRef, where("category", "==", catID))

  const productsSnapshot = await getDocs(q) // snapshot de datos
  // snapshot -> docs
  console.log(productsSnapshot)

  const documentsData = productsSnapshot.docs.map( doc => { 
    /*  { ...doc.data(), id: doc.id} */
    const fullData = doc.data()
    fullData.id = doc.id;
    return fullData;
    }
  )  

  return documentsData; // resolve(documentsData)
}

// export async function createDocument(){
//     const docRef = await addDoc(collection(db, "products"), {
//     price: 40,
//     title: "Mate vidrio x2",
//     text: "Bombilla con un diseño clásico de pico de loro, ideal para un sorbo cómodo y fluido. Hecha de acero inoxidable, es perfecta para quienes disfrutan de un mate tradicional con un toque único.",
//     img: "images/vidrio.png",
//     category: 'bombillas',
//     stock: 8,
//   },); 
//     console.log("Document written with ID: ", docRef.id);
// }

//  export async function exportProductsToDB(){
//     //for... of
//     // products.forEach( item => {} )
//     // 15 productos -> 15 writes en firestore
//     for(let item of products){    
//         delete item.id;
//         const docID = await addDoc( collection(db, "products"), item)
//         console.log("Creado documento", docID.id)
//     }
//  }
// export async function exportProductsWithBatch(){
//   const batch = writeBatch(db)
//   products.forEach( item => {
//     const itemid = `${item.id}`;
//     delete item.id
//     const newDoc = doc(db, "products", `item-${itemid}`);
//     batch.set(newDoc, item)
//   });
//   const commitRes = await batch.commit()
//   console.log("Commit de products completo", commitRes)
//}
export async function createBuyOrder(orderData){
  // console.log(orderData);
  const newOrderDoc = 
    await addDoc(collection(db, "orders"), orderData); 
  return newOrderDoc.id
}
//export async function createBuyOrderWithStockUpdate(){
    // Crear orden de compra
    // update del stock (
        // busquemos cada doc -> orderData.items
        // cada documento update(doc, { stock: })
//}
// export async function updateStock(){
// }