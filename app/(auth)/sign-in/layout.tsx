import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vinca | Sign-In',
};

const SignInLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default SignInLayout;
