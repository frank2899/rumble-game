import styled from 'styled-components'

const DefWrapper = styled.div`
    padding: 5px;
`
const SmallBlock = styled.small`
    display: block;
`

const DefinitionWrapper = ({ def }) => {
    return (
        <DefWrapper>
            <SmallBlock>{def?.phonetic || '-'}</SmallBlock>
        </DefWrapper>
    )
}

export default DefinitionWrapper
