const { axiosInstance, logAPICall, DOCS_ENDPOINT } = require('./api-client');

const api = {
    query,
    DOCS_ENDPOINT
};

export default api;

function query(query="", num_results=20, relevant=null) {
    let queryInfo = { 
        query, 
        num_results, 
        relevant 
    };
    return logAPICall(queryInfo, () => 
        axiosInstance.post('/api/query', queryInfo)
    ).then(res => res.documents);
}

// function getFile(path) {
//     return logAPICall(path, () => 
//         axiosInstance.get(`/document/${path}`)
//     );
// }
