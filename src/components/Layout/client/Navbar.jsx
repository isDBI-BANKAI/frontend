import { Link } from "react-router-dom";

export default function Navbar() {

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" }
  ];

  const authLinks = [
    { name: "Sign in", path: "/auth" },
    { name: "Sign up", path: "/auth" }
  ]

  return (
    <header className="bg-transparent flex items-center text-xl justify-between w-full px-10 py-6 ">
      <div className="flex items-center gap-10">
        <Link to='/'>
          <img src="/images/Home/icon.svg" alt="Icon" />
        </Link>
        <nav>
          <ul>
            {
              navLinks.map((link, index) => (
                <li key={index} className="inline-block mx-4">
                  <Link to={link.path} className="text-white hover:opacity-80 transition-all">
                    {link.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
      <ul>
        {
          authLinks.map((link, index) => (
            <li key={index} className="inline-block mx-4">
              <Link to={link.path} className={`text-white hover:opacity-80 transition-all ${index === 1 && 'border border-white px-6 py-2 rounded-xl'}`}>
                {link.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </header>
  )
}
