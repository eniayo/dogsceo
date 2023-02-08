import axios from 'axios';

export default{
    async firstdogs(){
        try {
            const res = await axios.get('https://dog.ceo/api/breeds/image/random/50')
            // console.log('apifirstdogs', res.data.message);
            return res.data.message;
        }
        catch (error) {
            // handle error
            console.error(error);
        }
    },

    async seconddogs(){
        try {
            const res = await axios.get('https://dog.ceo/api/breeds/image/random/50')
            return res.data.message;
        }
        catch (error) {
            // handle error
            console.error(error);
        }
    },
}