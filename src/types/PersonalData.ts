export type BulletPoint = {
  heading?: string
  description: string
  highlight?: string
}

export type Experience = {
  title: string
  subtitle: string
  intervalYear: string
  intervalMonth: string
  duties: BulletPoint[]
}

export type Education = {
  title: string
  intervalYear: string
  degree: string
  grade: string
  achievements: BulletPoint[]
}

export type PersonalData = {
  _id: string
  about: string
  experiences: Experience[]
  education: Education[]
}
