import { db } from "../../services/firebase.ts";
import { collection, query, where, getDocs } from "firebase/firestore";



export async function getTrilha(trilha: string, array: any[]) {

    const q = query(collection(db, "projetos"), where("trilha", "==", trilha));
    const trilhass: any[] = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {           
      trilhass.push(doc.data())
      
    });
    array.push(trilhass)

   
    return trilhass
    
}
