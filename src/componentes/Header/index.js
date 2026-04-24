
import Logo from'../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../iconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #fefefe;
  display: flex;
  justify-content: center;
`

function header() {
    return(
      <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
      </HeaderContainer>

    )
}

export default header