import React from "react";
function Cart(){
    const forceUpdate = React.useState({})[1].bind(null, {}) 
    var cart= JSON.parse(localStorage.getItem("cart"))
    const removeproduct=(productId)=>{
        alert("remove");
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        cartItems.forEach((item, i) => {
            if (item.id == productId) {
                cartItems.splice(i, 1);
                alert("product removed successfully!");
                forceUpdate();
            }
        })
        localStorage.setItem('cart', JSON.stringify(cartItems));

    }
    const renderitems=()=>{
        if(cart.length==0){
            return <div>
                <h1>No iteams in cart</h1>
            </div>
        }
       let list= cart.map(product=>{
            return <tr>
        <td className="col-md-6">
        <div className="media">
            <a className="thumbnail pull-left" href="#"> <img class="media-object" src={product.imageUrl} style={{width: "72px", height: "72px"}}/> </a>
            <div className="media-body">
                <h4 className="media-heading"><a href="#">{product.name}</a></h4>
            </div>
        </div></td>
        <td className="col-md-1" style={{textAlign:"center"}}>
        <input type="email" class="form-control" id="exampleInputEmail1" value="2"/>
        </td>
        <td className="col-md-1 text-center"><strong>{product.price}</strong></td>
        <td className="col-md-1">
        <button type="button" className="btn btn-danger" onClick={()=>removeproduct(product.id)}>
            <span className="glyphicon glyphicon-remove"></span> Remove
        </button>
      </td>     
      </tr> 
        })
        return list;
    }
    return(
        <div>
            <h1>cart</h1>
            <div className="container">
    <div className="row">
        <div className="col-sm-12 col-md-10 col-md-offset-1">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Total</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {renderitems()}
                         
                      <br></br>            
            
                        <button   type="button" className="btn btn-success"> 
                            Checkout <span className="glyphicon glyphicon-play"></span>
                        </button>
                    
                </tbody>
            </table>
        </div>
    </div>
</div>
        </div>
    )
}
export default Cart;