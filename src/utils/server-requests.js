import { setCookie } from "./cookies";
import { refreshToken } from "../services/actions/auth";

export const checkResponse = (res) => {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export const request = (url, requestOptions) => {
    return fetch(url, requestOptions).then(checkResponse)
}

export const fetchWithRefresh = async (url, options) => {
    try {
        const res = await fetch(url, options)
        return await checkResponse(res);
    } catch (err) {
        if (err.message === "jwt expired") {
            const refreshData = await refreshToken()
            if (!refreshData.success) {
              Promise.reject(refreshData)
            }
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            setCookie("accessToken", refreshData.accessToken);
            options.headers.authorization = refreshData.accessToken;
            const res = await fetch(url, options); 
            return await checkResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
}
