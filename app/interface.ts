export interface Slide {
  id: number
  color: string
  buttonText?: string
  content?: Content
  title?: string
}

export interface Content {
  description?: string
  page?: string
}