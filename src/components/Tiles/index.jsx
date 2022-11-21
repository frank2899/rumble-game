import { EraserFill, XLg } from 'react-bootstrap-icons'
import styled from 'styled-components'
import useGeneratedRumble from '../../hooks/useGeneratedRumble'
import useInputField from '../../hooks/useInputWords'
import useTheme from '../../hooks/useTheme'
import { types } from './types'

export const CustomWrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const TilesWrapper = styled.div`
    display: flex;
    gap: 5px;
    border-radius: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2em;
    margin-top: 1.5em;
`

export const Tile = styled.div`
    padding : 15px;
    border-radius : .8rem;
    width : ${({ width }) => width || '80px'};
    height : ${({ height }) => height || '80px'};
    display : flex;
    align-items : center;
    justify-content : center;
    text-align-center;
    border : 2px solid ${({ theme }) => theme.primary};
    background-color : ${({ theme }) => theme.background};
    color : ${({ theme }) => theme.text};
    ${({ fontSize }) => `font-size : ${fontSize};`}
    font-weight : bolder;
    // transition : all .3s ease;
    cursor : pointer;
    user-select: none;
    box-shadow : 0px 0px 10px -4px ${({ theme }) => theme.primary};
    font-family: 'Archivo Black', sans-serif;

    ${({ selected, theme }) =>
        selected &&
        `
        background-color : ${theme.orange};
        color : ${theme.text};
        box-shadow : inset 0 0 5px 3px rgba(0,0,0,0.2),
        0px 0px 10px -4px ${theme.primary};
        `}

    &:hover{
        background-color : ${({ theme }) => theme.orange};
        color : ${({ theme }) => theme.text};
        box-shadow : inset 0 0 5px 5px rgba(0,0,0,0.2),
        0px 0px 10px -4px ${({ theme }) => theme.primary};
    }
`

const TextTiles = (props) => {
    const { generatedLetters } = useGeneratedRumble()
    const { inputWords, setInputWords } = useInputField()
    const { theme } = useTheme()

    const isSelected = (letter) => {
        return inputWords.indexOf(letter) !== -1 ? true : false
    }

    return (
        generatedLetters?.length && (
            <CustomWrapper {...props}>
                <TilesWrapper>
                    {generatedLetters?.map((e, i) => (
                        <Tile
                            key={i}
                            {...props}
                            onClick={() => setInputWords(`${inputWords}${e}`)}
                            selected={isSelected(e)}
                        >
                            {e}
                        </Tile>
                    ))}
                    <Tile
                        onClick={() => setInputWords('')}
                        data-tut="reactour__eraser"
                    >
                        <EraserFill
                            style={{
                                color: theme.text,
                                fontSize: '1.5em',
                            }}
                        />
                    </Tile>
                    <Tile
                        onClick={() =>
                            setInputWords(inputWords.replace(/.$/, ''))
                        }
                        data-tut="reactour__eraser"
                    >
                        <XLg
                            style={{
                                color: theme.text,
                                fontSize: '1.5em',
                            }}
                        />
                    </Tile>
                </TilesWrapper>
            </CustomWrapper>
        )
    )
}

TextTiles.propTypes = types

export default TextTiles
