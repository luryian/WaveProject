import { db } from "../../services/firebase.ts";
import { collection, query, where, getDocs } from "firebase/firestore";



export async function getTrilha(trilha: string) {

    const q = query(collection(db, "projetos"), where("trilha", "==", trilha));
    const trilhass: any[] = []
    const querySnapshot = await getDocs(q);
    console.log('fucionou')
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      trilhass.push(doc.data())
      console.log(doc.id, " => ", doc.data());
      
    });
    
    console.log(trilhass)
    return trilhass
   
}
