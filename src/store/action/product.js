import axios from 'axios'
import {uri} from '../../api/productapi'
export const productadd =(products)=>{
console.log(products)
    return(dispatch=>{

            const  data = axios.post(`${uri}`, products)

            dispatch({
                type: "ADD",
                payload : "tayayb"
            })
    })
}
export const productget =()=>{
        return(async(dispatch)=>{
    
                const  {data} = await axios.get(`${uri}`)
                console.log(data)
                dispatch({
                    type: "GETPRODUCT",
                    payload : data
                })
        })
    }

export const searchaction = (search)=>{

    return ( async(dispatch)=>{

        try {
            const {data} = await axios.post(`${uri}/search`, {search})
         
            dispatch({
                type : "SEARCH",
                payload : data
            })  
        } catch (error) {
           console.log(error.message) 
        }
    })

  
    }