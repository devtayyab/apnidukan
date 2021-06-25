import React, {useState,useEffect} from 'react'
import {FormControl, InputLabel,Input,FormHelperText, Button} from '@material-ui/core'
import {Signinaction} from '../../store/action/useraction'
import {useDispatch} from 'react-redux'
import './style.css'
import {useHistory} from 'react-router-dom'
export default function Addproduct() {

const [user, setuser] =useState({

      
        email: "",
        password : "",

    

})
const dispatch = useDispatch()
const history = useHistory();
const Handleform =(e)=>{
e.preventDefault()

  console.log(user)
  dispatch(Signinaction(user))
  history.push('/')
}

    return (
    <div>
      <form className='forms'> 
  <FormControl className="controls">
  <InputLabel htmlFor="my-iput">Email</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"
  defultvalue={user.email} onChange={(e)=>setuser({...user , email: e.target.value})}
  />
  
  </FormControl>
  
  <FormControl className="controls">
   
  <InputLabel htmlFor="my-input">Password</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"
  defultvalue={user.password} onChange={(e)=>setuser({...user , password: e.target.value})}
  /></FormControl>
  
 

<Button type="submit" onClick={Handleform} variant="outlined" color="primary">SIGNIN</Button>
</form>

</div>
    )
}
