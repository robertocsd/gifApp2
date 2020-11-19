import { useEffect, useState } from "react"
import { getGrid } from "../helpers/getGifs"


export const useFetchGifs = (category)=> {


    const [state, setstate] = useState({
        data :[],
        loading: true,

    })
    useEffect(() => {

      
        getGrid( category ).then(imgs =>  {
            
      
                console.log(imgs);
                setstate({
            
                    data: imgs,
                    loading: false
                })
                
       
            
          } )

    }, [])

  

    return state;
    

}