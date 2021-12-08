import './ListItems.css'
import ItemCount from '../ItemCount/ItemCount'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import  CircularProgress  from '@mui/material/CircularProgress';
import { useEffect,useState } from 'react';



export default function ListItems() {
    const [loader,setLoader] = useState(true)
    const [products,setProducts] = useState([])
    const dataProducts = [
                {name: 'Anillo 1',
                price: '300',
                stock:'4',
                img:'Anillo(1).jpg'
            },
            {   name: 'Anillo 2',
                price: '600',
                stock:'8',
                img:'Anillo(2).jpg'
            }
    ]

    const getProducts = new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve(dataProducts)
        },2000)
    })
    
    useEffect(()=>{
        getProducts.then((data) =>{
            console.log("data de productos: ",data)
            setProducts(data)
            setLoader(false)
        })
    },[])

    return(
        <div>
            <h2>Productos</h2>
            {console.log("State Products:",products)}
            <Container className="product-container">
                {
                    loader ? 
                        <CircularProgress />
                     : <Grid container spacing={2}>
                     {
                         products.map( product =>{
                             return(
                                 <Grid item xs={3} key={product.id}>
                                     <ItemCount stock={product.stock} name={product.name}/>
                                 </Grid>
                             )
                         })
                     }
                     </Grid>
                }
                
            </Container>
        </div>    
    )
}
