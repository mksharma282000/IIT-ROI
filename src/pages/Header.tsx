import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ROILogo from "../assets/logo.png";
import { FiArrowDown } from "react-icons/fi";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { FiArrowDownRight } from "react-icons/fi";
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
    {
      name: "Increased Productivity",
      href: "/increased-productivity",
      subtitle:
        " It shows how much the result of the problem would change if a new variable was added to the solution.",
      logo: <BsGraphUpArrow size={30} />,
    },
    {
      name: "Reduced Reliance",
      href: "/reduced-reliance",
      subtitle:
        "Reduced reliance means depending less on something or someone.",
      logo: <BsGraphDownArrow size={30} />,
    },
    {
      name: "Increased Conversion",
      href: "/increased-conversion",
      subtitle:
        "Increased conversion means turning more visitors or leads into actual customers or desired actions.",
      logo: <VscGraph size={30} />,
    },
    {
      name: "Reduced Cost",
      href: "/reduced-cost",
      subtitle: "Reduced cost means spending less money to achieve something.",
      logo: <FiArrowDown size={30} />,
    },
    {
      name: "Decreased Dropoff",
      href: "/decreased-dropoff",
      subtitle:
        "Decreased dropoff means fewer people quitting or leaving before completing a process or action.",
      logo: <FiArrowDownRight size={30} />,
    },
    {
      name: "Reduced Learning",
      href: "/reduced-learning",
      subtitle:
        "Reduced learning means learning less or struggling to understand something.",
      logo: <FiArrowDown size={30} />,
    },
  ];
  const Language = [
    {
      name: "English",
    },
    {
      name: "French",
    },
    {
      name: "Hindi",
    },
    { name: "Spanish" },
  ];

  return (
    <header className="sticky top-0 z-30  bg-gray-50">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 overflow-visible">
        {/* Logo */}
        <a onClick={() => navigate("/")} className="cursor-pointer flex">
          {/* <img className="h-40 mt-20 w-auto" src={ROILogo} alt="Home" /> */}
          <div className="font-bold text-xl">ROI CAL</div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 bg-slate-700 rounded-full px-6 py-2 text-white">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => navigate(link.href)}
              className="text-sm font-medium  hover:text-orange-500 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-sm font-medium  hover:text-orange-500 transition-colors">
                Resources
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 bg-gray-50 rounded-lg shadow-2xl">
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.name}>
                  <button
                    onClick={() => navigate(item.href)}
                    className="flex items-center gap-2 p-1 rounded-md border hover:border-orange-500 hover:bg-orange-50 transition-all"
                  >
                    <div className="flex flex-col flex-grow">
                      <span className="text-base font-semibold text-gray-800">
                        {item.name}
                      </span>
                      <span className="w-96 text-xs text-gray-600">
                        {item.subtitle}
                      </span>
                    </div>
                    <div className="text-orange-500">{item.logo}</div>
                  </button>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden md:block text-gray-700 font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
                Language
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-24 mt-0 bg-white rounded-lg shadow-lg">
              {Language.map((item) => (
                <DropdownMenuItem key={item.name}>
                  <div>{item.name}</div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setIsMenuOpen(false);
                navigate(link.href);
              }}
              className="block w-full text-left px-4 py-3 text-sm font-medium hover:bg-gray-700"
            >
              {link.name}
            </button>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-full flex justify-between px-4 py-3 text-sm font-medium hover:bg-gray-700">
                Resources
                <ChevronDown className="text-white" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800">
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.name}>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate(item.href);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
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
