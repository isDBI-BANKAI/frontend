import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {

  const footerTop = [
    {
      title: "A propos",
      items: [
        { name: "Qui sommes-nous ?", path: "/about" },
        { name: "Notre équipe", path: "/team" },
        { name: "Nos valeurs", path: "/values" },
      ]
    },
    {
      title: "Nos services",
      items: [
        { name: "Développement", path: "/services/development" },
        { name: "Design", path: "/services/design" },
        { name: "Marketing", path: "/services/marketing" },
      ]
    },
    {
      title: "Contact",
      items: [
        { name: "Nous contacter", path: "/contact" },
        { name: "Support", path: "/support" },
        { name: "FAQ", path: "/faq" },
      ]
    }
  ]

  const footerBottom = [
    "© 2025 lumos.ai 1.0",
    "Conditions d’utilisation",
    "Politique de confidentialité",
  ];

  const socialLinks = [
    { name: "Facebook", path: "https://www.facebook.com", icon: <FaFacebookF className="size-9" /> },
    { name: "Twitter", path: "https://www.twitter.com", icon: <FaTwitter className="size-9" /> },
    { name: "LinkedIn", path: "https://www.linkedin.com", icon: <FaLinkedinIn className="size-9" /> },
    { name: "Instagram", path: "https://www.instagram.com", icon: <FaInstagram className="size-9" /> },
    { name: "GitHub", path: "https://www.github.com", icon: <FaGithub className="size-9" /> },
  ];

  return (
    <footer className="bg-black flex flex-col items-center justify-center text-white w-full text-xl gap-10 px-20">
      <div className="flex items-center justify-between px-10 py-6 w-full">
        <div className="flex items-center gap-2 text-2xl">
          <img src="/Logo.svg" alt="Icon" className="h-20 w-20" />
          <span className="font-bold">Lumos.ai</span>
        </div>
        <div className="flex gap-20">
          {
            footerTop.map((item, index) => (
              <div key={index} className="flex flex-col gap-5">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <ul className="flex flex-col gap-3">
                  {
                    item.items.map((link, index) => (
                      <li key={index} className="text-lg">
                        <Link to={link.path} className="hover:opacity-80 transition-all">
                          {link.name}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex items-center justify-end px-10 gap-6 w-full">
        {
          socialLinks.map((link, index) => (
            <Link key={index} to={link.path} className="text-white hover:opacity-80 transition-all">
              {link.icon}
            </Link>
          ))
        }
      </div>
      <div className="w-full h-[0.5px] bg-white" />
      <div className="flex justify-between items-center px-10 pb-6 w-full">
        {
          footerBottom.map((item, index) => (
            <p key={index} className="text-white">
              {item}
            </p>
          ))
        }
      </div>
    </footer>
  )
}
