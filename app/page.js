import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex justify-center text-white h-[30vh] sm:h-[44vh] items-center flex-col gap-4 px-4 text-center">
          <div className="font-bold text-3xl sm:text-4xl md:text-5xl flex justify-center items-center gap-2 flex-wrap"> 
            Buy Me a Tea 
            <span><img src="/p1gif.gif" alt="" width={44} className="inline-block" /></span>
          </div>
          <p className="text-sm sm:text-base max-w-md mx-auto">
            A crowdfunding platform for developers. Fund your projects effortlessly. Start Now!
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Start here
            </button>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10 text-white">
      </div>

      <div className="text-white container mx-auto pb-16 sm:pb-32 pt-10 sm:pt-14 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-14">Your Fans can buy you a Tea</h2>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img src="/funds.gif" alt="" className="bg-slate-400 rounded-full p-2 text-black" width={44} />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Fans want to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img src="/friend.gif" alt="" className="bg-slate-400 rounded-full p-2 text-black" width={44} />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Fans want to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img src="/coin.gif" alt="" className="bg-slate-400 rounded-full p-2 text-black" width={44} />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Fans want to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10 text-white">
      </div>

      <div className="text-white container mx-auto pb-16 sm:pb-32 pt-10 sm:pt-14 px-4 flex flex-col items-center gap-5 flex-wrap">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-14">Feature Overview of GetMeATea</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
          <div className="flex justify-center">
            <img src="/userauth.png" alt="" className="w-full max-w-[244px] h-auto" />
          </div>
          <div className="flex justify-center">
            <img src="/userpage.png" alt="" className="w-full max-w-[244px] h-auto" />
          </div>
          <div className="flex justify-center">
            <img src="/pagegen.png" alt="" className="w-full max-w-[244px] h-auto" />
          </div>
          <div className="flex justify-center">
            <img src="/paymentp.png" alt="" className="w-full max-w-[244px] h-auto" />
          </div>
          <div className="flex justify-center">
            <img src="/umbrella.png" alt="" className="w-full max-w-[244px] h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
