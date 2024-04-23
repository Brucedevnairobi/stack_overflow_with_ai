import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow"
        />
        <p>Dev <span>Overflow</span></p>
      </Link>
      GlobalSearch
      <div>
        Theme
        <SignedIn>
          <UserButton 
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: 'h-10 w-10'
            },
            variables: {
              colorPrimary: '#ff7000'
            }
          }}
          />  
        </SignedIn>
        MobileNav

      </div>
    </nav>
  );
};

export default Navbar;
