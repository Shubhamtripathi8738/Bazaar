import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Input=(props)=>{
  const[onLoad,setOnLoad]=useState(false);
  const { slug } = useParams();
    useEffect(()=>{
        setOnLoad(false)
    },[slug])
  const func =()=>{

    props.handleprops(props.Id)
    setOnLoad(!onLoad)


  }

    return(
        <>
  <li><input type="checkbox" checked={onLoad} onChange={func} /><label className="brand-list-name">{props.name}</label></li>


        
        </>
    )
}
export default Input;