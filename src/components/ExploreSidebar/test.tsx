import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'
import ExporerSidebar from '.'
import items from './mock'
import userEvent from '@testing-library/user-event'

describe('<ExporerSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExporerSidebar items={items} onFilter={jest.fn()} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /sort by/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExporerSidebar items={items} onFilter={jest.fn()} />)

    expect(screen.getByRole('checkbox', { name: /under \$50/i })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    renderWithTheme(<ExporerSidebar items={items} onFilter={jest.fn()} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <ExporerSidebar
        items={items}
        onFilter={jest.fn()}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
      />
    )
    // Espero que o Checkbox esteja marcado
    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should filter with initial values', async () => {
    // Retorna uma função simulada (mock functions), também conhecidas como espiões (spies)
    const onFilter = jest.fn()

    renderWithTheme(
      <ExporerSidebar
        items={items}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    await userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toHaveBeenCalledWith({ windows: true, sort_by: 'low-to-high' })
  })

  it('should filter with checked values', async () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExporerSidebar
        items={items}
        onFilter={onFilter}
      />
    )

    await userEvent.click(screen.getByLabelText(/windows/i))
    await userEvent.click(screen.getByLabelText(/linux/i))
    await userEvent.click(screen.getByLabelText(/low to high/i))

    await userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toHaveBeenCalledWith({
      windows: true,
      linux: true,
      sort_by: 'low-to-high'
    })
  })

  it('should altern between radio options', async () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExporerSidebar
        items={items}
        onFilter={onFilter}
      />
    )

    await userEvent.click(screen.getByLabelText(/low to high/i))
    await userEvent.click(screen.getByLabelText(/high to low/i))

    await userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toHaveBeenCalledWith({
      sort_by: 'high-to-low'
    })
  })
})