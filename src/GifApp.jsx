import React, { useState }  from "react";
import { AddCategory, GifGrid } from "./components";


export const GifApp=()=>{
  const[categories, setCategories] = useState([]);

  const handleAddCategory =(value) =>{
    setCategories([value, ...categories]);
  }; 

  const handleOnRemove = value => {
    const categoriesFiltered = categories.filter(category => category !== value);
    setCategories(categoriesFiltered);
  };
  const handleRemoveAll = () => {
    setCategories([]);
  };

  return(
    <>
    {/*Titulo*/}
    <h1>GifApp</h1>

    {/*Input*/}
      <AddCategory addCategory={handleAddCategory}/>

    {/*Listado de Gif*/}    
    <button className="reset" onClick={handleRemoveAll}>Reset</button>     
    
    {categories.map((category) => <GifGrid key={category} category={category} handleOnRemove={handleOnRemove}/>)}        
    </>
  );

 };