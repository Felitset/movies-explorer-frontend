const apiAuthHost = 'https://diploma.olga.nomoredomains.rocks';

export const signUpUser = async (name, email, password) => {
    const res = await fetch(`${apiAuthHost}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
    return checkResponse(res);
};

export const signInUser = async (email, password) => {
    const res = await fetch(`${apiAuthHost}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    return checkResponse(res);
};

export const getUserProfile = async (token) => {
    const res = await fetch(`${apiAuthHost}/profile`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return checkResponse(res);
}

export const updateUserProfile = async (token) => {
    const res = await fetch(`${apiAuthHost}/profile`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return checkResponse(res);
}

export const saveMovie = async (movieInfo, token) => {
    const res = await fetch(`${apiAuthHost}/movies`, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieInfo)
    })
    return checkResponse(res);
}

export const deleteMovie = async (movieId, token) => {
    const res = await fetch(`${apiAuthHost}/movies/${movieId}`,
        {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        return checkResponse(res);
}

const checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Error: ${res.statusText}`);