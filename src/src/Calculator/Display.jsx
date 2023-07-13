// eslint-disable-next-line react/prop-types
function Display({value, result}) {
    return <div className="Display">
        <div className="operand">{value}</div>
        <div className="result">{result}</div>
    </div>
}
export default Display;