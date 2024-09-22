
// export function Sistemas(){
//     return(
//         <div className="body">
//             <div className="header">
//                 <img src={logo} alt="logo" className="logo" />
//             </div>
//             <div className="carrossel">
                
//             </div>

//             <div className="body-container">
//                 <div className="navbar-container">
//                     <Search search={search} setSearch={setSearch}/>
//                     <DropdownAplicacao setAplicacaoSelecionada={setAplicacaoSelecionada} aplicacaoSelecionada={aplicacaoSelecionada}/>
//                 </div>
//                 <div className="filter-feedback">
//                     <FilterFeedback trilhaSelecionada={trilhaSelecionada} aplicacaoSelecionada={aplicacaoSelecionada}/>
//                 </div>
//                 <div className="listaProjetos">
//                     {filteredProjetos.map((elem) => (
//                         <div className="card bg-base-100 w-96 shadow-xl" key={elem.documentId}>
//                             <div className="Button_SM" onClick={() => getProject(elem.documentId)}> 
//                                 <a href={`/details/${elem.documentId}`}><button className="Button_SM_details"> saiba mais</button></a>

//                             </div>
//                             <div key={elem.documentId} className="card-body card-text">
//                                 <h2 className="card-title">{elem.nome}</h2>
//                             </div>
//                             <div className="card-actions justify-between items-center">
//                                 <p>{elem.Codernador}</p>
//                                 <div className="badge badge-outline">{elem.trilha}</div>
                                
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     )
// }