/**
 * One icon per resource, chosen from its title.
 *
 * Same drawing style as the shop thumbnails — Feather-weight strokes on a
 * 24×24 grid — so a guide looks the same whether you meet it in the Hub or
 * the shop. Keywords are checked in order, so put the specific ones first:
 * "birth ball" has to beat "birth", and "yoga" has to beat "postpartum".
 */

const PATHS = {
  book: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
  clipboard: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2 M8 2h8v4H8z M9 13l2 2 4-4',
  moon: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z',
  peanut: 'M14 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z M21 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z',
  activity: 'M22 12h-4l-3 9-6-18-3 9H2',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4',
  clock: 'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z M12 6v6l4 2',
  heart: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
  message: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  pillars: 'M3 21h18 M3 8h18 M12 3 3 8h18z M6 8v13 M12 8v13 M18 8v13',
  move: 'M5 9 2 12l3 3 M9 5l3-3 3 3 M15 19l-3 3-3-3 M19 9l3 3-3 3 M2 12h20 M12 2v20',
  meditate: 'M15 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8 M2 17h20',
  calendar: 'M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M16 2v4 M8 2v4 M3 10h18',
  pencil: 'M12 20h9 M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z',
  headphones: 'M3 18v-6a9 9 0 0 1 18 0v6 M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z',
  layers: 'M12 2 2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5',
  droplet: 'M12 2.7 6.7 8a7.5 7.5 0 1 0 10.6 0z',
  home: 'M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z',
  doc: 'M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.6a1 1 0 0 1 .7.3l5.4 5.4a1 1 0 0 1 .3.7V19a2 2 0 0 1-2 2z',
} as const

export type IconName = keyof typeof PATHS

/** Most specific keywords first — the first hit wins. */
const RULES: [RegExp, IconName][] = [
  [/peanut/i, 'peanut'],
  [/birth ball|birth-ball|rebozo|counterweight|biomechanic/i, 'move'],
  [/yoga|meditat|relaxation|mindful|calm/i, 'meditate'],
  [/movement|activit|exercise/i, 'activity'],
  [/pillar/i, 'pillars'],
  [/core|stability/i, 'shield'],
  [/induction/i, 'clock'],
  [/caesarean|c-section|premature|trauma|breastfeed/i, 'heart'],
  [/script|prompt/i, 'message'],
  [/partner/i, 'users'],
  [/affirmation|colour|coloring|colouring|print/i, 'pencil'],
  [/agenda|week|planner|schedule/i, 'calendar'],
  [/mp3|audio|track|listen/i, 'headphones'],
  [/bundle|toolkit|tool kit|pack/i, 'layers'],
  [/pool|water|hypnobirth/i, 'droplet'],
  [/door|home|sign/i, 'home'],
  [/fourth trimester|postpartum|night|sleep/i, 'moon'],
  [/plan|checklist|outline|session/i, 'clipboard'],
  [/handbook|ebook|book|guide/i, 'book'],
]

export function pickIcon(title: string): IconName {
  for (const [re, name] of RULES) if (re.test(title)) return name
  return 'doc'
}

export default function ResourceIcon({
  title,
  size = 18,
  strokeWidth = 1.5,
}: {
  title: string
  size?: number
  strokeWidth?: number
}) {
  const d = PATHS[pickIcon(title)]
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
