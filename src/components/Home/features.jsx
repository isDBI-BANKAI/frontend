export default function Features() {
  return (
    <section className="flex items-center flex-col justify-center w-full gap-5 mt-20 text-black">
      <h2 className="font-bold text-5xl">Main Features</h2>
      <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, temporibus. etur adipisicing elit. Sunt, temporibus.</p>
      <div className="w-[80%] mt-5">
        <div className="grid grid-cols-4 gap-6">
          {
            [...Array(4)].map((_, index) => (
                <div key={index} className="shadow-lg rounded-2xl hover:bg-[#ebf6ef] hover:border-mainColor transition-all cursor-pointer group px-8 py-10 border flex flex-col gap-3 border-grayer">
                <div className="w-16 h-16 bg-grayer group-hover:bg-white transition-all rounded-xl flex items-center justify-center">
                    <img src="/images/Home/ai.svg" alt="" />
                </div>
                <h3 className="text-2xl font-semibold">Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl urna, porttitor vitae ornare maximus</p>
                </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
