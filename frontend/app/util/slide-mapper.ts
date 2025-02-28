import IntroSlide from '@/components/slides/IntroSlide';
import ProjectsSlide from '@/components/slides/ProjectsSlide';
import TalksSlide from '@/components/slides/TalksSlide';
import SkillsSlide from '@/components/slides/SkillsSlide';
import SoftPowerSlide from '@/components/slides/SoftPowerSlide';
import { JSX, ReactNode } from 'react';
interface SlideMap {
  [key: string]: () => JSX.Element;
}

const map: SlideMap = {
  'intro': IntroSlide,
  'talks': TalksSlide,
  'projects': ProjectsSlide,
  'skills': SkillsSlide,
  'softpower': SoftPowerSlide
}


export function slideMapper(componentKey: string): ReactNode {
  return map[componentKey]() ?? null;
}