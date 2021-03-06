export const validateNewPassword = (pass1, pass2) => {

 	  if(pass1 !== pass2){
 	  	 return {validate: false, message: 'пароли не совпадают'} 	  	
 	  } 
 	  if(pass1.length < 8) {
 	  	return {
 	  		validate: false,
 	  		message: 'длина пароля не должна быть меньше 8 символов'
 	  	}	
 	  } 

 	  if(pass1.search(/[a-z]/i) < 0) {
			return {
				validate: false,
				message: 'пароль дожен содержать хотя бы одну букву'
			}
		} 

 	  if(pass1.search(/[0-9]/i) < 0) {
			return {
				validate: false,
				message: 'пароль дожен содержать хотя бы одну цифру'
			}
		} 

		return {
			validate: true,
			message: 'password ok',
		}
 }


export const  getParameters = () => {
  	const  query = window.location.search.substring(1);
  	const vars = query.split("&")
  	let result = {}
  	vars.map( item => {
  		let objitem = item.split("="); 
  		result[objitem[0]] = objitem[1]
  	})
    return result;
  }