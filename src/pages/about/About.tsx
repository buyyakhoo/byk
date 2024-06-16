// import './App.css'
import TextForBlog from "../../components/TextForBlog";

function About() {

  return (

    <>       

        <div className="h-screen w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-green-900 flex justify-center">
            <div className="w-5/6 flex flex-col gap-5 justify-center items-center">
            <h1 className="md:text-9xl sm:text-8xl text-5xl text-amber-200 font-Tiny5">Buyyakhoo</h1>
            <h1 className="md:text-3xl sm:text-xl text-md text-center text-amber-300 font-bold">CS Students</h1>
            </div>
        </div>

        <div className="mb-28 pb-10 bg-pink-900 w-full flex justify-center">
            <div className="md:w-3/6 sm:w-4/6 w-5/6 flex flex-col gap-5">

                <TextForBlog 
                    Title={"Who am I?"} 
                    Description={["I'm a computer science student who is interested in many things about technology, such as webdev, CS, machine learning, Algorave, etc."]} 
                />

                <TextForBlog 
                    Title={"Experience about coding?"} 
                    Description={
                        ["I started coding in the Python and C programming languages, learned a little bit about websites, and learned about HTML, CSS, and JS.",
                        "I learned about Machine Learning and doing some project about it.",
                        "I'm currently learning about fullstack web development.",
                        "Latest I have doing about algorave with Sonic Pi which I use ruby programming language."]
                    } 
                />
                
                <TextForBlog 
                    Title={"My thought about coding?"} 
                    Description={
                        ["Coding is a part of programming, it's about translating the logic into a language, while programming is the process of creating a program. It's more than coding.",
                        "I think coding for me is more than just writing some language. It can solve problems in daily life, e.g., " + 
                        "find the weighted arithmetics mean to calculate the gpa in python, create bitcoin game (LSC Coins) with discord bot, " + 
                        "create countdown website with my timezones, do the data scraping and build the better website, etc.",
                        "It helps my creativity to do something new, it can make the music or soundtrack with coding.",
                        "Coding enables me study other field interested besides technology that I have done before, e.g., " + 
                        "mathematics, statistics, problem solving, researching, synthesizer filter, etc."
                        ]
                    } 
                />

                <TextForBlog 
                    Title={"Why I create this website?"} 
                    Description={
                        ["I create this website to share my experience, my thought, my project, and my journey of my life.",
                            "I'm also doing the experiment about the graphic in the website. I maybe using the P5.js, Three.js, or whatever it is. " + 
                            "(for my inspiration (dtinth) -> https://youtu.be/msI64ZJSllA?si=h4l_Uk2spMvoJSlP)"
                        ]
                    } 
                />

                <TextForBlog 
                    Title={"Hobby?"} 
                    Description={["coding, programming, music, algorave, photography, investment, gaming, etc."]} 
                />

                <TextForBlog 
                    Title={"Genre of music that I like?"} 
                    Description={
                        ["EDM, for subgenre I like Future Bass, Drum and Bass, Tech House, Trance, Dubstep, etc., mostly non-mainstream.",
                        "The others are Synthwave, Synthpop, JPOP, etc."
                        ]
                    } 
                />

                <TextForBlog
                    Title={"My future plan"}
                    Description={
                        ["Now I think I want to work in the software engineering field, but I'm not quite sure about it. " + 
                        "I also interested in the machine learning, data science, mathematics, a little bit of cybersecurity, etc. So, I maybe have " + 
                        "opportunity to change my career path.",
                        "I fascinated about the electronic music, and latest I have trying to do the algorave field. " + 
                        "It makes me remember when I was a teenager that I loved to listen to the electronic music, " + 
                        "and I used to play the instrument (Violin, Piano, Ukulele, Guitar), so I have opportunity to review the " + 
                        "music theory and try to make the music with coding. The other future plan will make the music with coding, " +
                        "and if possible, I want to try with real DAW and any synthesizer."
                        ]
                    }
                />

                <TextForBlog
                    Title={"I have something want to tell."}
                    Description={
                        ["Error code: 0xffffffff",
                        "I can't say anything about it, but I think we should focus on the present and do the best.",
                        "buyyakhoo, 2024"
                        ]
                    }
                />
            
            </div>
        </div>
    </>

  )
}

export default About;
