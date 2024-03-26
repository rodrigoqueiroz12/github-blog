import ReactMarkdown, { Components, Options } from 'react-markdown'

import { A } from './_tags/a'
import { Code } from './_tags/code'
import { H3 } from './_tags/h3'
import { H4 } from './_tags/h4'
import { Hr } from './_tags/hr'
import { Li } from './_tags/li'
import { P } from './_tags/p'
import { Pre } from './_tags/pre'
import { Strong } from './_tags/strong'
import { Ul } from './_tags/ul'

type MarkdownProps = Readonly<Options>

export const Markdown = (props: MarkdownProps) => {
  const components: Partial<Components> = {
    h3: (props) => <H3 {...props} />,
    h4: (props) => <H4 {...props} />,
    p: (props) => <P {...props} />,
    code: (props) => <Code {...props} />,
    pre: (props) => <Pre {...props} />,
    hr: (props) => <Hr {...props} />,
    ul: (props) => <Ul {...props} />,
    li: (props) => <Li {...props} />,
    a: (props) => <A {...props} />,
    strong: (props) => <Strong {...props} />,
  }

  return <ReactMarkdown {...props} components={components} />
}
