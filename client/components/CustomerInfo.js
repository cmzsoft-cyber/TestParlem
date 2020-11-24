import React from 'react';

const CustomerInfo = ({customer}) => {
    
    const { docType, docNum, email, customerId, givenName, familyName1, phone } = customer

    return ( 
        <>
            <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 card-user">
                <img className="w-full p-5" src="/static/img/avatar.png" alt="Imatge Customer" />
                <div className="px-6 py-4 npt">
                    <div className="font-bold text-xl mb-2">
                        { givenName }
                    </div>
                    <p className="text-grey-darker text-base">
                        email: { email }<br />
                        { docType } : { docNum }<br />
                        familia: { familyName1 }<br />
                        telefon: { phone }<br />
                    </p>
                </div>
            
            </div>
        </>
    );
}
 
export default CustomerInfo;