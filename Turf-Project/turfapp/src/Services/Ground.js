import axios from 'axios';
const URL ='http://localhost:6162';

class GroundService 
{
    //Add Ground
    addGround(mId,Ground){
        return axios.post(URL+"/input/turf-data/save/" + mId , Ground);
    }
    //get all Ground details
    getGround(){
        return axios.get(URL+"/input/get-allTurf");
    }

    getOneGround(){
        return axios.get(URL+"/input/get-one/");
    }

    

}

export default new GroundService();