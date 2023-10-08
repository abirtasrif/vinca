import Link from 'next/link';
import { buttonVariants } from '../../ui/Button';

const Navbar = async () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-50 flex h-20 w-full items-center border-b border-gray bg-white/80 backdrop-blur-lg'>
      <div className='wrapper container grid grid-cols-3 items-center gap-20'>
        {/* LEFT NAV */}
        <nav>
          <ul className='flex content-start gap-3'>
            <li>
              <Link href='/#packages' className='link-item'>
                Packages
              </Link>
            </li>
            <li>
              <Link href='#products' className='link-item'>
                Products
              </Link>
            </li>
            <li>
              <Link href='/' className='link-item'>
                Link 3
              </Link>
            </li>
          </ul>
        </nav>

        {/* NAV MID */}
        <nav>
          <ul className='flex justify-center'>
            <li>
              <Link
                href='/'
                className='text-4xl font-bold lowercase text-green'
              >
                Vinca
              </Link>
            </li>
          </ul>
        </nav>

        {/* RIGHT NAV  */}
        <nav>
          <ul className='flex items-center justify-end gap-3'>
            <li>
              <Link href='/' className='link-item'>
                Link 4
              </Link>
            </li>
            <li>
              <Link href='/' className='link-item'>
                Link 5
              </Link>
            </li>
            <li>
              <Link
                href='/sign-in'
                className={buttonVariants({ variant: 'ocean' })}
              >
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
