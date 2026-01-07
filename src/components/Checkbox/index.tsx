import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  isChecked = false,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}: CheckboxProps) => {
  // controlled component (state) - Quando trabalhamos com estado
  const [checked, setChecked] = useState(isChecked) // true => false => true

  const onChange = () => {
    const status = !checked
    setChecked(status)
    onCheck?.(status)
  }

  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        id={labelFor}
        onChange={onChange}
        checked={isChecked}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
