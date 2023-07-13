// eslint-disable-next-line react/prop-types
function CalcButton({value, label, weight, onClick}) {
    return <button className="CalcButton" onClick={onClick} 
        style={{
            width: `${(weight || 1) * 70}px`,
        }}
    >
        {label || value}
    </button>
}
export default CalcButton;