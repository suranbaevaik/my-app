import React from 'react';

const Form = () => {
    return (
        <form>
            <div>
                <label htmlFor="nameUser">Name</label>
                <input type="text" id="nameUser" name="nameUser"/>
            </div>
            <div>
                <label htmlFor="phoneUser">Phone Number</label>
                <input type="tel" id="phoneUser" name="phoneUser"/>
            </div>
        </form>
    );
};

export default Form;