
import axios from 'axios'
import {uri} from '../../api/productapi'
export const Signinaction =(user)=>{
    console.log(user)
return( async(dispatch)=>{
try {
    const {data} = await axios.post(`${uri}/user/signin`, user)
    dispatch({

        type: "SIGININ",
        payload : data
    })
} catch (error) {
    console.log(error.message)
}

})
}
export const Signupaction =(user)=>{
    return( async(dispatch)=>{
    try {
        const {data} = await axios.post(`${uri}/user/signup`, user)
        dispatch({
    
            type: "SIGINUP",
            payload : data
        })
    } catch (error) {
        console.log(error.message)
    }
    
    })
    }
export const logoutaction =()=>{
    
return (dispatch)=>{
    try {
        console.log("hnrHTjhkGHsdPUfZlqeOxciDB3c")
        dispatch({
            type: "LOGOUT"
    
        })
    
    
    } catch (error) {
        console.log(error)
    }
   
}
     }
  