const { axiosInstance, logAPICall } = require('./api-client');

const api = {
    search,
    getFile
};

export default api;

function search(search="", num_results=20, relevant=null) {
    searchInfo = { search, num_results, relevant };
    return logAPICall(searchInfo, () => 
        axiosInstance.post('/search/', searchInfo)
    );
}

function getFile(path) {
    return logAPICall({ path }, () => 
        axiosInstance.post('/file/', { path })
    );
}
