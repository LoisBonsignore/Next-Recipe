import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/favicon.ico" width={75} height={75} />
      </div>
      <div className="Links-container">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/recipe-detail">
          <a>Search a recipe</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
