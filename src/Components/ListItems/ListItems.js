import './ListItems.css'
import Item from '../Item/Item.js'
import Button from '../Button/Button.js'
import Product from '../Product/Product';
import AddIcon from '@mui/icons-material/Add';



export default function ListItems({name,price}) {
    const dataProducts = [{name: 'Remera 1',
                price: '300',
                stock:'4',
                img:'remera1.png'},
                {name: 'Remera 2',
                price: '600',
                stock:'8',
                img:'remera1.png'}]
    return(
        <div>
            <h2>Producto</h2>
            {dataProducts.map((product)=>{
                return(
                    <Item name={product.name} price={product.price} stock={product.stock} img={product.img}/>
                )
            })}
        
        
            <h4>
                <Product  stock={10}/>   
            <Button>
            <AddIcon />
            </Button>    
            </h4>            
        </div>    
    )
}
