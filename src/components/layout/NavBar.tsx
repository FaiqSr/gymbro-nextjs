import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <section className="flex lg:hidden fixed w-full bottom-0 border-t-2 px-3 py-4">
        <nav>
          <ul>
            <li>
              <Link href={`/`}>Test</Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
