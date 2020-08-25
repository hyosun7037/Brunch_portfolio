import axios from "axios";
const baseUrl = "http://localhost:8080/brunch/post";
const writePost = {}

writePost.create = async (state) => {
    const datapost = {
        title:state.fieldTitle,
        content:state.fieldContent
    }

    const urlPost = baseUrl + "/create"

    const res = await axios.post(urlPost, datapost)
    .then(response => {
        const data = {success:true, messaga:response.data}
        return data;
    })
    .catch(error => {
        const data = {success:false, message:error.response.data}
        return data;
    })
    return res;
}

export default writePost;
