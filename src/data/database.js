import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where} from "firebase/firestore";

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