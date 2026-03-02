import { Facebook, Instagram, Linkedin } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* About */}
        <div>
          <h3 className="text-white font-bold text-xl mb-6">Panksh Care</h3>
          <p className="text-sm leading-relaxed">
            Early Learning & Intervention School integrating structured
            education with therapeutic understanding to build confident,
            school-ready children.
          </p>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-white font-semibold mb-6">Programs</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">
              Early Intervention
            </li>
            <li className="hover:text-white cursor-pointer transition">
              School Readiness
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Therapy Services
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Day Care
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-6">Support</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">
              Parent Coaching
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Academic Support (NIOS)
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Franchise Partnership
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-6">Connect</h4>
          <div className="flex gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-teal-600 transition cursor-pointer">
              <Facebook className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-teal-600 transition cursor-pointer">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-teal-600 transition cursor-pointer">
              <Linkedin className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Panksh Care. All rights reserved. Built
        with structure, purpose, and care.
      </div>
    </footer>
  );
}

export default Footer;
