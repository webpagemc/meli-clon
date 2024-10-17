//react
import { useState } from "react";

//components
import LargeButton from "../buttons/largeButton.jsx";

const LoginForm = () => {

    const [ emailState, setEmailState ] = useState(null);
    const [ passwordState, setPasswordState ] = useState(null);

    const handleEmailState = (event) => {
        setEmailState(event.target.value)
    };

    const handlePasswordState = (event) => {
        setPasswordState(event.target.value)
    };

    const handleSendData = (event) => {

        try {

            event.preventDefault();

            if(!emailState.includes(["@"])){ throw new Error("Che esto no es un mail")};
            if(!passwordState){ throw new Error("Che, llena el password")}
    
            const body = {
                email:emailState,
                password: passwordState
            };

            console.log(body)

            
        } catch (error) { 
            alert( error.message );
        }

    };

    return(

        <form>
                <input type="text" placeholder="Email" value={emailState} onChange={handleEmailState} />
                <input type="password" placeholder="Password" value={passwordState} onChange={handlePasswordState} />

                <LargeButton
                text={"Login"}
                action={handleSendData}
                />
                
        </form>

    )

};

export default LoginForm;