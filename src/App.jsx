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

      {/* Start section3 */}
      <div className="flex flex-col bg-[#FEFEFE] mt-[520px] h-[1550px] relative">
        <div className="absolute left-[40px] top-[-400px] bg-[#765070] rounded-[20px] h-[720px] w-[1355px]">
          <div className="flex relative">
            <img src="/assets/image67.png" alt="image67" className="absolute right-[66px] top-[30px] w-[670px] h-[690px]" />
            <div className="flex flex-col gap-[20.12px] ml-[91px] mt-[209px]">
              <span className="font-medium text-[26px] leading-[40.04px] tracking-normal text-[#FFFFFF]">Musicians like Jason use Setapp to push the<br />limits of their creativity, dancing through<br />tasks for more time to play.</span>
              <span className="font-normal text-base leading-none tracking-normal text-[#FFFFFF]">Jason Staczek</span>
            </div>
            <img src="/assets/watch.png" alt="watch" className="absolute left-[91px] top-[500px] w-[74px] h-[74px]" />
            <div className="flex gap-[50px] absolute right-[48px] top-[61.8px]">
              <img src="/assets/left.svg" alt="left" className="w-[10px] h-[20px]" />
              <img src="/assets/right.svg" alt="right" className="w-[10px] h-[20px]" />
            </div>
          </div>
        </div>
        <div className="flex h-[71.8px] gap-[25px] items-center absolute top-[330px] left-[50%] translate-x-[-50%]">
          <div className="bg-[#1D1D22] rounded-[6px] w-[12px] h-[12px]">
          </div>
          <div className="bg-[#D5D4D4] rounded-[6px] w-[12px] h-[12px]">
          </div>
          <div className="bg-[#D5D4D4] rounded-[6px] w-[12px] h-[12px]">
          </div>
          <div className="bg-[#D5D4D4] rounded-[6px] w-[12px] h-[12px]">
          </div>
        </div>
        <div className="flex flex-col w-full absolute top-[420px]">
          <div className="flex h-[64.08px] mt-[102px]">
            <div className="w-1/2">
              <span className="ml-[130px] font-semibold text-4xl leading-[47.88px] tracking-[1.3px] text-[#26262B]">Setapp in your words.</span>
            </div>
            <div className="w-1/2">
              <div className="flex ">
                <span className="w-1/2 font-normal text-lg leading-[32.04px] tracking-normal text-[#26262B]">What you say about how Setapp<br />powers you up.</span>
                <div className="w-1/2 flex gap-[10px] justify-end mr-[130px]">
                  <img src="/assets/facebook.svg" alt="facebook" className="w-[48px] h-[48px]" />
                  <img src="/assets/twitter.svg" alt="twitter" className="w-[48px] h-[48px]" />
                  <img src="/assets/instagram.svg" alt="instagram" className="w-[48px] h-[48px]" />
                  <img src="/assets/youtube.svg" alt="youtube" className="w-[48px] h-[48px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-[24.58px] justify-end gap-[50px] mr-[130px]">
            <img src="/assets/leftblack.svg" alt="left" className="w-[14px] h-[24px]" />
            <img src="/assets/rightblack.svg" alt="right" className="w-[14px] h-[24px]" />
          </div>
          <div className="flex mt-[28px] mx-[137px] gap-[34px]">
            <div className="flex flex-col bg-[#F5F5F5] rounded-[15px] w-[380px] h-[422.44px]">
              <div className="flex bg-[#71719A] rounded-[8px] mt-[7px] mx-[7px] h-[299.48px] pt-[38.5px] px-[22px] pb-[38.98px]">
                <span className="font-medium text-[26px] leading-[36.92px] tracking-normal text-[#FFFFFF]">
                  Have been using Setapp
                  for almost two years, and I
                  have to say it's the best
                  and the most cost-effective
                  way of having apps on
                  Mac.
                </span>
              </div>
              <div className="flex mx-[29px] mt-[38.5px] justify-between">
                <div className="flex flex-col">
                  <span className="font-semibold text-lg leading-[32.04px] tracking-normal text-[#26262B]">Arash Pourhabibi</span>
                  <span className="font-semibold text-sm leading-[24.92px] tracking-normal text-[#9F9F9F]">@ArashPourhabibi</span>
                </div>
                <div className="flex items-end">
                  <img src="/assets/twittericon.png" alt="twittericon" className="w-[22px] h-[32.04px] " />
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-[#F5F5F5] rounded-[15px] w-[380px] h-[422.44px]">
              <div className="flex bg-[#D9AE89] rounded-[8px] mt-[7px] mx-[7px] h-[299.48px] pt-[38.5px] px-[22px] pb-[38.98px]">
                <span className="font-medium text-[26px] leading-[36.92px] tracking-normal text-[#FFFFFF]">
                  My favorites ❤️ from
                  @Setapp Ulysses,
                  CleanMyMac X, Paste,
                  MindNode, Swift
                  Publisher.
                </span>
              </div>
              <div className="flex mx-[29px] mt-[38.5px] justify-between">
                <div className="flex flex-col">
                  <span className="font-semibold text-lg leading-[32.04px] tracking-normal text-[#26262B]">Mauricio Sanchez</span>
                  <span className="font-semibold text-sm leading-[24.92px] tracking-normal text-[#9F9F9F]">@m741s </span>
                </div>
                <div className="flex items-end">
                  <img src="/assets/instagramicon.png" alt="instagramicon" className="w-[19 px] h-[32.04px] " />
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-[#F5F5F5] rounded-[15px] w-[380px] h-[422.44px]">
              <div className="flex bg-[#765070] rounded-[8px] mt-[7px] mx-[7px] h-[299.48px] pt-[38.5px] px-[22px] pb-[38.98px]">
                <span className="font-medium text-[26px] leading-[36.92px] tracking-normal text-[#FFFFFF]">
                  For those of you that
                  wonder where I
                  discover/get all the
                  awesome apps for my Mac
                  that I use, a lot of them are
                  from Setapp!
                </span>
              </div>
              <div className="flex mx-[29px] mt-[38.5px] justify-between">
                <div className="flex flex-col">
                  <span className="font-semibold text-lg leading-[32.04px] tracking-normal text-[#26262B]">Meredith Sweet</span>
                  <span className="font-semibold text-sm leading-[24.92px] tracking-normal text-[#9F9F9F]">@meredith.sweet.silberstein</span>
                </div>
                <div className="flex items-end">
                  <img src="/assets/facebookicon.png" alt="facebookicon" className="w-[9px] h-[32.04px] " />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-auto h-[71.8px] gap-[25px] items-center mt-[10px]">
            <div className="bg-[#1D1D22] rounded-[6px] w-[12px] h-[12px]">
            </div>
            <div className="bg-[#D5D4D4] rounded-[6px] w-[12px] h-[12px]">
            </div>
            <div className="bg-[#D5D4D4] rounded-[6px] w-[12px] h-[12px]">
            </div>
            <div className="bg-[#D5D4D4] rounded-[6px] w-[12px] h-[12px]">
            </div>
            <div className="bg-[#D5D4D4] rounded-[6px] w-[12px] h-[12px]">
            </div>
            <div className="bg-[#D5D4D4] rounded-[6px] w-[12px] h-[12px]">
            </div>
          </div>
          <div className="border-t border-t-[#929294] mt-[6px]">
          </div>
        </div>
      </div>
      {/* End section3 */}

      {/* Start section4 */}
      <div className="flex flex-col bg-[#2B2D32] h-[935px] relative">
        <div className="flex-col left-[50px] right-[50px] absolute top-[-300px]">
          <div className="flex flex-col bg-[#F5F5F5] rounded-[20px] h-[587.89px] ">
            <img src="/assets/setapp-logo.svg" alt="setapp-logo" className="mt-[124px] ml-[75px] w-[76px] h-[120px]" />
            <span className="mt-[21px] ml-[75px] font-semibold text-[46px] leading-[59.8px] tracking-[1.3px] text-[#26262B]">
              Superpowers starting $9.99/month.<br />
              Free for 7 days.
            </span>
            <div className="flex mt-[60.59px] ml-[75px]">
              <button className="bg-[#26262B] text-[#FFFFFF] rounded-[6px] py-[13px] pl-[31px] pr-[31.41px] cursor-pointer font-normal text-base leading-[24px] tracking-[1px]">
                Get started now
              </button>
              <button className="ml-[24.5px] bg-[#F5F5F5] text-[#26262B] border border-[#26262B] rounded-[6px] py-[13px] pr-[31.57px] pl-[31px] cursor-pointer hover:opacity-90 font-normal text-base leading-[24px] tracking-[1px]">
                More about Setapp
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-t-[#606165] mt-[310px] pt-[60px] px-[30px]">
          <div className="flex mx-[10px]">
            <div className="w-1/2">
              <div className="flex flex-col">
                <div className="flex h-[32px]">
                  <img src="/assets/div.logo.svg" alt="div.logo" className="w-[440px] h-[32px]" />
                </div>
                <span className="mt-[78px] font-normal text-base leading-[28.48px] tracking-normal text-[#FFFFFF]">
                  Updates from our team, written with love
                </span>
                <div className="flex mt-[24px] items-center rounded-lg overflow-hidden w-[440px] h-[50.23px]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-[#404547] text-[#9D9CA2] rounded-l-lg px-4 py-3 flex-1 outline-none"
                  />
                  <button className="cursor-pointer">
                    <img src="/assets/subscribe.png" alt="subscribe" className="w-[54px] h-[50.23px]" />
                  </button>
                </div>
              </div>

            </div>
            <div className="w-1/2 flex font-normal text-base leading-[32px] tracking-normal text-[#FFFFFF]">
              <div className="flex flex-col w-1/3 ">
                <a href="#" className="no-underline ">Home</a>
                <a href="#" className="no-underline ">How It Works</a>
                <a href="#" className="no-underline ">All Apps</a>
                <a href="#" className="no-underline ">Pricing</a>
                <a href="#" className="no-underline ">Setapp for Teams</a>
                <a href="#" className="no-underline ">Blog</a>
                <a href="#" className="no-underline ">Podcast</a>
                <a href="#" className="no-underline ">Download</a>
              </div>
              <div className="flex flex-col w-1/3 ">
                <a href="#" className="no-underline ">About</a>
                <a href="#" className="no-underline ">Support</a>
                <a href="#" className="no-underline ">Education Discount</a>
                <a href="#" className="no-underline ">Family Plan</a>
                <a href="#" className="no-underline ">For Developers</a>
                <a href="#" className="no-underline ">Gift Cards</a>
                <a href="#" className="no-underline ">Redeem Card or code</a>
                <a href="#" className="no-underline ">Setapp Reviews</a>
                <a href="#" className="no-underline ">Affiliate Program</a>
                <a href="#" className="no-underline ">Mac Developer Survey 2023</a>
              </div>
              <div className="flex flex-col w-1/3 ">
                <a href="#" className="no-underline ">Getting started with Setapp</a>
                <a href="#" className="no-underline ">Remote access to other Mac</a>
                <a href="#" className="no-underline ">Fix macOS Ventura</a>
                <a href="#" className="no-underline ">problems</a>
                <a href="#" className="no-underline ">Best productivity apps</a>
                <a href="#" className="no-underline ">Best YouTube downloaders</a>
                <a href="#" className="no-underline ">Uninstall apps</a>
              </div>
            </div>
          </div>
          <div className="flex mt-[41.24px] justify-between">
            <div className="flex font-[Arial]">
              <button className="bg-[#969799] font-bold text-[11px] leading-[26px] tracking-normal cursor-pointer w-[41px] h-[26px]">
                DMCA
              </button>
              <button className="bg-[#404547] font-bold text-[11px] leading-[26px] tracking-normal cursor-pointer w-[83.84px] h-[26px]">
                PROTECTED
              </button>
            </div>
            <div className="flex items-center">
              <img src="/assets/en.svg" alt="en" className="w-[18px] h-[14px]" />
              <span className="ml-[22px] font-normal text-base leading-[28.48px] tracking-normal text-[#FFFFFF]">
                English
              </span>
              <img src="/assets/downarrow.svg" alt="downarrow" className="ml-[10px] w-[10px] h-[10px]" />
            </div>
          </div>
          <div className="flex border-t-2 border-t-[#88898b] mt-[60px] pt-[24px]">
            <div className="flex flex-col w-1/2">
              <span className="font-normal text-xs leading-[21.36px] tracking-normal text-[#FFFFFF]">
                © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
              </span>
              <div className="flex mt-[24px] gap-[12.67px] font-normal text-xs leading-[21.36px] tracking-normal text-[#969799]">
                <a href="#" className="no-underline ">Terms of Use</a>``
                <a href="#" className="no-underline ">Privacy Policy</a>
              </div>
            </div>
            <div className="flex w-1/2 justify-end gap-[10px]">
              <img src="/assets/facebookfoot.svg" alt="facebookfoot" className="w-[26px] h-[26px]" />
              <img src="/assets/twitterfoot.svg" alt="twitterfoot" className="w-[26px] h-[26px]" />
              <img src="/assets/instagramfoot.svg" alt="instagramfoot" className="w-[26px] h-[26px]" />
              <img src="/assets/youtubefoot.svg" alt="youtubefoot" className="w-[26px] h-[26px]" />
            </div>
          </div>
        </div>
      </div>
      {/* End section4 */}
    </div>
  )
}

export default App
