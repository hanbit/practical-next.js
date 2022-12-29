import Link from 'next/link';

function Navbar() {
  const totalItemsAmount = 0; /* To be implemented */

  return (
    <div className="w-full bg-purple-600 p-4 text-white">
      <div className="w-9/12 m-auto flex justify-between">
        <div className="font-bold">
          <Link href="/" passHref>
            My e-commerce
          </Link>
        </div>
        <div className="font-bold underline">
          <Link href="/cart" passHref>
            {totalItemsAmount} items in cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
