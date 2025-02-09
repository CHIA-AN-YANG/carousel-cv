import IntroSlide from '../components/slides/IntroSlide';
import ProjectsSlide from '../components/slides/ProjectsSlide';
import OhgarProjectSlide from '../components/slides/OhgarProjectSlide';
import TalksSlide from '../components/slides/TalksSlide';
import SkillsSlide from '../components/slides/SkillsSlide';

interface SlideMap {
  [key: string]: React.FC
}
const map: SlideMap = {
  'intro': IntroSlide,
  'talks': TalksSlide,
  'projects': ProjectsSlide,
  'skills': SkillsSlide,
  // 'wowProject': WowProjectSlide,
  'ohgarProject': OhgarProjectSlide,
}


export function slideMapper(componentKey: string): React.FC {
  return map[componentKey];
}