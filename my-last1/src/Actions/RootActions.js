export function ShowModal(payload) {
    return {
        type: "SHOW_MODAL",
        payload: payload
    };
}

export function HideModal(payload) {
    return {
        type: "HIDE_MODAL",
        payload: payload
    };
}

export function UpdateSymName(payload) {
    return {
        type: "UPDATE_SYM_NAME",
        payload: payload
    };
}
export function addStocks(payload) {
    return {
        type: "ADD_STOCKS",
        payload: payload
    };
}

export function initStock(payload) {
    return {
        type: "INIT_STOCKS",
        payload: payload
    };
}

export function DeleteStock(payload) {
    return {
        type: "DELETE_STOCKS",
        payload: payload
    };
}