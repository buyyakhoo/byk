import Card from "../../components/Card";
import FrontTitle from "../../components/FrontTitle"
import { projData } from "../../Data";

function Proj() {

  return (
    <>
    <FrontTitle Title={"Project"} Description={"The list of my personal project."} />

    <div className="mb-28 pb-10 pt-10 w-full flex justify-center">
      <div className="md:w-5/6 sm:w-5/6 w-5/6 flex flex-row flex-wrap justify-center gap-5">
        {
          projData.map((data) => {
            return <Card 
              ImageLink={data.ImageLink}
              Title={data.Title}
              Description={data.Description}
              Date={data.Date}
              Link={data.Link}
            />
          })
        }
      </div>
    </div>
    </>
  )
}

export default Proj