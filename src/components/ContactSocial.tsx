import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faGithub);
library.add(faTwitter);

function ContactSocial({SIcon, SLink, SUsername} : {SIcon: string, SLink: string, SUsername: string} ) {

  interface Socials {
    [key: string]: typeof faGithub
  }

  let socials : Socials  = {
    "github": faGithub,
    "twitter": faTwitter
  }

  return (
    <div className="flex flex-row items-center gap-5">
      <FontAwesomeIcon icon={socials[SIcon]} size="3x" style={{ color: 'white' }} />
      <h2 className="md:text-4xl text-3xl text-amber-300 hover:text-amber-500 font-Tiny5"><a href={SLink}>{SUsername}</a></h2>
    </div>
  )
}

export default ContactSocial