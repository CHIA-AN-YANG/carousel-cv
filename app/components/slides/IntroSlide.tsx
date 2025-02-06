import Image from 'next/image';

function IntroSlide() {

  return (
    <>
      <div className="intro--content__sticker content__sticker">
        <div className="intro--content__picture content__picture">
          <img className="" src="/selfie.jpg" alt="chia-an yang photo" />
        </div>
      </div>

      <div className="intro--container slide">
        <h2 className="intro--content content__title">Anna Yang</h2>
        <article className="intro--content__description content__description">
          <p>
            I'm a frontend developer with 3 years of expertise in SAP Commerce, specializing in Angular and Composable Storefront development.
          </p><p>
            I have initiated and managed frontend projects in FalconPack project, creating clear documentation for team guidelines and ensuring consistent delivery. In my current role, I troubleshoot and resolve complex issues across projects like ADI and Eurofred.
          </p><p>
            I also have backend knowledge that allows me to contribute effectively across tasks and integrations.
          </p><p>
            My knowledge covers SEO tactics, Server-side rendering, and user experience improvement. I apply these fields to continually improve frontend development. I also love to take part in talks such as Modern Web Conference Taiwan 2023, and Google Developer Group Kaohsiung – Women in Tech 2024.
          </p>
        </article>
      </div>
    </>


  );
}

export default IntroSlide;