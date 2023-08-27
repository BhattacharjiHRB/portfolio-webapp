



export default function AboutMe(){
    return(
<section className="m-10 flex w-full flex-1 items-center justify-center gap-10 max-sm:flex-col">
    <div className="w-2/6 items-center justify-center bg-emerald-700/50 p-14 rounded-xl max-md:w-full">
      <img src="/Images/me.jpg" alt="" className="h-full w-full shadow-xl shadow-emerald-500" />
    </div>
    <div className="w-2/4 p-14 gap-2 max-md:w-full"><span className="text-2xl text-cyan-700 font-bold ">Hey, I am Hrittik Bhattacharjee</span> <p className="text-lg max-md:text-sm">Passionate MERN Stack Developer with a love for crafting seamless web experiences. Proficient in MongoDB, Express.js, React, and Node.js, I thrive in creating dynamic and responsive applications. With a keen eye for detail and a dedication to clean code, I'm committed to building innovative solutions that drive user engagement and business growth.</p></div>
  </section>
    )
}