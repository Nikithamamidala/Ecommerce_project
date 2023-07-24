import './Productview.css'
function Productview(){
    
    
    const product=JSON.parse(localStorage.getItem("currentProduct"));
    const addTocart=()=>{
        if(localStorage.getItem('cart')==null){
            localStorage.setItem("cart",JSON.stringify([]))
        }
       var cart=JSON.parse(localStorage.getItem('cart'));
       cart.push(product);
       localStorage.setItem('cart',JSON.stringify(cart));
       alert("product added to cart")
    }
    return(
      <div>
        <h1>Productview</h1>
        <div className="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src={product.imageUrl}></img></div>
						  
						</div>
					
						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{product.name}</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							
						</div>
						<p className="product-description">{product.description}</p>
						<h4 className="price">{product.price}</h4>
						
				
						<div className="action">
							<button className="add-to-cart btn btn-default" onClick={addTocart}>add to cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
     </div>
)
}
export default Productview;