import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getCountFromServer,
  connectFirestoreEmulator,
} from "firebase/firestore";

var config = {
  apiKey: "AIzaSyAPv04LrkVoCdyQnz2G4BXpAdlEFRN2cb8",
  authDomain: "some-test-project-e771b.firebaseapp.com",
  projectId: "some-test-project-e771b",
  storageBucket: "some-test-project-e771b.appspot.com",
  messagingSenderId: "254435120912",
  appId: "1:254435120912:web:bd9e2f1fccd6f2d5167795",
  measurementId: "G-X0R22W99TK",
};

initializeApp(config);

const db = getFirestore();
connectFirestoreEmulator(db, "localhost", 8080);

// UPDATE COLLECTION TO ONE OF YOUR CHOICE THAT HAS READ ACCESS
const collectionRef = "flutter-tests";

export async function callCount() {
  const coll = collection(db, collectionRef);
  const snapshot = await getCountFromServer(coll);
  console.log("count: ", snapshot.data().count);
}

// document.getElementById("button-id").addEventListener("click", () => {
//   callCount();
// });
