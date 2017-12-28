import axios from 'axios'

const URL = 'http://localhost:3003'
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dl58rg6j8/image/upload'
const CLOUDINARY_PRESET = 'rggusa2m'



function signup(userDetails) {
    return axios.post(`${URL}/data/user`, userDetails)
        .then(_ => {
            // console.log('userDetails', userDetails);
            return login(userDetails)
        })
        .catch(err => err)
}

function login(userCreds) {
    return axios.post(`${URL}/login`, userCreds)
        .then(({ data }) => {
            // console.log('user service login', userCreds);
            return data
        })
}

function logout() {
    return axios.get(`${URL}/logout`)
}

function toggleLike(userId, carId) {
    return axios.post(`${URL}/data/${userId}/liked/${carId}`)
    // .then(({ data }) => data)
}


function getItems() {
    // console.log('inside getitmes')
    return axios
        .get(`${URL}/data/item`)
        .then(res => {
            // console.log('res:', res.data)
            return res.data
        }
        )
        .catch(e => {
            console.log('No Items', e);
            throw e;
        });
}




// function getItemsByTag(tag) {
//     // console.log('tag48',tag);
//     return axios
//         .get(`${URL}/data/items/`+tag)
//         .then(res => {
//             console.log('res:', res.data)
//             return res.data
//         }
//         )
//         .catch(e => {
//             console.log('No Items', e);
//             throw e;
//         });
// }

function getItemsByTag(obj) {
    var tag;
    var keyWord;
    obj.tag ? tag = obj.tag : tag = ''
    obj.keyWord ? keyWord = obj.keyWord : keyWord = ''
    // console.log('in userservice, tag: ' + tag + ' keyword: ' + keyWord)
    return axios.get(`${URL}/data/items`, {
        params: {
            tag: tag,
            term: keyWord
        }
    })
    .then(res => {
        // console.log('res:', res.data)
        return res.data
    }
    )
    .catch(e => {
        console.log('No Items', e);
        throw e;
    });
}

function getEmptyUser() {
    return {
        name: '',
        password: '',
        email: '',
        about: '',
        imgUrl: '',
        address: '',
        itemsForSale: [],
        commentsOnSellers: [],
        payment: {},
    }
}

function uploadImage(file) {
    var formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', CLOUDINARY_PRESET)

    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }

    return axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(res => res.data.url)
    .catch(err => console.log(err))
}

export default {
    signup,
    login,
    logout,
    toggleLike,
    getEmptyUser,
    getItems,
    getItemsByTag,
    uploadImage
} 