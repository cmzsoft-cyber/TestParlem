import React from 'react';

const Customer = ({customer}) => {

    const { docType, docNum, email, customerId, givenName, familyName1, phone} = customer;

    return ( 
      
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">               
                <div className="text-sm text-gray-500">
                    { givenName }
                </div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                    { email }
                </div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                    { phone }
                </div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
            </td>
           
        </tr>
       
    );
}
 
export default Customer;