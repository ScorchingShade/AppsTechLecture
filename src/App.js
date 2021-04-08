import logo from './logo.svg';
import './App.css';

import data from './data';

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="index.html">AmazonClone</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">SignIn</a>
            </div>
           
        </header>


        <main>

            <div className="row center">
                
                {   //CHange
                    //In javascript, Array.map() / map() is a function that allows you to transform any 
                    //array into a different array based upon some condition
                    //An array transformed by map() function will always have the same length as the original array
                    // Arr= size 6
                    // Arr.map = newArr
                    //newArr = size 6, but different values

                    //data.products.map()


                    data.products.map(singleProduct =>(

                        <div className="card">
                    <a href="index.html">
                       
                        <img className="medium" src={singleProduct.image} alt="product"></img>
                    </a>
                    <div className="card-body">
                        <a href="product.html">
                        <h2>{singleProduct.name}</h2>
                        </a>
                    <div className="price">
                        ₹ {singleProduct.price} 
                    </div>

                    <div className="rating">
                        <span>
                            <i className="fa fa-star"></i>
                        </span>
                        <span>
                            <i className="fa fa-star"></i>
                        </span>
                        <span>
                            <i className="fa fa-star"></i>
                        </span>
                        <span>
                            <i className="fa fa-star"></i>
                        </span>
                        <span>
                            <i className="fa fa-star"></i>
                        </span>
                    </div>
                        
                    </div>

                </div>

                    ))
                }


                


            </div>


        </main>
        <footer >A web template for React site</footer>
    </div>
  
  );
}

export default App;

