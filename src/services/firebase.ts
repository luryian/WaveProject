/* eslint-disable @typescript-eslint/no-explicit-any */
import '../vite-env.d.ts'
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, query, getDocs} from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


//get projetos do banco
const collectionRef = query(collection(db, "projetos"))

export async function getProjetos( callback: React.Dispatch<React.SetStateAction <any[]>> ) {
    const response = await getDocs(collectionRef)
    const projetos: any[] = []
    response.forEach((doc) => {
        projetos.push(doc.data())
    });
    callback(projetos)
}

export function logout() {
    auth.signOut().then(() => {
      console.log('Usuário deslogado com sucesso!');
    }).catch((error) => {
      console.error('Erro ao deslogar:', error);
    });
  }


// usar user storage em cada requisito implementar com as telas.