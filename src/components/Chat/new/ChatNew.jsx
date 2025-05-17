import { useState } from "react";

const categories = [
    {
      title: "Use case scenarios category",
      description:
        "Lorem ipsum dolor description area. Consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: "/images/Chat/sparkles.svg",
    },
    {
      title: "Reverse Transaction Category",
      description:
        "Lorem ipsum dolor description area. Consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: "/images/Chat/sparkles.svg",
    },
    {
      title: "Standards Enhancement",
      description:
        "Lorem ipsum dolor description area. Consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: "/images/Chat/sparkles.svg",
    },
    {
      title: "Teams Own Category",
      description:
        "Lorem ipsum dolor description area. Consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: "/images/Chat/sparkles.svg",
    },
]

export default function ChatNew() {
    const [activeCategory, setActiveCategory] = useState(0);
    return (
        <>
        {/* Greeting */}
        <div className="mb-8">
          <p className="text-3xl mb-2 font-extrabold">👋 Hi Nibras!</p>
          <h2 className="text-5xl mt-4 font-semibold text-gray-800">
            What do you want to
            <br /> work on today?
          </h2>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              onClick={() => {
                setActiveCategory(index)
              }}
              key={index}
              className={`relative shadow-lg rounded-2xl hover:bg-[#ebf6ef] hover:border-green-500 transition-all cursor-pointer group px-8 py-10 border-2 flex flex-col gap-3 ${
                activeCategory === index ? "bg-[#ebf6ef] border-green-500" : "bg-[#f8fefa] border-gray-200"
              }`}
            >
              <div className="h-full w-full bg-[url('/images/Chat/stars.svg')] bg-no-repeat bg-cover absolute inset-0 opacity-5"></div>
              <div
                className={`w-16 h-16 rounded-full flex items-center border-2 justify-center ${
                  activeCategory === index ? "bg-green-500" : "bg-gray-400 border-[#e9efff] group-hover:bg-green-500"
                } transition-all`}
              >
                <img src={"/images/Chat/sparkles.svg"} alt="Category Icon" className="w-10 h-10" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">{category.title}</h3>
                <p className="gap-4">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    )
}
