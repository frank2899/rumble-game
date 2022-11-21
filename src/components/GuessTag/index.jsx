import { Info } from 'react-bootstrap-icons'
import useTheme from '../../hooks/useTheme'
import styled from 'styled-components'
import { Fragment, useMemo } from 'react'
import useDictionary from '../../utils/dictionary'
// import ReactTooltip from "react-tooltip"
// import DefinitionWrapper from "./components/Definition"

const Tags = styled.p`
    display: block;
    border-radius: 5px;
    padding: 4px 10px;
    background-color: ${({ theme }) => theme.invertedContrast};
    color: ${({ theme }) => theme.contrast};
    font-size: 0.8em;
    cursor: pointer;
    user-select: none;
`

const GuessTags = (props) => {
    const { theme } = useTheme()
    const defineWord = useDictionary(props?.data)

    // const def = useMemo(async () => {
    //     console.log(await defineWord)
    //     return await defineWord
    // },[props.data])

    return (
        <Fragment>
            <Tags
                className="code"
                data-for={`GUESS_TAG_${props.data}`}
                data-tip
            >
                {props.data}{' '}
                <Info
                    color={theme.contrast}
                    cursor="pointer"
                    style={{ margin: '0 0 -1px -3px' }}
                />
            </Tags>
            {/* <ReactTooltip id={`GUESS_TAG_${props.data}`} place="top" effect="solid">
                {
                    (
                        ((def.length !== 0) ||
                        (def?.title === "No Definitions Found"))
                    ) ? (
                        <DefinitionWrapper def={def[0] || def}/>
                    ) : "No Definitions Found"
                }
            </ReactTooltip> */}
        </Fragment>
    )
}

export default GuessTags
