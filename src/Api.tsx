import jwt_decode from 'jwt-decode'
const url = 'http://localhost:4050/beru-market/';

export async function list(data: string) {
    return await fetch(url + data, {
        headers: getHeader(),
    })
        .then(res => res.json());
}
export function validate_token() {
    if ('token' in localStorage) {
        try {
            const decoded: any = jwt_decode(localStorage['token']);
            if (decoded.exp < (Date.now() / 1000)) {
                localStorage.removeItem('token')
            }
        }catch(err){
            localStorage.removeItem('token')
        }
    }
}
export function login(data: string, admin: any) {
    return fetch(url + data, {
        method: 'POST',
        body: JSON.stringify(admin),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json; charset=UTF-8', },
    }).then(res => res.json());
}
export function remove(data: string, id: string) {
    const del = async () => {
        await fetch(url + data + id, {
            method: 'DELETE',
            headers: getHeader(),
        }).then(res => res.json())
            .then(err => console.log(err.message));
    };
    del();
    list(data);
}
export async function find(path: string, id: string) {
    return await fetch(url + path + id, {
        headers: getHeader(),
    })
        .then(res => res.json());
}
function getHeader() {
    return {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'authorization': localStorage['token']
    }
}
export async function saveData(data: string, client: any, id: string) {
    const addPost = async (body: any) => {
        await fetch(url + data + id, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: getHeader(),
        })
            .catch((err) => {
                console.log(err.message);
            });
    };
    return await addPost(client);
}
export function send_file(file: any) {
    const formData = new FormData()
    formData.append('picture', file)
    console.log(file);
    fetch('http://192.168.0.100/',
        {
            mode: "no-cors",
            method: "POST",
            body: formData
        }).then((response) => console.log(response))
}

export function connect_server(credentials: string) {

    fetch('http://192.168.0.100', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        mode: "no-cors",
        body: JSON.stringify({
            username: "beru-software",
            password: credentials
        })

    }).catch(error => console.error(error));
}