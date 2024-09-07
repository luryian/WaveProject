/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./home.css";
import { getProjetos } from "../services/firebase";
import Search from "../components/Search/Search";
import logo from '../assets/logo.png';
import { Swiper, SwiperSlide} from 'swiper/react';
import trilhas from '../assets/trilhas.png';
import { getSliders } from '../components/Swiper/SwiperData';

export function Home() {
    const [projetos, setProjetos] = useState<any[]>([])
    const [sliders, setSliders] = useState<any[]>([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        getProjetos(setProjetos)
        
    }, [])
      
    useEffect(() => {
          getSliders(setSliders)
        }, []) 
    

    const filteredProjetos = projetos.filter((elem) =>
        elem.nome.toLowerCase().includes(search.toLowerCase()) // Comparação em letras minúsculas para evitar case sensitivity
    );


    return(
        <div className="body">
            <div className="header">
                <img src={logo} alt="logo" className="logo" />
                <Search search={search} setSearch={setSearch}/>
            </div>
            <div>
                <Swiper
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    navigation={true}
                    className="slide-container"
                >
                    {sliders.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img 
                                src={item.image} 
                                alt="Slider"
                                className="slide-imagem"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="trilhas-container">
                <img src={trilhas} alt="trilha-design" />
                <img src={trilhas} alt="trilha-audiovisual" />
                <img src={trilhas} alt="trilha-programacao" />
                <img src={trilhas} alt="trilha-jogos" />
            </div>
            <div className="navbar-container">
                <h1>Lista de projetos de pesquisa</h1>
            </div>
            <div className="projetosList">
                {filteredProjetos.map((elem) => (
                    <div key={elem.documentId} className="projetoCard"> 
                        <h3> {elem.nome} </h3>
                        <p> {elem.descricao} </p>
                    </div>
                ))}
            </div>
        </div>
        
    )
}