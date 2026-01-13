function App() {
  return (
    <div className="min-h-screen w-full max-w-[1440px] mx-auto text-white font-['Avenir Next']">
      {/* Start Header */}
      <div className="flex h-[40px] mt-[17px] px-[40px] items-center">
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
      <div className="flex h-[595.59px] mt-[118px] pl-[80px] pr-[60px] justify-between mb-[130px]">
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

      {/* Start section2 */}
      <div className="flex flex-col mx-[130px] border-t border-t-[#e5e5e5] border-b border-b-[#e5e5e5]">
        <div className="flex h-[71.84px] w-full mt-[101px]">
          <span className="w-1/2 font-semibold text-4xl leading-[51.84px] tracking-[1px]">What you get on Setapp.</span>
          <span className="w-1/2 font-normal text-lg leading-[32.04px] tracking-normal">With a single monthly subscription at $9.99, you get 240+ apps for<br />your Mac.</span>
        </div>
        <div className="mt-[87.99px] bg-[#DF96AE] rounded-[20px] h-[605px] w-full">
          <div className="flex mt-[60px] ml-[60px]">
            <img src="/assets/icon-cmm.png" alt="icon-cmm" className="w-[80px] h-[80px]" />
            <div className="flex flex-col ml-[32px]">
              <span className="font-semibold text-[26px] leading-[40.04px] tracking-normal text-[#26262B]">Keep your Mac clean</span>
              <span className="font-normal text-lg leading-[32.04px] tracking-normal text-[#26262B]">Remove junk, scan for malware, wipe email attachments</span>
            </div>
          </div>
          <img src="/assets/cmm-big@2x.png" alt="cmm-big@2x" className="w-[1106px] h-[465px] mx-auto" />
        </div>
        <div className="flex h-[633px] w-full gap-[20px] mt-[20px]">
          <div className="bg-[#F4F0E4] rounded-[20px] w-full h-full">
            <img src="/assets/coderunner@2x.png" alt="coderunner@2x" className="w-[580px] h-[400.52px]" />
            <div className="flex flex-col ml-[60px]">
              <img src="/assets/icon-coderunner.png" alt="icon-coderunner" className="w-[80px] h-[80px]" />
              <span className="mt-[19px] font-semibold text-[26px] leading-[40.04px] tracking-normal text-[#26262B]">Write code</span>
              <span className="font-normal text-lg leading-[32.04px] tracking-normal text-[#26262B]">Create applications in more than 25 languages</span>
            </div>
          </div>
          <div className="bg-[#384C75] rounded-[20px] w-full h-full">
            <div className="flex flex-col mt-[60px]">
              <img src="/assets/icon-meeter.png" alt="icon-meeter" className="ml-[60px] w-[68px] h-[68px]" />
              <span className="ml-[60px] mt-[19px] font-semibold text-[26px] leading-[40.04px] tracking-normal text-[#FFFFFF]">Join meetings in a click</span>
              <span className="ml-[60px] font-normal text-lg leading-[32.04px] tracking-normal text-[#FFFFFF]">Quickly access links to your meetings from menu bar</span>
              <img src="/assets/meeter@2x.png" alt="meeter@2x" className="mt-[52.46px] w-[580px] h-[360px]" />
            </div>
          </div>
        </div>
        <div className="mt-[100.57px] flex text-center mx-auto">
          <span className="flex font-medium text-xl leading-[30px] tracking-[1.6px] gap-[13.31px] items-center cursor-pointer">
            <img src="/assets/arrow.svg" alt="arrow" className="w-[27px] h-[21px]" />
            View all superpowers
            </span>
        </div>
        <div className="flex h-[67.84px] w-full mt-[102px] mb-[89px]">
          <span className="w-1/2 font-semibold text-4xl leading-[51.84px] tracking-[1px]">Your Setapp journey.</span>
          <span className="w-1/2 font-normal text-lg leading-[32.04px] tracking-normal">Type in your task into Setapp search and get instant app<br />recommendations.</span>
        </div>
      </div>
      {/* End section2 */}
    </div>
  )
}

export default App
