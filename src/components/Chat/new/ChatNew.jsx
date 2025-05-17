import { AudioLines, FileMinus, Grip, Scale } from "lucide-react";
import { useState } from "react";
import ManualEntry from "./ManualEntry";
import { toast } from "react-toastify";


export default function ChatNew({
  setActiveCategory,
  setActiveCategoryOption,
  activeCategory,
  activeCategoryOption,
  setInputText,
  setFiles,
  isManualEntry,
  setManualEntry
}) {
  const categories = [
    {
      title: "Use case scenarios category",
      description:
        "Lorem ipsum dolor description area. Consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: "/images/Chat/sparkles.svg",
      options: []
    },
    {
      title: "Reverse Transaction Category",
      description:
        "Lorem ipsum dolor description area. Consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: "/images/Chat/sparkles.svg",
      options: [
        {
          content: "Text Entry",
          icon: <FileMinus />,
          onClick: () => {
            setManualEntry(false);
          }
        },
        {
          content: "Manual Entry",
          icon: <Grip />,
          onClick: () => {
            setManualEntry((prev) => !prev);
          }
        },
        {
          content: "Voice/Text Query",
          icon: <AudioLines />,
          onClick: () => {
            setManualEntry(false);
          }
        },
      ]
    },
    {
      title: "Standards Enhancement",
      description:
        "Lorem ipsum dolor description area. Consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: "/images/Chat/sparkles.svg",
      options: [
        {
          content: "FAS 7",
          icon: <Scale />
        },
        {
          content: "FAS 28",
          icon: <Scale />
        },
      ]
    },
    {
      title: "Teams Own Category",
      description:
        "Lorem ipsum dolor description area. Consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: "/images/Chat/sparkles.svg",
      options: []
    },
  ]

  const [manualEntryData, setManualEntryData] = useState({
    amount: "",
    date: "",
    parties: "",
    journal: "",
  });
  const [manualEntryLoading, setManualEntryLoading] = useState(false);
  const handleManualEntryData = async (e) => {
    setManualEntryLoading(true);
    try {
        // Replace with your actual API call
        // const response = await fetch('/api/chat/history');
        // const data = await response.json();
        // Do something with data
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success("Manual entry data submitted successfully");
    } catch (error) {
        // Handle error if needed
        toast.error("Failed to fetch user history");
    } finally {
      setManualEntryLoading(false);
      setManualEntryData({
        amount: "",
        date: "",
        parties: "",
        journal: "",
      });
    }
  }
  return (
      <>
      {/* Greeting */}
      <div className="mb-8">
        <p className="text-3xl mb-2 font-extrabold">👋 Hi Okba!</p>
        <h2 className="text-5xl mt-4 font-semibold text-gray-800">
          What do you want to
          <br /> work on today?
        </h2>
      </div>

      {/* Category Cards */}
      <div className={`grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 ${isManualEntry ? 'flex' : 'grid'}`}>
        {
          isManualEntry
          ?
          <ManualEntry
            data={manualEntryData}
            setData={setManualEntryData}
            handleSubmit={handleManualEntryData}
            loading={manualEntryLoading}
          />
          :
          categories.map((category, index) => (
          <div
            onClick={() => {
              setActiveCategory(index);
              setActiveCategoryOption(0);
              setInputText("");
              setFiles([]);
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
      <div className="flex items-center justify-center gap-4 w-full mt-6">
        {
          categories[activeCategory]?.options?.map((opt, idx) => (
            <button onClick={() => {
              setActiveCategoryOption(idx);
              opt.onClick && opt.onClick();
            }} key={idx} className={`px-4 py-2 border-2 border-[#E9FFEB] rounded-2xl flex gap-2 items-center hover:opacity-90 transition-all ${
              idx == activeCategoryOption ? 'bg-[#03852C] text-white' : 'bg-[#FDFDFD] text-black'
            }`}>
              {opt.icon}
              {opt.content}
            </button>
          ))
        }
      </div>
    </>
  )
}
