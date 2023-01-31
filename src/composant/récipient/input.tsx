import React from react


type Email Props = {
 email : string ;
 password : string | number ;

}

const InputFormulaire = () => {
return (
<input type="email" >{email}</input>
<input type="email" >{password}</input>
<button submit="">Connexion</button>

) 
}

export default InputFormulaire; 
