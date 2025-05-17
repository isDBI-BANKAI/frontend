export default function Hero() {
  return (
    <section className="flex items-center justify-between w-full relative text-white">
        <img src="/images/Home/hero-backer.svg" className="opacity-5 absolute top-10 left-9 z-10" alt="Bger" />
        <div className="w-[60%] flex flex-col items-center gap-4 text-left pl-20 z-20 relative">
          <h1 className="text-4xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur?</h1>
          <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl urna, porttitor vitae ornare maximus, mollis non lectus. Nunc sit amet sapien pharetra, vulputate lectus eu, vestibulum leo</p>
          <div className="w-full mt-4">
              <button className="text-white bg px-6 py-3 bg-mainColor hover:opacity-75 transition-all font-bold text-xl rounded-xl">Request a Demo</button>
          </div>
        </div>
        <img
          src="/images/Home/hero-righter.svg"
          alt="Home"
          className="w-[70%] h-auto mt-8 rounded-lg shadow-lg"
        />
    </section>
  )
}
