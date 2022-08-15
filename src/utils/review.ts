export function splitReviewText(text: string, breaks: number[]) {
  // split text by space
  const splitText = text.split(" ")

  const lines = []
  let prevBreak = 0

  // populate lines and update prevBreak for each iteration
  for (const br of breaks) {
    lines.push(splitText.slice(prevBreak, prevBreak + br).join(" "))
    prevBreak += br
  }

  // check if extra text exists
  const extra = splitText.slice(prevBreak)
  let hasExtra = false

  // if extra, set to true
  if (extra.length) {
    hasExtra = true
  }

  return { lines, hasExtra }
}