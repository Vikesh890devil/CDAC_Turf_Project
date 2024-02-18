import axios from 'axios';
const URL ='http://localhost:6163';

const UserService={
    // Add users 
    addUser(Users){
        return axios.post(URL+"/userregister-api",Users);
    },
    //get all user details 
    getUser(){
        return axios.get(URL+"/userregister-api");
    },
    deteteUserbyId(userId){ //delete user by userId
        return axios.delete(URL+"/managerregister-api"+userId);
    },
    checkuserbyId(userId){ //find user by userId
        return axios.post(URL+"/managerregister-api",userId);
    },
    loginCheck(Users){
        return axios.post(URL+"/user-login",Users);
    }
    }
    export default UserService;
    ///managerregister-api