// this function receives a url and returns the domain of that url
export function retrieveDomain(url: string): string {
  const domain = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)
  return domain ? domain[2] : ""
}
