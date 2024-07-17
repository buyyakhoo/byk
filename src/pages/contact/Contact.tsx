import ContactSocial from '../../components/ContactSocial'

function Contact() {
  return (


    <div className="pb-10 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 w-full min-h-screen flex justify-center p-5">
        <div className="w-5/6 mb-28 mt-20 flex md:flex-row flex-col gap-5 justify-center items-center">

                <div className= "md:w-1/2 w-full md:h-5/6 h-1/2 flex flex-col justify-center items-center">
                    <h1 className="md:text-8xl sm:text-9xl text-7xl mt-5 text-amber-200 font-Tiny5">Contact</h1>
                    <h2 className="md:text-3xl sm:text-4xl text-xl text-amber-300">for business purpose</h2>
                </div>

                <div className="md:w-1/2 w-full md:h-5/6 h-1/2 flex flex-col p-5 gap-5 items-center justify-center">
                    <div>
                        <div className="flex flex-col items-center gap-5">
                            <ContactSocial SIcon="github" SLink="https://github.com/buyyakhoo" SUsername="buyyakhoo" />
                            <ContactSocial SIcon="twitter"SLink="https://twitter.com/buyyakhoo" SUsername="buyyakhoo" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
  )
}

export default Contact