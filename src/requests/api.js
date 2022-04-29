const { axiosInstance, logAPICall } = require('./api-client');

const api = {
    query,
    getFile
};

export default api;

function query(query="", num_results=20, relevant=null) {
    let queryInfo = { query, num_results, relevant };
    return logAPICall(queryInfo, () => 
        axiosInstance.post('/query', queryInfo)
    ).then(res => res.documents);
}

function getFile(path) {
    return logAPICall({ path }, () => 
        axiosInstance.post('/file', { path })
    );
}
