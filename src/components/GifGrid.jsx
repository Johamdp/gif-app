import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";


export const GifGrid =({category, handleOnRemove})=>{

  const {imagenes, loading} = useFetchGif (category);
  

  return (
    <div className="grid-container">
      <div className="title-container">
        <h3>{category}</h3> 
        <button className="delete" onClick={() => handleOnRemove(category)}>Eliminar</button> 
      </div>




      {/*Desplegar Listado*/}
      <div className ="card-grid">        
      {
        loading ? <h2>Cargando...</h2>:
        imagenes.map(imagen => <GifItem key ={imagen.id} {...imagen} />)
      }

      </div>   
    </div>
  )
}