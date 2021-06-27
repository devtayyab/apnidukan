import React, {useState,useEffect} from 'react'
import {FormControl, InputLabel,Input,FormHelperText, Button} from '@material-ui/core'
// import {productadd} from '../../store/action/address'

import {useDispatch} from 'react-redux'
import './style.css'
import {useHistory} from 'react-router-dom'
export default function Shipping() {

const [address, setaddress] =useState({

      
        name: "",
        adress: "",
        
        city: "",
        country: "",
        
        zipcode: ""
    

})
const dispatch = useDispatch()
const history = useHistory();
const Handleform =(e)=>{
e.preventDefault()

  console.log(address)
//   dispatch(productadd(address , history))
  history.push('/')
}

    return (
    <div>
      <form className='forms'>
        <FormControl className="controls">
  <InputLabel htmlFor="my-input">Full Name</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"
  defultvalue={address.name} onChange={(e)=>setaddress({...address , name: e.target.value})}
  />


  </FormControl>
  
  <FormControl className="controls">
  <InputLabel htmlFor="my-iput">Address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"
  defultvalue={address.adress} onChange={(e)=>setaddress({...address , adress: e.target.value})}
  /></FormControl><FormControl className="controls">
   
  <InputLabel htmlFor="my-input">City</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"
  defultvalue={address.city} onChange={(e)=>setaddress({...address , city: e.target.value})}
  /></FormControl><FormControl className="controls">
  
  <InputLabel htmlFor="my-input">Zipcode</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" 
  defultvalue={address.zipcode} onChange={(e)=>setaddress({...address , zipcode: e.target.value})}
  
  /></FormControl>
  <FormControl className="controls">
 
  <InputLabel htmlFor="my-input">Country</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"
  defultvalue={address.country} onChange={(e)=>setaddress({...address , country: e.target.value})}
  /></FormControl><FormControl className="controls">
  
</FormControl>
<FormControl>
<Button type="submit" variant="outlined" color="primary">JAzzCAsh</Button>
</FormControl>


<Button type="submit" onClick={Handleform} variant="outlined" color="primary">Place Order</Button>
</form>

</div>
    )
}
