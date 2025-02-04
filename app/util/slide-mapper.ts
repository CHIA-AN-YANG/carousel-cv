import IntroSlide from '../components/slides/IntroSlide';
import ContactSlide from '../components/slides/ContactSlide';
import ProjectsSlide from '../components/slides/ProjectsSlide';
import WowProjectSlide from '../components/slides/WowProjectSlide';
import OhgarProjectSlide from '../components/slides/OhgarProjectSlide';

interface SlideMap {
  [key: string]: React.FC
}
const map: SlideMap = {
  'intro': IntroSlide,
  'contact': ContactSlide,
  'projects': ProjectsSlide,
  'wowProject': WowProjectSlide,
  'ohgarProject': OhgarProjectSlide,
}


export function slideMapper(componentKey: string): React.FC {
  return map[componentKey];
}