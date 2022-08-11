import { MenuAlt4Icon } from "@heroicons/react/solid";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Tapass } from "../components/icons/Tapass";

export function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const toggleMobileNav = () => setShowMobileNav(p => !p)

  return (
    <div className="">
      <div className="px-4 sm:px-6 md:px-10 py-4 flex justify-between items-center">
        {/* logo */}
        <Tapass />

        {/* nav links */}
        <ul className="hidden lg:flex space-x-16 xl:space-x-24 text-sm">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">About Us</NavLink>
          <NavLink href="/">The Problem</NavLink>
          <NavLink href="/">Products</NavLink>
        </ul>

        <div className="flex space-x-4">
          {/* cta buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-10 py-1.5 border border-product-deepBlue text-product-deepBlue text-xs font-semibold rounded-full hover:bg-product-deepBlue hover:text-white">Login</button>
            <button className="px-10 py-1.5 border border-product-deepBlue bg-product-deepBlue text-white text-xs font-semibold rounded-full">Sign Up</button>
          </div>

          {/* mobile nav button */}
          <button onClick={toggleMobileNav} className="block lg:hidden px-1.5 py-1.5 bg-product-deepBlue text-white rounded-full">
            <MenuAlt4Icon className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* mobile nav links */}
      {showMobileNav && (
        <motion.ul
          className="lg:hidden py-8 flex flex-col items-center space-y-8 font-semibold"
          initial="initial"
          animate="animate"
          variants={mobileNavVariant}
        >
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/">About Us</MobileNavLink>
          <MobileNavLink href="/">The Problem</MobileNavLink>
          <MobileNavLink href="/">Products</MobileNavLink>
        </motion.ul>
      )}
    </div>
  )
}

type NavLinkProps = {
  href: string,
  children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <li>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  )
}

const mobileNavVariant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
}

const mobileNavLinksVariant: Variants = {
  initial: {
    x: -300
  },
  animate: {
    x: 0
  }
}

function MobileNavLink({ href, children }: NavLinkProps) {
  return (
    <motion.li
      variants={mobileNavLinksVariant}
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </motion.li>
  )
}