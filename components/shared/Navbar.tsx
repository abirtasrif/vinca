import Link from "next/link";
import { buttonVariants } from "../ui/Button";
const Navbar = () => {
  return (
    <header className="h-20 border-b border-gray flex item-center bg-white">
      <div className="wrapper grid grid-cols-3 gap-20 items-center">
        {/* LEFT NAV */}
        <nav>
          <ul className="flex gap-3 justify-end">
            <li>
              <Link href="/" className="link-item">
                Link 1
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link 2
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link 3
              </Link>
            </li>
          </ul>
        </nav>

        {/* NAV MID */}
        <nav>
          <ul className="flex justify-center">
            <li>
              <Link href="/" className="lowercase text-4xl font-bold text-pink">
                Vinca
              </Link>
            </li>
          </ul>
        </nav>

        {/* RIGHT NAV  */}
        <nav>
          <ul className="flex gap-3 justify-end">
            <li>
              <Link href="/" className="link-item">
                Link 4
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link 5
              </Link>
            </li>
            <li>
              <Link
                href="/user/signin"
                className={buttonVariants({ variant: "ocean" })}
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
