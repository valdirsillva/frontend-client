import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'
import filterItemsMock from '@/components/ExploreSidebar/mock'
import { MockedProvider } from '@apollo/client/testing'
import { fetchMock, gamesMock } from './mocks'

import Games from '.'
import userEvent from '@testing-library/user-event'
import apolloCache from '@/utils/apolloCache'

jest.mock('@/app/templates/base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('@/components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} >
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )
    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]}
      >
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()

    // get => usar quando tem certeza do dado
    // query => Não tem o elemento
    // find => Usar para processos assíncronos, ele espera o elemento aparecer na tela
    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()

    expect(screen.getByText('Game 1')).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/Game 1/i)).toBeInTheDocument()

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))
    // Espero que encontre o proximo game
    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument()

    await screen.logTestingPlaygroundURL()
  })
})