


export const validateUserLoginForm = (values) => {
   const errors={}

   if (!values.username && !values.password) {
      errors.username='REQUIRED'
      errors.password='REQUIRED'
   }

  


   // userName regular expression


   // reg expression is only letters and dosent pass

   const userReg = /^[0-9\t\s!@#\$%^&*().`/';":}{+_]/;


  
   if (userReg.test(values.username)) {
      errors.username='Must start with a letter'
   }


   const regExp2=/[.?"':;,`><)(*&^%$#@!}{|\/\\\[\]]/

   if (regExp2.test(values.username)) {
      errors.username='Invalid input, characters like . ? " : ; ` > < ) ( * & ^ % $ # @ ! } { | \ / ] [ are not allowed, please remove them and try again'
   }


   if (values.username.length > 6) {
      errors.username='Error: username must be 6 characters or less.'
   }



   // now we validate the password

   if (regExp2.test(values.password)) {
      errors.password='Invalid symbols or icons'
   }


   if (values.password.length > 12) {
      errors.password='Error: username must be 12 characters or less.'
   }
   return errors
}
