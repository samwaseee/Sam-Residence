import React from 'react';
import useAuth from '../../authentication/useAuth';

const UpdateProf = () => {

    const {user} = useAuth();

    console.log(user);

    return (
        <div>
            
        </div>
    );
};

export default UpdateProf;