import React from 'react';

const Product = ({product}) => {

    const { customerId, productName, productTypeName, numeracioTerminal, soldAt } = product

    return ( 
     
        <article className="overflow-hidden rounded-lg shadow-lg">           

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg text-2xl text-red-500">                    
                    { productName }
                </h1>
                <p className="text-grey-darker text-sm">
                    { soldAt }
                </p>
            </header>

            <p className="p-4">
                Tipus: { productTypeName }
            </p>

            <p className="p-4">
                Terminal: { numeracioTerminal }
            </p>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <p className="text-sm">
                        Customer ID: { customerId }
                    </p>              
            </footer>

        </article>
      
            
    );
}
 
export default Product;