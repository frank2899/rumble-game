import styled from 'styled-components'

const FooterWrapper = styled.footer`
    display : flex;
    justify-content:space-between;
    padding : 1rem;
    align-items-center;
    position:fixed;
    width :100%;
    bottom : 0;
    left : 0;
    gap : 1rem;
`
const FooterText = styled.a`
    text-decoration: none;
    font-weight: bolder;
    font-size: 0.5em;
    color: ${({ theme }) => theme.text};
`

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterText href="http://github.com/frank2899">
                Developed By : Aughus Bueno
            </FooterText>
            <FooterText href="https://github.com/kidrv1">
                Design idea : Angel Rivera
            </FooterText>
        </FooterWrapper>
    )
}

export default Footer
