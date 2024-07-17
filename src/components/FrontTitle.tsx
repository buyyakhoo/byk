function FrontTitle({ Title, Description } : { Title: string, Description: string }) {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex justify-center">
        <div className="w-5/6 flex flex-col gap-5 justify-center items-center">
            <h1 className="md:text-9xl sm:text-8xl text-5xl text-amber-200 font-Tiny5">{ Title }</h1>
            <h1 className="md:text-3xl sm:text-xl text-md text-center text-amber-300">{ Description }</h1>
        </div>
    </div>
  )
}

export default FrontTitle