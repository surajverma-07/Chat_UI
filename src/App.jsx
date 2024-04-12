import dp from "../src/assets/dp.png";
import vector from "../src/assets/Vector.png";
import "./App.css";
import Chat from "./components/Chat";
import Btn from "./components/Btn";
import arrow from '../src/assets/arrow.png'
import Card from "./components/Card";
import filter from './assets/filter.png'
import crossb from './assets/crossb.png'
import crossg from './assets/crossg.png'
import logo from './assets/Logo.png'
import paperclip from './assets/paperclip.png'
import arroww from './assets/arroww.png'

function App() {
  return (
    <div className="fontin bgmain W-[1920px] h-[1000px] place-content-center ">
      <div className="w-[360px] h-[800px] border rounded-2xl bg-white mx-auto ">
        {/* above section  */}
        <div className="bgmain flex gap-x-14 h-[87px] m-2 rounded-t-2xl  border ">
          <div className="aboveleft flex gap-x-1 mx-auto justify-center items-center">
            <div className="rounded-full ml-4 w-14  h-14 bg-white overflow-hidden ">
              <img src={dp} alt="dp" className="w-20 h-20 object-cover relative top-0 right-2" />

            </div>
            <div className="h-[8px] w-[8px] rounded-full bg-[#3FE225] relative right-5 top-[22px]"></div>  
            
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <div className="font-bold maincolor">Timpu</div>
                <img src={vector} alt="gold" />
              </div>
              <div className="maincolor font-medium">Chat assignment</div>
            </div>
          </div>
          <div className="flex">
             <div className="h-[8px] w-[8px] rounded-full bg-[#3FE225] top-12 right-3 relative"></div>  
             <div className="aboveright relative top-10 right-2 maincolor">Online</div>
          </div>
        </div>
        {/* above section end  */}
        {/* middle section start  */}
        <div className="mt-8 ml-4">
           <Chat width="w-60" height="h-20" bgmain="bgmain" children="Hi Sam! I am your personal shopping assistant , how can i help you today ?   " />
           <p className="text-[12px] ml-2">4:45 PM</p>
        </div>
        <div className="mt-6 relative left-[6.5rem]">
           <Chat width="w-60" height="h-16" bgmain="bggreen" children="I am looking for a hand bag, with long strap ." />
           <p className="text-[12px] relative left-44">4:46 PM</p>
        </div>

        <div className="ml-4">
           <p className="text-[#949494]">Popular tags for handbag</p>
           <div className="flex gap-x-3 mt-2"> 
             <Btn children="Clutch "/>
             <Btn children="Fabric lining " />
             <Btn children="Baggit " />
             <Btn children="Multi " width="w-20" />
           </div>
           <div className="bg-white w-8 h-12 place-content-center px-2 relative left-[19.4rem] -top-10"><img src={arrow} alt="arrow" /></div>
        </div>

        <div className="-mt-6 ml-4">
           <Chat width="w-60" height="h-30" bgmain="bgmain" children="Or set filter and help us choose the best bag for you. " element={<Card children="Bags on Timpu"/>}/>
           <p className="text-[12px] ml-2">4:45 PM</p>
        </div>


        <section className="mx-4 mt-2">
            <div className="flex justify-between text-sm">
               <div className="text-[#949494]">Select filters</div>
               <div className="flex">
                  <img src={filter} alt="cross" />
                  <p className="text-[#666666]">Filter</p>
               </div>
            </div>

            <div className="flex flex-wrap gap-x-4 mt-3 gap-y-2">
            <Btn children="Strap - Long " cross={<img src={crossb} alt="cross" className="m-1"/>}  height="h-7"/>
            <Btn children="Colour " cross={<img src={crossg} alt="cross" className="m-1"/>}  height="h-7" bg="bgf4" textcol="text-[#737373]" bordercol="border-[#ffffff]"/>
            <Btn children="Size " cross={<img src={crossg} alt="cross" className="m-1"/>}  height="h-7" bg="bgf4" textcol="text-[#737373]" bordercol="border-[#ffffff]"/>
            <Btn children="Brand " cross={<img src={crossg} alt="cross" className="m-1"/>}  height="h-7" bg="bgf4" textcol="text-[#737373]" bordercol="border-[#ffffff]"/>
            <Btn children="Material " cross={<img src={crossg} alt="cross" className="m-1"/>}  height="h-7" bg="bgf4" textcol="text-[#737373]" bordercol="border-[#ffffff]"/>
          

            
            </div>
        </section>
        {/* middle section end */}
        {/* Footer section starts  */}
          <footer className="bgmain flex mt-7 mx-2 h-[87px] fontpop rounded-b-2xl  border flex-col">
             <div className="flex">
              <input type="text" placeholder="Type your message" className="p-3 rounded-lg w-[255px] h-[40px] mt-1 ml-2 text-sm "  />
              <img src={paperclip} alt="" className="w-5 h-6 relative top-3 right-9  " />
              <div className="h-10 w-16 bg-[#4C82EF] rounded-lg place-content-center -ml-3 mt-1 "><img src={arroww} alt=""  className="mx-auto"/></div>
             </div>
             <div className="flex relative top-4 left-16">
              <div className="text-[#949494]">Powered by</div>
               <p className="text-[#7A7F8C] font-semibold">Krunk.ai</p>
               <img src={logo} alt="" className="w-5 h-5"/>
             </div>
          </footer>
        {/* Footer section ends  */}


      </div>
    </div>
  );
}

export default App;
