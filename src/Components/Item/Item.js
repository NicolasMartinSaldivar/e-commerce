import './Item.css';

export default function Item ({name,price,stock}){
    return(
        <div>
            <p>Nombre : {name}</p>
            <p>Precio : {price}</p>
            <p>Stock: {stock}</p>
            {/* <img src={`./assets/product/${img}`} /> */}
            
        </div>
    )
}