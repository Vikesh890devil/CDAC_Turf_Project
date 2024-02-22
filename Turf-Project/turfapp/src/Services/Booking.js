import axios from 'axios';
const URL ='http://localhost:6162';

class BookingService 
{
    //Add Booking
    addBooking(mId,Booking){
        return axios.post(URL+"/input/turf-data/save/" + mId , Booking);
    }
    //get all Booking details
    getBooking(){
        return axios.get(URL+"/fetch-data");
    }
}

export default new BookingService();