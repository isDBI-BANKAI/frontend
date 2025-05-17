import { RiPhoneFill, RiMailFill, RiMapPin2Fill } from "react-icons/ri";

export default function Contact() {
  const contactData = [
    {
      icon: <RiPhoneFill className="text-mainColor-dark size-9" />,
      title: "Appelez-nous",
      description: "+213 123 456 789",
    },
    {
      icon: <RiMailFill className="text-mainColor-dark size-9" />,
      title: "Envoyez-nous un email",
      description: "contact@isdbi.com",
    },
    {
      icon: <RiMapPin2Fill className="text-mainColor-dark size-9" />,
      title: "Visitez-nous",
      description: "123 Rue Exemple, Alger, Algérie",
    },
  ];

  return (
    <section className="flex items-center flex-col justify-center w-full gap-5 my-20 text-black">
      <h2 className="font-bold text-5xl text-mainColor">NOUS SOMMES À</h2>
      <h4 className="font-bold text-5xl">VOTRE ÉCOUTE</h4>
      <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, temporibus. etur adipisicing elit. Sunt, temporibus.</p>
      <div className="w-[80%] mt-5">
        <div className="grid grid-cols-3 gap-6">
          {contactData.map((item, index) => (
            <div key={index} className="shadow-lg rounded-2xl hover:bg-[#ebf6ef] hover:border-mainColor transition-all cursor-pointer group px-8 py-10 border flex flex-col gap-3 border-grayer">
              <div className="w-16 h-16 bg-grayer group-hover:bg-white transition-all rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
