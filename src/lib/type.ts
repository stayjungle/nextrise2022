export type Answer = {
  answer: string
  points: Record<string, number>
}

export type Step = {
  question: string
  answers: Answer[]
}

export type Eval = {
  section: string
  point: string
  textPos: string
  textNeg: string
}

export type Food = {
  korName: string
  engName: string
  servingSize: number
  calories: number
}

export type Foods = Record<string, Food>
