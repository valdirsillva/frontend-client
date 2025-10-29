import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'
import Gallery from '.'

import mockItems from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    expect(screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })).toHaveAttribute('src', mockItems[0].src)
    expect(screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })).toHaveAttribute('src', mockItems[1].src)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    // Selecionar o modal
    const modal = screen.getByLabelText('modal')

    // Verificar se o modal está escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    fireEvent.click(screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }))
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle open modal with selected image', async () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)
    // Clica na thumbanil
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    )
    // Expero que a imagem da thumbnail esteja aberta
    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
    // Espero que o pai do pai da imagem tenha a classe .slick-active
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should handle close modal when or button clicked', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    // Selecionar o modal
    const modal = screen.getByLabelText('modal')

    fireEvent.click(screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }))

    // clicar para fechar o modal
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when ESC escape button is pressed', () => {
    const { container } = renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    // Selecionar o modal
    const modal = screen.getByLabelText('modal')

    fireEvent.click(screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }))

    fireEvent.keyUp(container, { key: 'Escape' })
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})