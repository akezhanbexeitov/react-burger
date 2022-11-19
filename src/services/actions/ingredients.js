import { BASE_URL } from "../../constants/constants";
// import request from "../../utils/server-requests";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredients = () => dispatch => {
    dispatch({
        type: GET_INGREDIENTS_REQUEST
    })
    const url = `${BASE_URL}/ingredients`

    fetch(url).then(res => {
        console.log(res)
    })
}


// const [data, setData] = useState(null)

// useEffect(() => {
//   const url = `${constants.BASE_URL}/ingredients`

//   request(url)
//     .then(actualData => setData(actualData.data))
//     .catch(err => console.log(err.message))
// }, [])