import React from "react";
import { Link } from 'react-router-dom';
import '../styles/LinkBtns.css';

const LinkBtns = () => (
    <div>
        <Link to='/photography' className='linkBtn'>Photography</Link>
    </div>
);

export default LinkBtns;