import Button from '../Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  floatImage?: string // opcional
  backgroundImage: string
  buttonLabel: string
  buttonLink?: string
  alignment?: 'right' | 'left'
}

const Highlight = ({
  title,
  subtitle,
  floatImage,
  backgroundImage,
  buttonLabel,
  buttonLink,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper alignment={alignment} backgroundImage={backgroundImage}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
