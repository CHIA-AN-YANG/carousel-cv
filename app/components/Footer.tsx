import links from "../json/footer.json";

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
        <img className="footer__link__svg" src={"./images/footer" + iconPath} alt={iconAlt} />
        <span className="footer__link__text">{linkname}</span>
      </a>
    ))}
  </footer>
)

export default Footer