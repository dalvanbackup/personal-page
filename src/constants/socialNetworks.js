/* socialNetworks.js */

import {
  faGithub,
  faInstagram,
  faLastfm,
  faLinkedin,
  faSpotify,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

const socialNetworks = [
  // List of social networks displayed in the footer of each page of the application

  {
    color: 'hover:text-[#14191e] focus-visible:text-[#14191e]',
    icon: faGithub,
    name: 'GitHub',
    url: 'https://github.com/dalvancarvalho',
  },
  {
    color: 'hover:text-[#0a66c2] focus-visible:text-[#0a66c2]',
    icon: faLinkedin,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
  },
  {
    color: 'hover:text-[#0f1419] focus-visible:text-[#0f1419]',
    icon: faXTwitter,
    name: 'X',
    url: 'https://x.com/dalvanc_',
  },
  {
    color: 'hover:text-[#f2016d] focus-visible:text-[#f2016d]',
    icon: faInstagram,
    name: 'Instagram',
    url: 'https://instagram.com/dalvanc_',
  },
  {
    color: 'hover:text-[#d0232b] focus-visible:text-[#d0232b]',
    icon: faLastfm,
    name: 'Last.fm',
    url: 'https://www.last.fm/user/dalvancarvalho',
  },
  {
    color: 'hover:text-[#25d865] focus-visible:text-[#25d865]',
    icon: faSpotify,
    name: 'Spotify',
    url: 'https://open.spotify.com/user/dalvancarvalho?si=b877da829ced4f20',
  },
]

export default socialNetworks
