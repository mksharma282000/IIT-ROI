import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  const menuItems = [
    { name: "Increased Productivity", href: "/increased-productivity" },
    { name: "Reduced Reliance", href: "/reduced-reliance" },
    { name: "Increased Conversion", href: "/increased-conversion" },
    { name: "Reduced Cost", href: "/reduced-cost" },
    { name: "Decreased Dropoff", href: "/decreased-dropoff" },
    { name: "Reduced Learning", href: "/reduced-learning" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg text-white overflow-hidden">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="text-xl font-bold tracking-wide text-white">
          ROI Cal
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 ">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase hover:text-orange-500 transition duration-300"
            >
              {link.name}
            </a>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="hidden md:flex items-center border-none
                text-sm uppercase hover:text-orange-500 transition duration-300"
              >
                RESOURCES
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="w-60 mt-2 shadow-2xl "
            >
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.name} className="cursor-pointer">
                  <a
                    href={item.href}
                    className="hover:text-indigo-800 transition-colors duration-200 font-barlow from-neutral-500 "
                  >
                    {item.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <a
          className="text-base font-semibold uppercase text-orange-500 hover:text-white transition duration-300"
          href="/Contact"
        >
          Contact
        </a>

        {/* Dropdown and Mobile Menu */}
        <div className="md:hidden items-center space-x-4">
          {/* Dropdown Menu */}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden h-screen py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-2 hover:bg-indigo-600 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="px-4 py-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="w-full flex items-center justify-between border-none
                text-sm uppercase hover:text-orange-500 transition duration-300"
                >
                  Resources
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                {menuItems.map((item) => (
                  <DropdownMenuItem key={item.name}>
                    <a href={item.href} className="block w-full">
                      {item.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
