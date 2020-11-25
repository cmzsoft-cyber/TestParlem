import React from 'react';
import moment from 'moment'

const Product = ({product}) => {

    const { customerId, productName, productTypeName, numeracioTerminal, soldAt } = product

    const s_Date = moment(soldAt).format('DD/MM/YYYY');

    return ( 
     
        <article className="overflow-hidden rounded-lg shadow-lg">           

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg text-2xl text-red-500">                    
                    { productName }
                </h1>
                <p className="text-grey-darker text-sm">
                    { s_Date }
                </p>
            </header>

            <p className="p-4">
                Tipus: { productTypeName }
            </p>

            <p className="p-4">
                Terminal: { numeracioTerminal }
            </p>

            <footer>
                <p className="p-4">
                    Customer ID: { customerId }
                </p>              
            </footer>

        </article>
      
            
    );
}
 
export default Product;