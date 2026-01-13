function App() {
  return (
    <div className="min-h-screen w-full text-white font-['Avenir Next']">
      {/* Start Header */}
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
      {/* End Header */}

      {/* Start section1 */}
      <div className="flex h-[595.59px] mt-[118px] pl-[80px] pr-[60px] justify-between">
        <div>
          <div className="relative mt-[50px]">
            <img src="/assets/pics.svg" alt="pics" className="w-[173px] h-[173px]" />
            <img src="/assets/macpaw.svg" alt="macpaw" className="absolute left-[-5px] top-[130px] w-[58px] h-[58px]" />
            <img src="/assets/pdf.svg" alt="pdf" className="absolute left-[95px] top-[120px] w-[141.71px] h-[141.71px]" />
          </div>
          <div className="relative mt-[120px]">
            <img src="/assets/teamwork.svg" alt="teamwork" className="w-[226.93px] h-[113.97px]" />
            <img src="/assets/secure.svg" alt="secure" className="absolute top-[90px] w-[175px] h-[176px]" />
          </div>
        </div>
        <div className="flex flex-col text-center w-[680px]">
          <img src="/assets/setapp-icon-birthday-15.svg" alt="setapp-icon-birthday-15" className="mx-auto w-[160px] h-[160px]" />
          <span className="mt-[54.62px] font-bold text-[64px] leading-[67.84px] tracking-[1px]">Dozens of apps.<br />One subscription.<br />$9.99</span>
          <div className="flex text-center mx-auto mt-[48px]">
            <button className="bg-white text-[#26262B] border border-gray-300 rounded-md py-[14px] pl-[32px] pr-[30.93px] cursor-pointer font-medium">
              Try free for 7 days
            </button>
            <button className="ml-[20px] bg-white border border-gray-300 rounded-md p-2 cursor-pointer hover:opacity-90">
              <img src="/assets/apple.svg" alt="apple" className="w-[32px] h-[32px]" />
            </button>
            <button className="ml-[12px] bg-white border border-gray-300 rounded-md p-2 cursor-pointer hover:opacity-90">
              <img src="/assets/google.svg" alt="google" className="w-[32px] h-[32px]" />
            </button>
          </div>
          <span className="mt-[27.5px] font-normal text-lg leading-[32.04px] tracking-normal">Power up your workflow with Setapp, a<br />smart way to get apps.</span>
        </div>
        <div>
          <div className="relative mt-[80px]">
            <img src="/assets/wifi.svg" alt="wifi" className="w-[201.52px] h-[126.33px]" />
            <img src="/assets/plan.svg" alt="plan" className="absolute left-[-90px] top-[60px] w-[169px] h-[169px]" />
            <img src="/assets/manage.svg" alt="manage" className="absolute left-[-50px] top-[270px] w-[230px] h-[128px]" />
            <img src="/assets/converter.svg" alt="converter" className="absolute left-[70px] top-[170px] w-[155px] h-[153px]" />
            <img src="/assets/code.svg" alt="code" className="absolute left-[0px] top-[370px] w-[152px] h-[153px]" />
          </div>
        </div>
      </div>
      {/* End section1 */}
    </div>
  )
}

export default App
