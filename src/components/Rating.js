import React from 'react'

function Rating(props){

    const {rating,numReviews} = props;
    //let, var, const,
    //let, const define a variable with a block scope which means its accessible only in { }
    // var defines a variable with a function scope which means its accessible in function () {}
    // const means constant , it cannot be re declared or updated
    //let can be updated, but cannot be redeclared
    // var you can do anything



    return(
        //in react only one parent div is allowed in return of a functional component
        //this looks like html, but actually its jsx




        <div>


                    <div className="rating">
                        <span>
                            <i className={rating>=1?"fa fa-star": rating >0.5? 'fa fa-star-half-o':'fa fa-star-o'}></i>
                        </span>
                        <span>
                        <i className={rating>=2?"fa fa-star": rating >1.5? 'fa fa-star-half-o':'fa fa-star-o'}></i>
                        </span>
                        <span>
                        <i className={rating>=3?"fa fa-star": rating >2.5? 'fa fa-star-half-o':'fa fa-star-o'}></i>
                        </span>
                        <span>
                        <i className={rating>=4?"fa fa-star": rating >3.5? 'fa fa-star-half-o':'fa fa-star-o'}></i>
                        </span>
                        <span>
                        <i className={rating>=5?"fa fa-star": rating >4.5? 'fa fa-star-half-o':'fa fa-star-o'}></i>
                        </span>
                    </div>
            
        </div>

   

    );
}







