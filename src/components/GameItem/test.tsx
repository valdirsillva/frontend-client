import { screen } from '@testing-library/react'

import GameItem from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const props = {
  img: 'https://images.pexels.com/photos/671629/pexels-photo-671629.jpeg',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<GameItem {...props} />)

    // Verificar se o title foi renderizado
    // Verificar se o price foi renderizado
    // Verificar se a imagem foi renderizada com o src e alt corretos
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument()
    expect(screen.getByText('R$ 215,00')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.img)
  })

  it('should render the item with download link', () => {
    const downliadLink = 'https://link'

    renderWithTheme(<GameItem {...props} downloadLink={downliadLink} />)

    expect(screen.getByRole('link', { name: `Get ${props.title} here` })).toHaveAttribute('href', downliadLink)
  })

  it('should render the payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: '/img/cards/mastercard.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src', paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})