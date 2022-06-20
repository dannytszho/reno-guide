import Image from 'next/image'
import Depot from '../../apps/web/src/public/TheDepot.png'
import LocationIcon from '../../apps/web/src/public/svg/LocationIcon'
import PhoneIcon from '../../apps/web/src/public/svg/PhoneIcon'
import HyperLinkIcon from '../../apps/web/src/public/svg/HyperLinkIcon'
import GoogleMap from 'ui/GoogleMap'

const Details = () => {
  return (
    <>
      <div className="grid justify-items-center">
        <div>
          <Image src={Depot} alt="depot" />
        </div>
        <div className="flex m-3">
          <LocationIcon />
          <a
            href="https://www.google.com/maps/place/The+Depot+Craft+Brewery+%26+Distillery/@39.531084,-119.811749,17z/data=!3m1!4b1!4m5!3m4!1s0x8099474a497e4dd5:0x47738ce5eaae0fda!8m2!3d39.531084!4d-119.809555"
            className="ml-2 hover:text-blue-300"
          >
            325 E. 4TH STREET RENO, NV 89512
          </a>
        </div>
        <div className="flex m-2">
          <PhoneIcon />
          <a href={`tel:${+17757374330}`} className="ml-2 hover:text-blue-300">
            775-737-4330
          </a>
        </div>
        <div className="flex m-2">
          <HyperLinkIcon />
          <a
            href="https://www.thedepotreno.com/"
            target="_blank"
            rel="noreferrer"
            className="ml-2 hover:text-blue-300"
          >
            thedepotreno.com
          </a>
        </div>
      </div>
    </>
  )
}

export default Details
