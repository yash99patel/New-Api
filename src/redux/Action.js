import { type } from "@testing-library/user-event/dist/type"

export const userSubmit = (data) => {
    return {
        type: "USER_SUBMIT",
        payload: data
    }
}
export const userEdit = (data) => {
    return {
        type: "USER_EDIT",
        payload: data
    }

}
export const userDelete = (data) => {
    return {
        type: "USER_DELETE",
        payload: data
    }
}