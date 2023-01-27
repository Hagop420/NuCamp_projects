import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import {validateContactForm} from '../../../utilities/validateContactForm'





  

 


const ContactForm = () => {
   // to reset the formik form field always use the resetForm function
   const handleSubmit = (values, { resetForm }) => {
      console.log('Form values:', values )
      console.log(`Form values in JSON format: ${JSON.stringify(values)}`);
      resetForm()
   }


   return (
      <Formik initialValues={{
         firstName:'',
         lastName:'',
         phoneNum:'',
         email: '',
         agree: false,
         contactType: 'By Phone',
         feedback:''
      }}
         onSubmit={handleSubmit}
         validate={validateContactForm}
      >
         <Form>


            <FormGroup row>
               <Label htmlFor='firstName' md='2'>
                  First Name
               </Label>
               <Col md='10'>
                  <Field
                     style={{ fontStyle: 'italic' }} 
                     name='firstName'
                     placeholder='First Name'
                     className='form-control' />
                  <ErrorMessage name='firstName'>
                     {(msg) => <span className='text-danger'>{msg}</span>}
                  </ErrorMessage>

                  
               </Col>
            </FormGroup>
            

            <FormGroup row>
               {/* the htmlFor is like the for attribute in html */}
               <Label htmlFor='lastName' md='2'>
                  Last Name
               </Label>
               <Col md='10'>
                  <Field
                     style={{ fontStyle: 'italic' }} 
                     name='lastName'
                     placeholder='Last Name'
                     className='form-control' />
                     
                  {/* if mistake */}
                  <ErrorMessage name='lastName'>
                     {(msg) => <span className='text-danger'>{msg}</span>}
                  </ErrorMessage>
                     
               </Col>
            </FormGroup>
            

            <FormGroup row>
               <Label htmlFor='phoneNum' md='2'>
                  Phone
               </Label>
               <Col md='10'>
                  <Field
                     style={{ fontStyle: 'italic' }} 
                     as='input'
                     type='tel'
                     name='phoneNum'
                     placeholder='Phone'
                     className='form-control' />
                       {/* if mistake */}
                  <ErrorMessage name='phoneNum'>
                     {(msg) => <span className='text-danger'>{msg}</span>}
                  </ErrorMessage>
               </Col>
            </FormGroup>
            

            <FormGroup row>
               <Label htmlFor='email' md='2'>
                  Email
               </Label>
               <Col md='10'>
                  <Field
                     style={{ fontStyle: 'italic' }} 
                     name='email'
                     type='email'
                     placeholder='sample@gmail.com'
                     className='form-control' />
                     
                       {/* if mistake */}
                  <ErrorMessage name='email'>
                     {(msg) => <span className='text-danger'>{msg}</span>}
                  </ErrorMessage>
               </Col>
            </FormGroup>
            

            <FormGroup row>
               
               <Label check md={{ size: 4, offset:2}}>
                  <Field type='checkbox' className='form-check-input' name='agree'  />{' '}
                  
               May we contact you?
               </Label>

               <Col md='4'>
                  <Field
                     style={{ color: 'rgb(115, 144, 180)' }} 
                     className='border-info form-control'
                     as='select'
                     name='contactType'
                     
                  >



                     
                     
                     <option value="By Phone">By Phone</option>
                     <option value="By Email">By Email</option>
                     
                     </Field>
                     
                     
               </Col>
            </FormGroup>
            

            <FormGroup row>
               <Label htmlFor='feedback' md='2'>
                  Your Feedback<br />(<span style={{ fontStyle: 'italic', color:'grey' }}>optional</span>)
               </Label>
               <Col md='10'>
                  <Field
                     style={{ fontStyle: 'italic' }} 
                     name='feedback'
                     rows='12'
                     as='textarea'
                     placeholder='Additional Comments ...'
                     className='form-control' />
                     


                    
               </Col>
            </FormGroup>
            

            <FormGroup row>
               {/* button for form submission */}

               <Col md={{size:10, offset: 2 }}>
                  <Button type='submit' color='info'>
                     <span className='text-dark'>Submit</span>
                  </Button>
               </Col>
          </FormGroup>


        </Form>
      </Formik>
   )
}




 export default ContactForm