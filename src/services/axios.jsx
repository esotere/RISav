import axios from 'axios';

export default class Axios {
    getMembersList = () => {
         let promise =  new Promise((resolve, reject) => {
            axios.get("http://localhost:7500/members")
            .then((response) => {
                console.log(response.data);
                const data = response.data;
                console.log(data);
                resolve(data)
            })
            .catch((error) => {
                console.log(error)
            });
        });
        return promise
    }
}