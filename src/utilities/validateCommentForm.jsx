// import { validateYupSchema } from "formik";

export const validateCommentForm = (values) => {
   const errors={}


   if (!values.rating) {
      errors.rating='Rating field cannot be blank'
   }

   if (values.author.length < 2) {
      errors.author='Must be at least 2 characters.'
   }

   if (values.author.length > 15) {
      errors.author='Must be less than 15 charecters'
   }


   // reg expression below

   const regAuthor = /^[a-zA-Z]+$/
   const regExp = /^[a-zA-Z ]*$/
   if (!regAuthor.test(values.author)) {
      errors.author='This field accepts letters only'
   }

   if (!regExp.test(values.commentText)) {
      errors.commentText='Error: Input contains invalid characters. Please ensure that your input only contains letters and spaces, as symbols and special characters are not allowed. Please re-submit your input with only valid characters and try again'
   }

   // end reg test



   if (values.commentText === '') {
      errors.commentText = 'REQUIRED FIELD'
   }

   if (values.commentText.length > 20) {
      errors.commentText = 'Error: Input exceeds maximum word limit of 20. Please ensure your input contains no more than 20 words, as this is the maximum limit allowed. Double check your input and try again. If you continue to experience this error, please contact technical support for assistance'
   }

   return errors
}