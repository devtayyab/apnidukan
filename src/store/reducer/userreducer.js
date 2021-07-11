
export default (state = [] , action)=>{
    console.log(state)
    console.log(action)
switch (action.type) {
    case "SIGININ":
        localStorage.setItem("user",JSON.stringify(action?.payload))
        return action.payload
    case "SIGINUP":
            localStorage.setItem("user",JSON.stringify(action?.payload))
            return action.payload
    case "LOGOUT":
        localStorage.removeItem("user")
            return action.payload
    default:
        return  state
}


}
