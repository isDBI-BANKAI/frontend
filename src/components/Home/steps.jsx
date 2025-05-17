export default function Steps() {
    const stepsFeatures = [
        {
          title: "Input Data",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl urna, porttitor vitae ornare maximus, mollis non lectus.",
          image: "/images/Home/steps/one.svg"
        },
        {
          title: "AI Analysis",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl urna, porttitor vitae ornare maximus, mollis non lectus.",
          image: "/images/Home/steps/two.svg"
        },
        {
          title: "Optimize Continuously",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl urna, porttitor vitae ornare maximus, mollis non lectus.",
          image: "/images/Home/steps/three.svg"
        }
    ]
    return (
        <section className="flex items-center flex-col justify-center w-full gap-5 mt-20 text-black">
            <h2 className="font-bold text-5xl">How does Lumos.ai simply work?</h2>
            <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, temporibus. etur adipisicing elit. Sunt, temporibus.</p>
            <div className="w-[75%] mt-5">
                <div className="grid grid-cols-1 gap-10">
                    {
                    stepsFeatures.map((item, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-2xl hover:bg-[#ebf6ef] hover:border-mainColor transition-all cursor-pointer group px-8 py-10 border flex gap-3 border-grayer">
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                        <div className="w-1/2 flex flex-col gap-3 justify-center">
                            <h3 className="text-9xl font-extrabold text-[#037c2a]">0{index + 1}</h3>
                            <h5 className="text-5xl font-bold text-mainColor-dark">{item.title}</h5>
                            <p className="text-2xl">{item.description}</p>
                        </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
  }
  