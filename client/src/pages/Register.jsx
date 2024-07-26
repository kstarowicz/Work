
import { Form, redirect, useNavigation, Link} from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components/';
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify';


 export const action = async ({ request }) => {
   const formData = await request.formData();
   const data = Object.fromEntries(formData);

   try {
     await customFetch.post('/auth/register', data);
     toast.success('Registration successful');
      return redirect('/login');
   } catch (error) {
     toast.error(error?.response?.data?.msg);
     return error;
   }
 };

const Register = () => {
  return (
    <Wrapper>
        <Form method='post' className='form'>
        <Logo />
        <h4>Register</h4>

        <FormRow 
        type='text' 
        name='name' 
        defaultValue='karolina'
        />
        <FormRow 
        type='text' 
        labelText='last name'
        name='lastName' 
        defaultValue='str'
        />
        <FormRow 
        type='text' 
        name='location' 
        defaultValue='earth'
        />
        <FormRow 
        type='email' 
        name='email' 
        defaultValue='karolina@karolina.com'
        />
        <FormRow 
        type='password' 
        name='password' 
        defaultValue='secret123'/>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Register