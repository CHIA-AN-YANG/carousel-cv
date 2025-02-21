import IntroSlide from '@/components/slides/IntroSlide';
import ProjectsSlide from '@/components/slides/ProjectsSlide';
import TalksSlide from '@/components/slides/TalksSlide';
import SkillsSlide from '@/components/slides/SkillsSlide';
import SoftPowerSlide from '@/components/slides/SoftPowerSlide';
interface SlideMap {
  [key: string]: React.FC
}

const map: SlideMap = {
  'intro': IntroSlide,
  'talks': TalksSlide,
  'projects': ProjectsSlide,
  'skills': SkillsSlide,
  'softpower': SoftPowerSlide
}


export async function slideMapper(componentKey: string): Promise<React.FC> {
  return await map[componentKey] || map['empty'];
}