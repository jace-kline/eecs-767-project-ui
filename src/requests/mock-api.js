const api = {
    query,
    getFile
};

export default api;

const results_ = [
    { path: "/path/file1.txt", fname: "file1.txt", score: 0.6 },
    { path: "/path/file2.txt", fname: "file2.txt", score: 0.4 },
    { path: "/path/file3.txt", fname: "file3.txt", score: 0.2 }
  ];

function generateResults(n=20) {
    const extensions = ['.txt', '.log', '.c'];

    // let results = [];
    // for (let i = 0; i < n; i++) {
    //     const k1 = Math.floor(Math.random() * 100);
    //     const k2 = Math.floor(Math.random() * 3);
        
    //     const ext = extensions[k1 % extensions.length()];
    //     const fname = `file-${k1}.${ext}`;

    //     let path = "/";
    //     if (k2 > 0) { path += "home/" }
    //     if (k2 > 1) { path += "user/" }
    //     path += fname;

    //     results = [...results, {
    //         path,
    //         fname,
    //         score: 1.0 - (i * (1.0 / n))
    //     }];
    // }
    // return results;

    let results = [];
    for(let i = 0; i < n; i++) {
        const k = Math.floor(Math.random() * 100);
        results = [...results, {
            path: `/path/file-${k}.txt`,
            fname: `file-${k}.txt`,
            score: 0.5
        }];
    }
    return results;
}

async function query(query="", num_results=20, relevant=null) {
    return generateResults(num_results);
}

async function getFile(path) {
    return {
        contents: "File contents 12345\nHello, World\n"
    }
}