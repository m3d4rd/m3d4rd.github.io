import React from 'react'
import logo from './assets/logo.png'
import cover from './assets/cover.png'
import halfPercent from './assets/half-percent.png'
import cardRight from './assets/card-right.png'
import shape from './assets/shape.png'
import gidLogo from './assets/gid-logo.png'
import people from './assets/people.png'
import bar from './assets/bar.png'

function FirstPage() {
  return <div className="relative bg-white overflow-hidden">
  <div className=" mx-auto ml-24">
  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 absolute top-0 right-0  font-bold m-8">
  <a href="#" className="  hover:text-gray-900">About GlobalId</a>

  <span className=" font-normal text-3xl">|</span>
    <a href="#" className="  hover:text-gray-900 border-2 rounded-full border-black px-8 py-2">Connect</a>
    </div>
    <div className="flex flex-row">
  <div className="mt-20">
  <a href="#">
  <img className="h-64 w-auto " src={logo} />
  </a>
  <span className="ml-8 text-gray-500">The official BLM Group</span>
  </div>
  <div className="lg:absolute w-48  mt-28 lg:right-0 lg:w-1/2">
  <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={cover} alt="" />
    </div>
    </div>
    <div className="z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
  <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
  <div className="flex items-center justify-between w-full md:w-auto">
  <div className="-mr-2 flex items-center md:hidden">
  <button type="button"
  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
  id="main-menu" aria-haspopup="true">
  <span className="sr-only">Open main menu</span>
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
  stroke="currentColor" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
  d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    </button>
    </div>
    </div>
    </div>
    </nav>

    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
  <div className="sm:text-center lg:text-left">
  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
  <span className="block xl:inline">
    Put your money
  where your heart is.
  </span>
  </h1>

  <div className="mt-5 sm:mt-8 flex justify-center flex-col ">
  <div className="rounded-full shadow w-96 ">
  <a href="#" style={{ backgroundColor: '#0D51FF' }}
  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white  hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
    Join the BLM Group Waitlist
  </a>
  </div>
  <div className="ml-12 mt-5 text-gray-500 flex ">
  <div className="mt-2 text-lg">

    <span>Empowered by </span>
  </div>
  <div className="ml-2">
  <img className="h-12 w-auto " src={gidLogo} />
  </div>
  </div>
  </div>
  </div>
  </main>
  </div>
  </div>
  <div className="text-6xl  flex-col text-center  mx-auto">
  <div className="mt-36 place-self-center margin-auto font-extrabold">
    <span>One Group. The Power of Many.</span>
  </div>
  <div className="mt-24 w-7/12 place-self-center mx-auto  text-3xl">

    <div>
      <span>Join the movement to fight for Freedom, Liberation and Justice.</span>
  </div>
  <span className="font-bold">
    Take action by supporting our work within the privacy-enabled group.
    Get your BLM Card and 0.5% of all your spending goes back to the group.
  </span>
  <div>

  <span>
    The BLM Group allows you to do all that. And more.
  </span>
  </div>
  </div>
  <div className="mt-16 place-self-center margin-auto font-extrabold">
    <span>Reach One Goal to Support Millions.</span>
  </div>
  <div className="mt-24 w-6/12 place-self-center mx-auto  text-3xl">

    <div>
      We need <span className="font-bold">500 members</span> to start the BLM Group. Once the member goal is reached,
  <span className="font-bold"> a sum of $1,000 will be donated to the cause</span> by GlobaliD, our trust-partner enabling the BLM Group.


  </div>
  <div>
  </div>
  <img className="h-12 w-auto my-24" src={bar} />
  <div className="mt-5 sm:mt-8 flex justify-center flex-col w-full ">
  <div className="rounded-full shadow w-96 mx-auto">
  <a href="#" style={{ backgroundColor: '#0D51FF' }}
  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white  hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
    Join the BLM Group Waitlist
  </a>
  </div>
  <div className="mt-5 text-gray-500 flex  mx-auto">
  <div className="mt-2 text-lg">

    <span>Empowered by </span>
  </div>
  <div className="ml-2">
  <img className="h-12 w-auto " src={gidLogo} />
  </div>
  </div>
  </div>
  </div>


  <div className="mt-16 place-self-center margin-auto font-extrabold ">
    <span>How your BLM card helps support the Group’s cause</span>

  </div>
  <div className=" flex mt-24 flex-1">
  <div className=" flex-1 ml-44">

  <img className="h-96 w-auto " src={halfPercent} />
  </div>
  <div className="text-4xl w-1/3 mt-12 mr-8">
  <span className="font-bold">Put your money where your heart is </span>
  0.5% of all your spending goes back to the Group. With raised funds we fight to end State-sanctioned violence, liberate Black people, and end white supremacy forever.
  </div>
  <div className="inset-y-0 right-0">
  <img className="h-96 w-auto " src={cardRight} />
  </div>
  </div>
  </div>
  <div className="bg-gray-100 w-full  mt-24 p-24">

  <div className="mt-24 place-self-center margin-auto font-extrabold text-6xl text-center">
    <span>Connect, get updates, and transact safely.</span>

  </div>
  <div className="flex mt-24 items-center">

  <div className="flex-col text-center w-3/4">
  <div>

    <img className="" src={shape} />
  </div>
  <div>
  <span className="text-2xl font-bold">Share opinions and docs privately</span>
  </div>
  <div className="w-1/2 text-xl mx-auto text-gray-600 mt-8 leading-loose">
    <span>The BLM Group allows you to say what you have to say, exchange important documents and get verified updates </span>
  </div>
  </div>
  <div className="flex-col text-center w-3/4">
  <div>

    <img className="" src={shape} />
  </div>
  <div>
  <span className="text-2xl font-bold">Connect with Group Members</span>
  </div>
  <div className="w-1/2 text-xl mx-auto text-gray-600 mt-8 leading-loose">
    <span>Connect and interact with other members in the BLM group;  use messages, video chat, or transact safely</span>
  </div>
  </div>
  <div className="flex-col text-center w-3/4">
  <div>

    <img className="" src={shape} />
  </div>
  <div>
  <span className="text-2xl font-bold">Build your GlobaliD Identity</span>
  </div>
  <div className="w-1/2 text-xl mx-auto text-gray-600 mt-8 leading-loose">
    <span>Claim your GlobaliD and be in control of your identity;  easily communicate and engage with people in a trusted way. <a href="#" className="text-blue-800 font-bold">Learn more.</a></span>
  </div>
  </div>
  </div>
  </div>
  <div className="w-full mt-24 p-24 text-center">
  <span className="text-5xl">Join Jerry Diego and others to reach the 500 BLM Group member goal</span>
  <img className=" mx-auto mt-8" src={people} />
  </div>
  <div className="mt-5 sm:mt-8 flex justify-center flex-col w-full ">
  <div className="rounded-full shadow w-96 mx-auto">
  <a href="#" style={{ backgroundColor: '#0D51FF' }}
  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white  hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
    Join the BLM Group Waitlist
  </a>
  </div>
  <div className="mt-5 text-gray-500 flex  mx-auto">
  <div className="mt-2 text-lg">

    <span>Empowered by </span>
  </div>
  <div className="ml-2">
  <img className="h-12 w-auto " src={gidLogo} />
  </div>
  </div>
  </div>

  <div className="mb-48"></div>
    </div>;
}


export default FirstPage;
