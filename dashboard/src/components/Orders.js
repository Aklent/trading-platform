import React from 'react';
import { Link } from 'react-router-dom';
const Orders=()=> {
    return ( 
        <div className='orders'>
            <div className='no-orders'>
                <p>you havent placed any orders</p>

                <Link to={"/"} className="btn">
                    Get started
                </Link>
            </div>
        </div>
     );
}

export default Orders;