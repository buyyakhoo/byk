function Card({ ImageLink, Title, Description, Date, Link = '' } : { ImageLink: string, Title: string, Description: string, Date?: Date, Link?: string}) {
  
  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noreferrer");
  };
  
  return (

    <div className="relative min-h-96 sm:w-96 w-72 bg-blue-700 hover:bg-blue-600 rounded-lg overflow-hidden" onClick={() => openInNewTab(Link)}>
                
        <img
            className="h-1/3 w-full object-cover object-center"
            src={ImageLink}
        />

        <div className="h-full p-4 mb-10">
            <h3 className="text-white text-2xl font-semibold font-Tiny5">{ Title }</h3>
            <p className="text-white text-lg mt-2">{ Description }</p>
        </div>

        {
          Date ? <p className="absolute p-4 bottom-0 text-white text-lg mt-2">Updated on {  new Intl.DateTimeFormat("uk-UK").format(Date) } </p> : ''
        }

    </div>
  )
}

export default Card