// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { deleteDoc, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { Stats } from "fs";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdeHOaOF2vWOhHELb0L2qmyi7FDCyI_o4",
  authDomain: "fir-projectdb-40189.firebaseapp.com",
  projectId: "fir-projectdb-40189",
  storageBucket: "fir-projectdb-40189.firebasestorage.app",
  messagingSenderId: "967574459003",
  appId: "1:967574459003:web:8556490930f04a250f08de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app,"firebase insial successfully ");

const db = getFirestore(app);

//add data 
async function addCollection(name, price, status) {
  try {
    const docRef = await addDoc(collection(db, "Product"), {
      name: name,
      price: price,
      status: status
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//get data
async function getAllColection() {
  const querySnapshot = await getDocs(collection(db, "Product"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
}

// addCollection("hetset",90000,"In stock");
// addCollection("charger",1500,"out of stock");
// addCollection("keyboard",2000,"In stock");

//getAllColection();


//update data
// const updateref = doc(db,"Product","1eiNtNq9QMPIpSyr5s2j");
// await updateDoc(updateref, {
//     status:"out of stock" 
// });


//delete data
async function deletedocument(id) {

    const deleteref = doc(db,"Product",id);
    await deleteDoc(deleteref);
}

// ................................................ secont collection 

async function addCollectionveg(vegname, weight, price) {
  try {
    const docRef = await addDoc(collection(db, "vegetables"), {
      vegname: vegname,
      weight: weight,
      price: price
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function deletedocumentveg(id) {

    const deleteref = doc(db,"vegetables",id);
    await deleteDoc(deleteref);
}


// addCollectionveg("potato","2kg",150);
// addCollectionveg("Tomato","3kg",300);

const updateref = doc(db,"Product","1eiNtNq9QMPIpSyr5s2j");
    await updateDoc(updateref, {
    status:"out of stock" 
});