import { getSiteSettings } from './sanity-queries'

/**
 * Where birth-hood works.
 *
 * One list, edited in the Studio (Site Settings → Areas covered), feeding both
 * the visible coverage card and the `areaServed` structured data on every page.
 * Adding a town in the CMS puts it in front of Google without anyone needing a
 * page called "Doula in <town>".
 */
export const DEFAULT_COUNTIES = [
  'Leicestershire',
  'Northamptonshire',
  'Derbyshire',
  'Nottinghamshire',
  'Warwickshire',
  'Staffordshire',
]

/** Not shown as a list on the page — these carry the local search signal. */
export const DEFAULT_TOWNS = [
  'Leicester',
  'Loughborough',
  'Coalville',
  'Ashby-de-la-Zouch',
  'Shepshed',
  'Melton Mowbray',
  'Swadlincote',
  'Nuneaton',
  'Nottingham',
  'Derby',
  'Burton upon Trent',
  'Tamworth',
  'Hinckley',
  'Market Harborough',
  'Northampton',
  'Lichfield',
]

export type Areas = { counties: string[]; towns: string[] }

export async function getAreas(): Promise<Areas> {
  const settings = await getSiteSettings()
  return {
    counties: settings?.areasCounties?.length ? settings.areasCounties : DEFAULT_COUNTIES,
    towns: settings?.areasTowns?.length ? settings.areasTowns : DEFAULT_TOWNS,
  }
}

/** The `areaServed` value for LocalBusiness / Service schema. */
export function areaServed({ counties, towns }: Areas): string[] {
  return [
    'North West Leicestershire',
    ...counties,
    ...towns,
    'Midlands',
    'United Kingdom (online)',
  ]
}

/** "Leicester, Loughborough, Coalville, Ashby-de-la-Zouch and surrounding areas" */
export function townSentence(towns: string[], howMany = 4): string {
  const named = towns.slice(0, howMany)
  if (named.length === 0) return 'the surrounding areas'
  return `${named.join(', ')} and the surrounding areas`
}
