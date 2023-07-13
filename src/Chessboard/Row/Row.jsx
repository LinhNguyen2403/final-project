import Cell from '../Cell/Cell';
import './Row.css'
// eslint-disable-next-line react/prop-types
function Row({size, rowType, colorEven, colorOdd}){
    let arr = Array.from(Array(size).keys());
    let cellType;
    
    return(
        <div className={rowType}>
            {arr.map(idx => {
                if(rowType === 'odd'){
                    cellType = idx%2 == 0?'black':'white';

                } else {
                    cellType = idx%2 == 0?'white':'black';
                }
                return(
                    // eslint-disable-next-line react/jsx-key
                    <Cell key={idx} cellType={cellType} colorEven={colorEven} colorOdd={colorOdd}/>
                )
            })}
        </div>
    )
}
export default Row