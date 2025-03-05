interface BadgeProps extends React.HTMLAttributes<HTMLLIElement> {
  query: string | null
}

export function Badge({ query }: BadgeProps) {
  return <li className="badge">{query}</li>
}
