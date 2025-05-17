export default function Demos() {
    const demosItems = [
        {
          title: "Lorem ipsum dolor sit amet",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl urna, porttitor vitae ornare maximus, mollis non lectus.",
          image: "/images/Home/demos/1.png"
        },
        {
          title: "Lorem ipsum dolor sit amet",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl urna, porttitor vitae ornare maximus, mollis non lectus.",
          image: "/images/Home/demos/2.png"
        },
        {
          title: "Lorem ipsum dolor sit amet",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl urna, porttitor vitae ornare maximus, mollis non lectus.",
          image: "/images/Home/demos/3.png"
        },
        {
          title: "Lorem ipsum dolor sit amet",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl urna, porttitor vitae ornare maximus, mollis non lectus.",
          image: "/images/Home/demos/4.png"
        }
    ]
    return (
      <section className="flex items-center flex-col justify-center w-full gap-5 mt-20 text-black">
          <div className="w-full mt-5">
            <div className="grid grid-cols-1 gap-10">
              {
                demosItems.map((item, index) => (
                    <div key={index} className={`bg-white gap-10 flex items-center justify-center ${index % 2 === 0 ? "flex-row-reverse pl-10" : "flex-row pr-10"}`}>
                      <div>
                          <img src={item.image} alt="Demos" />
                      </div>
                      <div className="w-1/2 flex flex-col gap-3 justify-center">
                          <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-mainColor"></div>
                          <h3 className="text-3xl font-extrabold text-[#037c2a]">{item.title}</h3>
                          </div>
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
  