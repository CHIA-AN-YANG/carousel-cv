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