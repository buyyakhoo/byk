const convertMonth = (month: number) : number => month - 1;

interface DataEach {
    ImageLink: string,
    Title: string,
    Description: string,
    Date?: Date,
    Link?: string
}

// Noted that the image file is coming soon, and I will build it later.

const blogData : DataEach[] = [
    {
        ImageLink: "https://images.unsplash.com/photo-1554523449-209945dde0c7?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Title: "Why students haven't enjoyed to learn in school?",
        Description: "It's questionable topic for me.",
        Date: new Date(Date.UTC(2020, convertMonth(7), 3)),
        Link: "/blog/blog?year=2020&blog=not-enjoy-school"
    },
    {
        ImageLink: "https://images.unsplash.com/photo-1493612276216-ee3925520721?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Title: "Design Thinking?", 
        Description: "The introduction of design thinking.",
        Date: new Date(Date.UTC(2022, convertMonth(9), 3)),
        Link: "/blog/blog?year=2022&blog=design-thinking"
    },
    {
        ImageLink: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Title: "Get to know the Interleaving Study",
        Description: "Learning tips for anyone.",
        Date: new Date(Date.UTC(2023, convertMonth(5), 30)),
        Link: "/blog/blog?year=2023&blog=interleaving-study"
    },
]

const projData : DataEach[] = [
    {
        ImageLink: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Title: "lifesucksproject",
        Description: "bot discord to help the absolute life.",
        Date: new Date(Date.UTC(2021, convertMonth(9), 19)),
        Link: "https://github.com/buyyakhoo/lifesucksproject"
    },
    {
        ImageLink: "https://images.unsplash.com/photo-1675602488453-c3897a475af5?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Title: "LightSec_System", 
        Description: "School project in Secondary 5 Semester 2 on Oct 2021 to Feb 2022. Use Arduino and MIT App Inventor.",
        Date: new Date(Date.UTC(2022, convertMonth(5), 15)),
        Link: "https://github.com/buyyakhoo/lightsec_proj"
    },
    {
        ImageLink: "https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Title: " NotesFromSpeech",
        Description: "School project in Secondary 6 about transcribing voice/audio to text. Use Flask and Google Cloud API from Python",
        Date: new Date(Date.UTC(2022, convertMonth(11), 18)),
        Link: "https://github.com/buyyakhoo/NotesFromSpeech"
    },
    {
        ImageLink: "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Title: "Divide-Bills",
        Description: "หารค่าใช้จ่ายในแต่ละวัน",
        Date: new Date(Date.UTC(2024, convertMonth(5), 26)),
        Link: "https://github.com/buyyakhoo/Divide-Bills"
    },
    {
        ImageLink: "https://images.unsplash.com/photo-1510639322343-20cd2a815a0a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Title: "no-copyright-music-beatbox",
        Description: "a jazz beatbox song from sonic pi (Stupid Hackthon Thailand Round 8)",
        Date: new Date(Date.UTC(2024, convertMonth(7), 14)),
        Link: "https://github.com/buyyakhoo/no-copyright-music-beatbox"
    }
]

export { blogData, projData }