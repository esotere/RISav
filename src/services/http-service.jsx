import "whatwg-fetch";

class HttpService {
  
    getMembersList = () => {
        let promise = new Promise((resolve, reject) => {
            
            fetch("http://localhost:7500/members")
            .then(res => {
                console.log(res.json());
                const data = res
                console.log(data)
                resolve(data)
            }).catch(err => {
                if (err) throw err;
                // reject(err)
            })
        });
        return promise;
    }
   
}

export default HttpService;


// function checkStatus(response) {
//     if (response.status >= 200 && response.status < 300) {
//       return response
//     } else {
//       var error = new Error(response.statusText)
//       error.response = response
//       throw error
//     }
//   }
   
//   function parseJSON(response) {
//     return response.json()
//   }

// class HttpService {
//     getProducts = () => {
//         fetch("http://localhost:7500/product-list", {mode: "no-cors"})
//         .then(checkStatus)
//         .then(parseJSON)
//         .then(function(data) {
//           console.log('request succeeded with JSON response', data)
//         }).catch(function(error) {
//           console.log('request failed', error)
//         })
//     }
// }

// export default HttpService;