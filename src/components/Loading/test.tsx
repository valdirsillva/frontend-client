import { screen } from '@testing-library/react'

import Loading from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Loading />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Loading />)
    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()
  })
})