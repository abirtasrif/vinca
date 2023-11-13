import SignUpForm from './SignUpForm';
import SignUpPicture from './SignUpPicture';

const SignUp = () => {
  return (
    <section className='sp container grid h-[calc(100vh-5rem)] grid-cols-2 items-center gap-20'>
      <SignUpPicture />
      <SignUpForm />
    </section>
  );
};

export default SignUp;
