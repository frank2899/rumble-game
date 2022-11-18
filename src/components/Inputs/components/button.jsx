import { ArrowReturnLeft } from 'react-bootstrap-icons'
import styled from 'styled-components'

export const CustomButton = styled.button`
    padding: 10px 15px;
    border: 0.3px solid ${({ theme }) => theme.primary};
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 3px;
`

const EnterButton = (props) => {
    return (
        <CustomButton {...props} className="code">
            ENTER <ArrowReturnLeft style={{ marginBottom: '-3.5px' }} />
        </CustomButton>
    )
}

export default EnterButton
