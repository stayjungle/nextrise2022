import { csvParse } from 'd3-dsv'
import * as fs from 'fs/promises'

import type { Answer, Eval, Foods, Step } from '$lib/type'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
  const steps: Step[] = await fetchSteps()
  const evals: Eval[] = await fetchEvals()
  const foods: Foods = await fetchFoods()
  return { body: { steps, evals, foods } }
}

async function fetchSteps(): Promise<Step[]> {
  const csv = await fs.readFile('./data/ebti_steps.csv', 'utf-8')
  const rows = csvParse(csv)
  const cols = rows.columns.slice(2)
  const results: Step[] = []

  rows.forEach(rawRow => {
    const question = rawRow['질문']
    const answer = rawRow['선택지'] as string
    const points: Record<string, number> = {}
    cols.forEach(col => (points[col] = +(rawRow[col] || 0)))
    const answerDict: Answer = { answer, points }

    if (question) results.push({ question, answers: [] })
    results[results.length - 1].answers.push(answerDict)
  })

  return results
}

async function fetchEvals(): Promise<Eval[]> {
  const csv = await fs.readFile('./data/ebti_evals.csv', 'utf-8')
  return csvParse(csv) as Eval[]
}

async function fetchFoods(): Promise<Foods> {
  const csv = await fs.readFile('./data/ebti_foods.csv', 'utf-8')
  const rows = csvParse(csv)
  const results: Foods = {}

  rows.forEach(rawRow => {
    const foodKey = rawRow.section as string
    results[foodKey] = {
      korName: rawRow.korName as string,
      engName: rawRow.engName as string,
      servingSize: +(rawRow.servingSize || 0),
      calories: +(rawRow.calories || 0),
    }
  })

  return results
}
