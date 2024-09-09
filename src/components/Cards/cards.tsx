import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore"; // Para buscar um documento específico do Firestore
import { db } from "./src\services\firebase.ts"; // Sua configuração do Firestore

const Card = ({ card }) => {
  const [details, setDetails] = useState(null); // Estado para armazenar os detalhes
  const [loading, setLoading] = useState(false); // Estado de carregamento

  // Função para buscar detalhes do card
  const fetchDetails = async () => {
    setLoading(true); // Inicia o carregamento
    const docRef = doc(db, "projetos", card.id); // Referência ao documento específico
    const docSnap = await getDoc(docRef);

    setDetails(docSnap.data());

    setLoading(false)

    console.log(details)
  }

  

}