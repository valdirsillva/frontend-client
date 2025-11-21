import styled from 'styled-components'
import * as GameItensStyles from '@/components/GameItem/styles'
export const Wrapper = styled.main`
  ${GameItensStyles.Wrapper} {
    &::last-child: {
      border-bottom: 0;
    }
  }
`