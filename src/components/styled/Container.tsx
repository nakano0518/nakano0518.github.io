import styled from '@emotion/styled'

type Props = {
    column?: 'column' | undefined;
}


const Container = styled.div((props: Props) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: props.column && 'column',
  justifyContent: props.column ? 'center' : 'space-evenly',
  alignItems: props.column ? 'space-evenly' : 'center'
}))

export default Container;
