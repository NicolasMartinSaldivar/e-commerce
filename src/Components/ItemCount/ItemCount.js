import React,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import {ThemeProvider } from '@mui/material/styles';


export default function ItemCount(stock,img){
    const [itemCount,setItemCount] = useState(0);
    const updateItem = () =>{
        if(itemCount < stock){
        setItemCount(itemCount + 1);
        
    }
    }
    const removeItem = ()=>{
        if(itemCount >= 1){
        setItemCount(itemCount - 1);
        
        }

    }
    const AddShoppingCart = ()=>{
        alert("Se agrego al caritto")
    }
        
    return(
        <div className="card-item-product">
            <ThemeProvider>
                <span className="stock-text">Stock: {stock}</span>
            <div className="item-image">
                <img src={`../../assets/${img}`} alt="product image"/>
            </div>
                    <div className="item-info">
                        <h2>Anillo</h2>
                            <div className="item-count">
                                <div className="item-count_info">
                                    <span>Cantidad: </span>
                                </div>
                                <div className="item-count_buttons">
                                    <AddIcon onClick={updateItem}/>
                                    <p>{itemCount}</p>
                                    <RemoveIcon onClick={removeItem} />
                                </div>
                            </div>
                                     <Button onClick={AddShoppingCart}>Agregar al Carrito</Button>
            </div>
            </ThemeProvider>
        </div>

    )
}