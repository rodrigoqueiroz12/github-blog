import { ExtraProps } from 'react-markdown'

type PreProps = React.ClassAttributes<HTMLPreElement> &
  React.HTMLAttributes<HTMLPreElement> &
  ExtraProps

export const Pre = (props: PreProps) => {
  return (
    <pre
      className="bg-card relative my-2 block h-fit w-full overflow-hidden text-wrap rounded-md border border-border bg-post py-4 pl-4 pr-12 leading-relaxed text-text"
      {...props}
    >
      {props.children}
    </pre>
  )
}
