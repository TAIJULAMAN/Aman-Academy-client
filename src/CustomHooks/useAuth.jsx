import { useContext } from 'react';
import { AuthContext } from '../Firebase/Authproviders';

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;