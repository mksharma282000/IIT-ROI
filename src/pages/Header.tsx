import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [{ name: "About", href: "/about" }];
  const menuItems = [
    { name: "Increased Productivity", href: "/increased-productivity" },
    { name: "Reduced Reliance", href: "/reduced-reliance" },
    { name: "Increased Conversion", href: "/increased-conversion" },
    { name: "Reduced Cost", href: "/reduced-cost" },
    { name: "Decreased Dropoff", href: "/decreased-dropoff" },
    { name: "Reduced Learning", href: "/reduced-learning" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <a onClick={() => navigate("/")} className="cursor-pointer">
          <img className="md:w-[70px] md:h-[50px]" src={logo} alt="home" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => navigate(link.href)}
              className="text-sm uppercase hover:text-orange-500 transition"
            >
              {link.name}
            </button>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center">
                RESOURCES
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60 mt-2 shadow-2xl">
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.name}>
                  <button
                    onClick={() => navigate(item.href)}
                    className="text-left w-full"
                  >
                    {item.name}
                  </button>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setIsMenuOpen(false);
                navigate(link.href);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-800"
            >
              {link.name}
            </button>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-full flex justify-between px-4 py-2">
                Resources
                <ChevronDown />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.name}>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate(item.href);
                    }}
                    className="w-full text-left"
                  >
                    {item.name}
                  </button>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </header>
  );
};

export default Header;
