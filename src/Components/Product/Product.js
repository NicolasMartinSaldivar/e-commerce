import React,{useState} from 'react';
import './Product.css'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Item from '../Item/Item.js'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';


export default function Product({stock}){
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
        <div className="Product">
            <h3>Producto</h3>
            <AddIcon onClick={updateItem}/>
            <p>{itemCount}</p>
            <RemoveIcon onClick={removeItem} />
            <Button onClick={AddShoppingCart}>Agregar al Carrito</Button>
            <span>stock:{stock}</span>

        <Container className="product-container">
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Item stock={10} img="remera.jpeg"/>
                </Grid>
                <Grid item xs={3}>
                    <Item stock={2} img="remera.jpeg"/>
                </Grid>
                <Grid item xs={3}>
                    <Item stock={3} img="remera.jpeg"/>
                </Grid>
                <Grid item xs={3}>
                    <Item stock={3} img="remera.jpeg"/>
                </Grid>

            </Grid>
        </Container>
        </div>

    )
}

