import axios from 'axios';
export default loading = () =>{
    axios.get('/')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
