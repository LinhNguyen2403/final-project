import './Cell.css'
// eslint-disable-next-line react/prop-types
function Cell({ cellType, colorEven,colorOdd }) {
    const styleObj = {
        backgroundColor: cellType === 'black'?colorEven:colorOdd
    }
    return(
        <div className={ cellType } style={styleObj}></div>
    )
}

export default Cell