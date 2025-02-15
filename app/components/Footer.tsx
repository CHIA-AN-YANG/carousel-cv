import links from "@/public/json/footer.json";
import Image from "next/image";
export interface FooterLink {
  url: string
  iconPath: string
  iconAlt?: string
  linkname: string
}



const LINKS = links as FooterLink[];

const Footer: React.FC = () => (
  <footer className="footer">
    {LINKS.map(({ url, iconPath, iconAlt, linkname }) => (
      <a key={url} className="footer__link" href={url}>
        <Image className="footer__link__svg"
          src={"./images/footer" + iconPath}
          alt={iconAlt || linkname}
          width={24}
          height={24}
        />
        <span className="footer__link__text">{linkname}</span>
      </a>
    ))}
  </footer>
)

export default Footer