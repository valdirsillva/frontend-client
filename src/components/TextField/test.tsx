import userEvent from '@testing-library/user-event'
import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'
import { Email } from '@styled-icons/material-outlined'
import TextField from '.'

describe('<TextField />', () => {
  it('should render with Label', () => {
    renderWithTheme(<TextField label="Label" name="Field" id="Field" />)
    // TextField com o label="Label"
    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('should render without Label', () => {
    renderWithTheme(<TextField name="Field" id="Field" />)
    // TextField sem label="Label"
    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('should with placeholder', () => {
    renderWithTheme(<TextField placeholder="placeholder text" />)
    // Vefifica se o TextField contém placeholder
    expect(screen.getByPlaceholderText(/placeholder text/i)).toBeInTheDocument()
  })

  it('should changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Should is accessible by tab', async () => {
    renderWithTheme(
      <TextField label="TextField" name="TextField" id="TextField" />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    await userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should render with Icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should changes its value when typing', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField onInput={onInput} label="TextField" name="TextField" />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should render with Icon on the left side', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)
    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 0 })
  })

  it('should render with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )
    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('should is accessible by tab', async () => {
    const user = userEvent.setup() // importante para foco/tab

    renderWithTheme(<TextField label="TextField" name="TextField" />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    await user.tab()
    expect(input).toHaveFocus()
  })

  it('should ss not accessible by tab when disabled', async () => {
    const user = userEvent.setup() // importante para foco/tab

    renderWithTheme(<TextField label="TextField" name="TextField" disabled />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    await user.tab()
    expect(input).not.toHaveFocus()
  })
})
