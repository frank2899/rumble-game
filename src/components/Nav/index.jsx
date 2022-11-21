import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle'
import { BrightnessHigh, CupHot, Moon } from 'react-bootstrap-icons'
import useTheme from '../../hooks/useTheme'
import styled from 'styled-components'

const DonationBtn = styled.a`
    text-decoration: none;
    display: block;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.invertedBackground};
    color: ${({ theme }) => theme.contrast};
    font-size: 0.8em;
    cursor: pointer;
`

const Flex = styled.div`
    display: flex;
    ${({ justifyContent, alignItems, gap, flexDirection, flexWrap }) => `
    ${justifyContent && `justify-content: ${justifyContent};`}
    ${alignItems && `align-items: ${alignItems};`}
    ${gap && `gap: ${gap};`}
    ${flexDirection && `flex-direction: ${flexDirection};`}
    flex-wrap: wrap;
  `}
`
const Nav = () => {
    const { isDark, toggleTheme, theme } = useTheme()

    return (
        <Flex justifyContent="space-between" data-tut="reactour__last">
            <DarkModeToggle
                mode={isDark ? 'dark' : 'light'}
                light={
                    <BrightnessHigh
                        color={theme.text}
                        style={{ marginBottom: '-1.5px' }}
                    />
                }
                dark={
                    <Moon
                        color={theme.text}
                        style={{ marginBottom: '-1.5px' }}
                    />
                }
                size="sm"
                inactiveTrackColor={theme.dark}
                inactiveTrackColorOnHover="#f8fafc"
                inactiveTrackColorOnActive={theme.dark}
                activeTrackColor={theme.dark}
                activeTrackColorOnHover="#1e293b"
                activeTrackColorOnActive={theme.primary}
                inactiveThumbColor="#1e293b"
                activeThumbColor={theme.primary}
                onChange={() => toggleTheme()}
            />
            <DonationBtn
                target="_black"
                href="https://www.paypal.com/donate/?hosted_button_id=3D9Q2E22ADJUA"
            >
                DONATE <CupHot style={{ marginBottom: '-2px' }} />
            </DonationBtn>
        </Flex>
    )
}

export default Nav
