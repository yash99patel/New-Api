const initialState = {
    data: [],
    editData: []

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_SUBMIT":
            return {
                ...state, data: action.payload
            }
        case "USER_EDIT":
            const edit = state.data.find((item, index) => index === action.payload)
            return {
                ...state, editData: edit
            }
        case "USER_DELETE":
            const data = state.data.filter((item, index) => index !== action.payload)
            return {
                ...state, data:action.payload
            }

            break;

        default:
            break;
    }
}

export default userReducer;
