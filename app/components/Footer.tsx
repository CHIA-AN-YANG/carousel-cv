
"use client"
import links from "@/public/json/footer.json";
import Image from "next/image";
import BurgerIcon from './icons/Burger';
import { useState } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';
import { GtmEventNames, trackGtmEvent } from '../util/analytics-helper';
export interface FooterLink {
  url: string
  iconPath: string
  iconAlt?: string
  linkname: string
}



const LINKS = links as FooterLink[];

const Footer: React.FC = () => {
  const [bugerOpen, setBurgerOpen] = useState(false)

  const handleClick = () => {
    setBurgerOpen(!bugerOpen)
  }

  return (
    <>
      <div className={`burger ${bugerOpen ? "burger__open" : "burger__closed"}`} >
        <div className="wrapper" onClick={handleClick}>
          <BurgerIcon />
        </div>
        < footer className="footer" >
          {
            LINKS.map(({ url, iconPath, iconAlt, linkname }) => (
              <a key={url}
                className="footer__link"
                href={url}
                onClick={() => trackGtmEvent(GtmEventNames.CLICK, { link: linkname })}
              >
                <Image className="footer__link__svg"
                  src={"./images/footer" + iconPath}
                  alt={iconAlt || linkname}
                  width={24}
                  height={24}
                  loading='eager'
                />
                <span className="footer__link__text">{linkname}</span>
              </a>
            ))
          }
        </footer >
      </div>
    </>
  )
}

export default Footer