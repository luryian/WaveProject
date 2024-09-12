import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore"; // Para buscar um documento específico do Firestore
import { db } from "../../services/firebase.ts";


const PlansReference = db.collection('projetos')

export function getPlansObsever(){
  PlansReference.onSnapshot((snapshot)=>{
    const plans: any[] = []
    snapshot.forEach((doc) => {
      plans.push(doc.data())
    })

  })

}

