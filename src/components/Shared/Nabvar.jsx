"use client";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Button,
} from "../../app/MTailwind";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBasketOutlined } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";

const Nabvar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const session = useSession();
  console.log(session);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="lg"
        color="white"
        className="p-1 font-normal"
      >
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lg"
        color="white"
        className="p-1 font-normal"
      >
        <Link href="/contactsus" className="flex items-center">
          Contacts Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lg"
        color="white"
        className="p-1 font-normal"
      >
        <Link href="/dashboard" className="flex items-center">
          Dashboard
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lg"
        color="white"
        className="p-1 font-normal"
      >
        <Link href="/our-menu" className="flex items-center">
          Our Menu
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lg"
        color="white"
        className="p-1 font-normal"
      >
        <Link href="/our-shop" className="flex items-center">
          Our Shop
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lg"
        color="white"
        className="p-1 font-normal"
      >
        <Link href="/contact" className="flex items-center">
          <Image
            src="/assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png"
            alt="logo"
            width={40}
            height={40}
            style={{ borderRadius: 48 }}
          />
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="max-w-7xl mx-auto z-10 w-[1280px] mt-8 ml-[120px] mb-8 absolute ">
      <Navbar className=" bg-[#151515] h-[120px] max-w-full rounded-none px-4 lg:px-8 py-auto border-none">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center justify-center font-extrabold gap-4">
            <Image
              src="/assets/rea2.avif"
              alt="logo"
              width={50}
              height={20}
              style={{ borderRadius: 48 }}
            />
            <div className="flex flex-col items-center justify-center">
              <h2>
                <span className="text-white text-xl md:text-2xl uppercase">Restro</span>
                <span className="text-red-900 text-xl md:text-2xl uppercase">Hub</span>
              </h2>
              <h2 className="text-yellow-900 text-sm md:text-base font-extrabold uppercase">
                Restaurant
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-24">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-3">
              {session.data ? (
                <button onClick={() => signOut()}>
                  <span>Log Out</span>
                </button>
              ) : (
                <Link href="/login">
                  <button>
                    <span>Log In</span>
                  </button>
                </Link>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="red"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button variant="contained" size="md" color="red" className="">
              <span>Log In</span>
            </Button>
            <Button variant="contained" color="red" size="md" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};
export default Nabvar;
