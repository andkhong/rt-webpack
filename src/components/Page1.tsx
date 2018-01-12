import * as React from 'react';
import { Link } from 'react-router-dom'

export default function Page1() {
    return (
        <div>
            Page 1
            <Link to="/2"> here </Link>
         </div>
    );
}

