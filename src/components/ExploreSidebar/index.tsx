import { useState } from 'react'
import xor from 'lodash.xor'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Heading from '../Heading'
import Radio from '../Radio'
import * as S from './styles'
import { Close, FilterList } from '@styled-icons/material-outlined'
import { ParsedUrlQueryInput } from 'node:querystring'

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

type Values = ParsedUrlQueryInput

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const ExploreSidebar = ({ items, onFilter, initialValues = {} }: ExploreSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [values, setValues] = useState(initialValues)

  // []
  // ['windows']
  // ['windows', 'linux']
  const handleCheckbox = (name: string, value: string) => {
    // Pega a lista de valores atuais
    const currentList = (values[name] as []) || []
    // xor() compara a lista de valores atuais com o array
    setValues((s) => ({ ...s, [name]: xor(currentList, [value]) }))
  }


  // receiver name field and value
  const handleRadio = (name: string, value: string | boolean) => {
    setValues((s) => ({ ...s, [name]: value }))
  }


  const handleFilter = () => {
    setIsOpen(false)
    onFilter(values)
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>

      <S.Content>
        <S.Items>
          {items.map((item) => (
            <div key={item.title}>
              <Heading lineBottom lineColor='secondary' size='small'>
                {item.title}
              </Heading>

              {item.type === 'checkbox' && (
                item.fields.map((field) => (
                  <Checkbox
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    labelFor={field.name}
                    isChecked={(values[item.name] as string[])?.includes(
                      field.name
                    )} // [{ windows: true }]
                    onCheck={() => handleCheckbox(item.name, field.name)}
                  />
                ))
              )}

              {item.type === 'radio' && (
                item.fields.map((field) => (
                  <Radio
                    key={field.name}
                    id={field.name}
                    name={item.name}
                    value={field.name}
                    label={field.label}
                    labelFor={field.name}
                    defaultChecked={String(field.name) === String(values[item.name])}
                    onChange={() => handleRadio(item.name, field.name)}
                  />
                ))
              )}
            </div>
          ))}
        </S.Items>
      </S.Content>

      <S.Footer>
        <Button fullWidth size='medium' onClick={handleFilter}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default ExploreSidebar