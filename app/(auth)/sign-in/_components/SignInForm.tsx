'use client';

import Button from '@/components/ui/Button';
import { axiosPost } from '@/libs/axiosPost';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [formData, setFormData] = useState<SignInFormData>({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsLoading(true);
      const data = await axiosPost('/api/auth/login', formData);

      if (data) {
        setIsLoading(false);
        setFormData({
          email: '',
          password: '',
        });
        toast.success('Login successfull.');
        router.push('/');
      } else {
        setIsLoading(false);
      }
    },
    [formData, router]
  );

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-1.5'>
        <h2>Welcome back!</h2>
        <p className='text-black/50'>Please login to your account</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex w-full flex-col gap-5 text-lg'
      >
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='email' className='cursor-pointer'>
            Email address
          </label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type='email'
            id='email'
            placeholder='hello@example.com'
            className='eoq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='password' className='cursor-pointer'>
            Password
          </label>
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type='password'
            id='password'
            placeholder='Write your password'
            className='eoq w-full rounded-xl border border-gray bg-transparent px-5 py-5 outline-none focus:border-blue'
          />
        </div>

        <Button variant='secondary' type='submit' isLoading={isLoading}>
          Login
        </Button>

        <p>
          <span className='text-black/50'>Do not have an account?</span>{' '}
          <Link href='/sign-up' className='link-item'>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
