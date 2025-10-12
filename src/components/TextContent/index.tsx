import Heading from '../Heading'
import * as S from './styles'

export type TextContentProps = {
  title?: string
  content: string
} 

const TextContent = ({ title, content }: TextContentProps) => (
  <S.Wrapper>
    {/* Dupla negação p/ transformar em um booleano */}
    {!!title && (
      <Heading lineLeft lineColor='secondary'>{title}</Heading>
    )}

    <div dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default TextContent