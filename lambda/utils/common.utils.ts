export const createResponse = (statusCode: number, body: any) => {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }
}

export const delimiterCheck = (input: string): { body: string, imagePrompt: string } => {
  const startDelimiter = '<<<'
  const endDelimiter = '>>>'
  const startIndex = input.indexOf(startDelimiter)
  const endIndex = input.indexOf(endDelimiter)

  if (startIndex !== -1 && endIndex !== -1) {
    console.log(`Delimited Prompt Detected in Response`)
    const body = input.slice(0, startIndex).trim()
    const imagePrompt = input.slice(startIndex + startDelimiter.length, endIndex).trim()
    return { body, imagePrompt }
  }

  return { body: input.trim(), imagePrompt: '' }
}
