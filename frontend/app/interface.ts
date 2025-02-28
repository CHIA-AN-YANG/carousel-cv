import { EmblaOptionsType } from 'embla-carousel'

export interface Slide {
  id: number
  color: string
  title?: string
  content?: Content
  titleMobile?: string
}

export interface Content {
  description?: string
  slideKey?: string
}

export type CustomEmblaOptions = EmblaOptionsType & {
  name?: string;
};