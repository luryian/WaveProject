import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase.ts";

export async function getProject(id: string) {
  const projectRef = doc(db, 'projetos', id)

  const project = await getDoc(projectRef)

  return project.data()
}
