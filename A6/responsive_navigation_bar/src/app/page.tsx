export default function Home() {
  return (
    <>

      <div className="
        text-center 
        text-white 
        text-2xl 
        m-[14px] 
        

        sm:flex 
        sm:flex-col 
      
        md:flex 
        md:flex-wrap
        md:flex-row

        lg:flex-row">

        <div className="
        bg-red-500 h-[80px] m-1 
        md:w-full
        lg:flex-1" >this is a red box :)</div>

        <div className="bg-blue-500 h-[80px] m-1 
        md:w-1/2
        md:flex-1
        lg:flex-1">blue skies ahead :)</div>

        <div className="bg-green-500 h-[80px] m-1 
        md:w-1/2
        md:flex-1
        lg:flex-1">green means go!</div>
      </div>

    </>
  )
}