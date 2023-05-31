import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
function Product(){
    const [product,setProduct] = useState({
        "name":"",
        "price":0,
        "description":"",
        "imageUrl":"",
        "quantity":0,
        "seller":""
    })
    const formRef = React.useRef();
   

    const [products,setProducts] = useState([])

    const updateState = (event) =>{
        var name = event.target.name;
        var value = event.target.value;
        setProduct({...product,[name]:value})
    }
    useEffect (() => {
        getProducts();
    },[])
    const addProduct = (event) => {
        event.preventDefault();
        console.log(product);
        axios.post("http://localhost:9091/product/add",product).then(
            response => {
                console.log("response",response);
                formRef.current.reset();
                getProducts();
            },
            error => {
                console.log(error)
            }
        )
      

    }
    const displayProducts = () => {
        let list = products.map(product => {
            return <tr key={product.name}><td>{product.id}</td><td><img style = {{width:"60px", height:"64px"}} src={product.imageUrl}></img></td><td>{product.name}</td><td>{product.price}</td><td><button onClick={() => deleteProduct(product.id)}>Delete</button></td><td><button onClick={() =>editProduct(product.id)}>Edit</button></td></tr>
        }
        )
        return list;
    }
    const editProduct = (productId) => {
        // axios.update("http://localhost:9091/product/update",{data : {""}})

    }
    const deleteProduct = (prodId) => {
        axios.delete("http://localhost:9091/product/delete",{data : {"id":prodId}}).then(
            response => {
                console.log(response);
                getProducts();
            },
            error => {
                console.log(error)
            }
        )
    }
    const getProducts = () => {
        axios.get("http://localhost:9091/product/list").then(
            response => {
                console.log("response.data",response.data)
                setProducts(response.data)
            },
            error => {
                console.log(error)
            }
        )
    }
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Add Product</h1>
            <form ref={formRef} style={{textAlign:"center"}}>
                <input onChange={updateState} type="text" name="name" placeholder="Product name"></input><br></br><br></br>
                <input onChange={updateState} type="number" name="price" placeholder="Price here"></input><br></br><br></br>
                <input onChange={updateState} type="text" name="description" placeholder="Description"></input><br></br><br></br>
                <input onChange={updateState} type="text" name="imageUrl" placeholder="ImageUrl here"></input><br></br><br></br>
                <input onChange={updateState} type="number" name="quantity" placeholder="Quantity here"></input><br></br><br></br>
                <input onChange={updateState} type="text" name="seller" placeholder="Seller here"></input><br></br><br></br>
                
                <button onClick={addProduct}>Add Product</button>
            </form>
            <hr></hr>


            <table border="1" style = {{width:"100%"}}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th> 
                        <th colSpan="2">Operation</th>
                    </tr>
                    
                </thead>
                <tbody style = {{textAlign: "center"}}> 
                    {displayProducts()}
                </tbody>
            </table>
        </div>
    )

}
export default Product;
// import React, { useEffect, useState } from "react";

// import axios from "axios";
// function Product(){
//     const[product,setProduct]= useState({
        
//             "name":"",
//             "price":0,
//             "description":"",
//             "imageUrl":"",
//             "quantity":0,
//             "seller":""
        
//     })
//     // const formRef= React.useRef();
//     const [products,setProducts]= useState([]);
//     const updateState=(event)=>{
//         var name= event.target.name;
//         var value=event.target.value;
//         setProduct({...product,[name]:value});
//     } 
//     useEffect(()=>{
//         getProduct();
//     },[])
//     const addproduct=(event)=>{
//         event.preventDefault();
//         console.log(product);
//         axios.post("http://localhost:9091/product/add",product).then(
//             response =>{
//                 console.log("response",response) ;
//                 getProduct();
//             },
//             error=>{
//                 console.log(error);
//             }
//         )
        
//         }
//         const displayProducts=()=>{
//             let list = products.map(product=>{
//                 return <tr key={product.name}> <td>{product.id}</td><td>{product.name}</td><td>{product.price}</td></tr>
//             })
//             return list;
//         }
//         // const displayProducts = () => {
//         //     let list = products.map(product=> {
    
//         //         return
//         //          <tr key={product.name}> <td>{product.id}</td><td>{product.name}</td><td>{product.price}</td></tr>
//         //     })
//         //     return list;
//         // }
    
//         const getProduct =()=>{
//         axios.get("http://localhost:9091/product/list").then(
//             response=>{
//                 console.log("response.data",response.data)
//                 setProduct(response.data);
//             },
//             error=>{
//                 console.log(error);
//             }
//         )}
//     return(
//         <div>
//           <h1 style={{textAlign:"center"}}>Products</h1>
//         <form style={{textAlign:"center"}}>
//             <input onChange={updateState} type="text" name="name" placeholder="name"></input><br></br>
//             <input onChange={updateState} type="number" name="price" placeholder="price"></input><br></br>
//             <input onChange={updateState} type="text" name="description" placeholder="description"></input><br></br>
//             <input onChange={updateState} type="text" name="imageUrl" placeholder="imageUrl"></input><br></br>
//             <input onChange={updateState} type="number" name="quantity" placeholder="quantity"></input><br></br>
//             <input onChange={updateState} type="text" name="seller" placeholder="seller"></input><br></br>
//             <button onClick={addproduct}>Add Product</button>
//         </form>
//         <hr></hr>
//         <table  border="1" style={{width:"100%"}}>
//             <thead>
//                 <tr>
//                 <th> id </th>
//                 <th> name </th>
//                 <th> price </th></tr>
//             </thead>
//             <tbody>
//                 {displayProducts()}
//             </tbody>
                
           
//         </table>
//         </div>
//     )
// }
// export default Product;