function App() {
  return (
    <div className="min-h-screen w-full text-white font-['Avenir Next']">
      <div className="flex h-[40px] mt-[17px] px-[40px] flex items-center">
        <div className="flex justify-start">
          <img src="/assets/SVG.svg" alt="brand" />
        </div>
        <div className="flex justify-end ml-auto">
          <div className="flex gap-[30px] font-medium text-sm leading-[25.76px] tracking-[0.9px] items-center">
            <a href="#" className="no-underline ">How it works</a>
            <a href="#" className="no-underline ">All apps</a>
            <a href="#" className="no-underline ">Pricing</a>
            <a href="#" className="no-underline ">For Teams</a>
            <a href="#" className="no-underline ">Blog</a>
            <a href="#" className="no-underline ">Podcast</a>
            <span className="">|</span>
            <img src="/assets/en.svg" alt="english" />
            <a href="#" className="no-underline ">Sign in</a>
            <button className="border rounded-md font-normal text-sm leading-[20px] tracking-[1px] pt-[5.5px] pb-[6.5px] px-[23px] cursor-pointer">
              Try free
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
