// import { validateYupSchema } from "formik";


export const validateContactForm = (values) => {
   const errors = {};

   if (!values.firstName) {
      errors.firstName='REQUIRED'
   } else if (values.firstName.length < 2) {
      errors.firstName='MUST be a valid name(* no abbreviations *)'
   } else if (values.firstName.length > 15) {
      errors.firstName='Must be no more than 15 charecters' 
   }


   // last name validation



   if (!values.lastName) {
      errors.lastName='REQUIRED'
   } else if (values.lastName.length < 2) {
      errors.lastName='MUST be a valid last name(* no abbreviations *)'
   } else if (values.lastName.length > 15) {
      errors.lastName='Must be no more than 15 charecters' 
   }








   //  numTypes in phone 
   
   
   if (
      values.phoneNum.length === 1 ||
      values.phoneNum.length === 2 ||
      values.phoneNum.length === 3 ||
      values.phoneNum.length === 4 ||
      values.phoneNum.length === 5 ||
      values.phoneNum.length === 6 ||
      values.phoneNum.length === 7 ||
      values.phoneNum.length === 8 ||
      values.phoneNum.length === 9 ||
      values.phoneNum.length === 10
   ) {
      errors.phoneNum='Invalid'
}

// chedcking if the phone input is omnly numbers
   const reg = /^\d+$/
   
   if (!reg.test(values.phoneNum)) {
      errors.phoneNum='Phone number must only contain numbers.'
   }

   if (!values.phoneNum) {
      errors.phoneNum='Phone number must be entered'

   }


   

   

   // const regPhoneNum = /^1()/
   
   // if (regPhoneNum.test(values.phoneNum)) {
   //    errors.phoneNum='Value 1() in the beginning not allowed'

   // }


   if (!values.email.includes('@')) {
      errors.email='Invalid email address. Email must contain an @ symbol'
   }






   return errors

}


   





