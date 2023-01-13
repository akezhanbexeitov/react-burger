import { setCookie } from "./cookies";
import { refreshToken } from "../services/actions/auth";

interface IRequestOptions extends RequestInit {
    headers?: Record<string, string>
  }

export const checkResponse = (res: Response) => {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export const request = (url: string, requestOptions: RequestInit) => {
    return fetch(url, requestOptions).then(checkResponse)
}

export const fetchWithRefresh = async (url: string, options: IRequestOptions = {}) => {
    try {
      const res = await fetch(url, options)
      return await checkResponse(res);
    } catch (err: any) {
      if (err.message === "jwt expired") {
        const refreshData = await refreshToken()
        if (!refreshData.success) {
          return Promise.reject(refreshData)
        }
        localStorage.setItem("refreshToken", refreshData.refreshToken);
        setCookie("accessToken", refreshData.accessToken);
        options.headers = options.headers || {}
        options.headers.authorization = `Bearer ${refreshData.accessToken}`
        const res = await fetch(url, options); 
        return await checkResponse(res);
      } else {
        return Promise.reject(err);
      }
    }
  }
