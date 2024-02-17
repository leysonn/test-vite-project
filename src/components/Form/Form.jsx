import { useState } from 'react';
import './Form.scss';

function Form({ width }) {
    const [email, setEmail] = useState('');

    function onSubmit(event) {
        if (email != '') alert('Your email: ' + email);
        event.preventDefault();
    }

    return (
        <form className="form-container" onSubmit={onSubmit}>
            <input className="input" style={{ width: width }} type="email" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} />
            <input className="button" type="submit" value="Get a Quote" />
        </form>
    );
}

export default Form;
