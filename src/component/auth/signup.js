import React, {useState,useEffect} from 'react'
import {FormControl, InputLabel,Input,FormHelperText, Button} from '@material-ui/core'
import {Signupaction} from '../../store/action/useraction'
import {useDispatch} from 'react-redux'
import './style.css'
import {useHistory} from 'react-router-dom'
export default function Siginup() {

const [user, setuser] =useState({

      
        name: "",
        image: "",
        email: "",
        phone: "",
        password : "",
        confrimpassword : "",

    

})
const dispatch = useDispatch()
const history = useHistory();
const Handleform =(e)=>{
e.preventDefault()

  console.log(user)
  dispatch(Signupaction(user))
  history.push('/')
}

    return (
    <div>
      <form className='forms'>
        <FormControl className="controls">
  <InputLabel htmlFor="my-input">Name</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"
  defultvalue={user.name} onChange={(e)=>setuser({...user , name: e.target.value})}
  />


  </FormControl>
  
  <FormControl className="controls">
  <InputLabel htmlFor="my-iput">Email</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"
  defultvalue={user} onChange={(e)=>setuser({...user , email: e.target.value})}
  /></FormControl><FormControl className="controls">
   
  <InputLabel htmlFor="my-input">Password</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"
  defultvalue={user} onChange={(e)=>setuser({...user , password: e.target.value})}
  /></FormControl><FormControl className="controls">
  
  <InputLabel htmlFor="my-input">Rewrite password</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" 
  defultvalue={user.confrimpassword} onChange={(e)=>setuser({...user , confrimpassword: e.target.value})}
  
  /></FormControl>

<Button type="submit" onClick={Handleform} variant="outlined" color="primary">SIGNUP</Button>
</form>

</div>
    )
}
