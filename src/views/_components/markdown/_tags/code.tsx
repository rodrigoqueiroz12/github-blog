import { ExtraProps } from 'react-markdown'

type CodeProps =
  | React.ClassAttributes<HTMLElement>
  | (React.HTMLAttributes<HTMLElement> & ExtraProps)

export const Code = (props: CodeProps) => {
  return (
    <code
      className="bg-card text-secondary-foreground rounded-sm border border-border px-1 py-0.5 font-mono leading-relaxed text-blue"
      {...props}
    />
  )
}
