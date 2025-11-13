import axios from "axios"
import useAuth from "./useAuth"
import { useEffect } from "react";
import { useNavigate } from "react-router";

const instance = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosSecure = () => {

    const { user,signOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        // request interceptor 
        const requestInterceptor = instance.interceptors.request.use((config) => {
            // console.log('Config a ki ache, ', config);
            config.headers.authorization = `Bearer ${user.accessToken}`
            return config;
        });

        // response interceptor 
        const responseInterceptor = instance.interceptors.response.use((res)=>{
            return res;
        }, (err)=>{
            // console.log(err);
            const status = err.status;
            if(status === 403 || status === 401){
                // console.log('apni mara khaichen mama');
                signOutUser()
                    .then(()=>{
                        navigate('/auth/register');
                    })
            }
        })

        return ()=>{
            instance.interceptors.request.eject(requestInterceptor); 
            instance.interceptors.response.eject(responseInterceptor);
        }
    }, [user,signOutUser,navigate])

    return instance;
}

export default useAxiosSecure;