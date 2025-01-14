import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black shadow-lg text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">ROI Calculator</h3>
            <p className=" text-sm">
              Make informed decisions with our comprehensive ROI calculation tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className=" hover:text-white transition-colors">About</a></li>
              <li><a href="#" className=" hover:text-white transition-colors">Features</a></li>
              {/* <li><a href="#" className="text-[#8E9196] hover:text-white transition-colors">Pricing</a></li> */}
              <li><a href="#" className=" hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="bg-transparent border-[#8E9196] hover:bg-[#D6BCFA] hover:text-[#1A1F2C]">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent border-[#8E9196] hover:bg-[#D6BCFA] hover:text-[#1A1F2C]">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent border-[#8E9196] hover:bg-[#D6BCFA] hover:text-[#1A1F2C]">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#8E9196] text-center text-[#8E9196] text-sm">
          <p>&copy; {new Date().getFullYear()} IIT ROI Cal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;