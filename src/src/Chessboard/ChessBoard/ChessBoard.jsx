import './ChessBoard.css'
import Row from '../Row/Row'
// eslint-disable-next-line react/prop-types
function ChessBoard({ size, colorEven, colorOdd }){
    let arr2 = Array.from(Array(size).keys());
    let rowType;
    return(
        <div className='board'>
            {
                arr2.map(idx => {
                   rowType = idx%2 == 0? 'even':'odd';
                   return(
                    // eslint-disable-next-line react/jsx-key
                    <Row key={idx} size={size} rowType={rowType} colorEven={colorEven} colorOdd={colorOdd}/>
                   ) 
                })
            }
        </div>
    )
}
export default ChessBoard