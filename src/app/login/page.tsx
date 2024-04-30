"use client";
import RestaurantSignUp from "../_component/Restaurantsingup";
import RestaurantLogin from "../_component/Restaurantlogin";
import { useState } from "react";

const Login =() =>{
    const [login,setLogin] = useState(false);
    return (

        <>

        <h1>Welcome to nosh nest</h1>
        {
            login ? <RestaurantLogin/> : <RestaurantSignUp/>
        }

        <button onClick={()=>setLogin(!login)}>{
            login ? "Don't have an account? Sign up" : "Already have an account? Login"
            }</button>
        
        </>
    )
}
export default Login;