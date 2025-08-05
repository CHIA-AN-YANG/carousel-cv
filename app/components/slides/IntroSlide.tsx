import ImageFlipper from '../ui/ImageFlipper';

function IntroSlide() {

  return (
    <>
      <div className="intro--content__sticker content__sticker">
        <ImageFlipper
          images={["/images/avatars/selfie.jpg", "/images/avatars/jump.webp"]}
          className="intro--content__picture"
        />
      </div>

      <div className="intro--container slide">
        <h2 className="intro--content__title content__title">Anna Yang</h2>
        <article className="intro--content__description content__description">
          <p>
            I am a frontend developer <wbr />based in Taichung, Taiwan.
            My job is to build frontend for e-commerce platforms for international companies.
          </p>
          <p>
            I have been developing CMS with Angular, and when coding casually, I tend to use React.
            It is a normality for me to learn new things and pick up frameworks.
          </p>
          <p>
            In addition to development,
            I work with teams from different projects and efficiently resolve technical bottlenecks.
            I am always eager to bring innovative solutions to the table.<br />
          </p>
          <p>
            My knowledge covers SEO tactics, user interface and user experience improvement.<br />
            I also love to share my knowledge and experience in conference or with communities.<br />
            When I am not coding, I enjoy reading, traveling, and playing mechanical keyboards.<br />
          </p>
          <br />
        </article>
      </div>
    </>
  );
}

export default IntroSlide;