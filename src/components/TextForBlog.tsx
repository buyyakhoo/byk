function TextForBlog({Title, Description} : {Title?: string, Description: string[]}) {
  return (
    <>
        { Title ? <h1 className="md:text-6xl mt-5 sm:text-5xl text-4xl text-amber-200 font-Tiny5">{ Title }</h1> : null }
        { 
          Description.map((desc) => {
              return <h2 className="md:text-2xl sm:text-xl text-md text-amber-300">{ desc }</h2>
          })
        }
    </>
  )
}

export default TextForBlog