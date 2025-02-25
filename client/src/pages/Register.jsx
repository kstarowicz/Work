
import { Form, redirect, Link} from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo, SubmitBtn } from '../components/';
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
  //const navigation = useNavigation();
  //const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
        <Form method='post' className='form'>
        <Logo />
        <h4>Register</h4>

        <FormRow 
        type='text' 
        name='name' 
        
        />
        <FormRow 
        type='text' 
        labelText='last name'
        name='lastName' 
        />
        <FormRow 
        type='text' 
        name='location' 
        
        />
        <FormRow 
        type='email' 
        name='email' 
        
        />
        <FormRow 
        type='password' 
        name='password' 
        />
        <SubmitBtn/>
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
        // <button type='submit' className='btn btn-block' disabled={isSubmitting}>
        //   { isSubmitting ? 'submitting...' : 'submit' }
        // </button>