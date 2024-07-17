import { Link } from "react-router-dom"

function Title() {
  return (
    <div className="fixed bg-sky-900 top-0 z-50 w-full h-20 flex sm:flex-row flex-col items-center justify-between p-5"> 
      <h1 className="md:text-6xl sm:text-4xl text-xl font-Tiny5 text-amber-200 font-bold">Buyyakhoo</h1>
      <div className="md:text-3xl sm:text-2xl text-lg font-Tiny5 flex items-center gap-5 text-yellow-400">
        <Link className="hover:text-yellow-600" to="/">About</Link>
        <Link className="hover:text-yellow-600" to="/blog">Blog</Link>
        <Link className="hover:text-yellow-600" to="/proj">Project</Link>
        <Link className="hover:text-yellow-600" to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Title