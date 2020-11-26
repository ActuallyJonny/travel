export const initialState = {
    user: null,
    rec1: null,
    rec2: null,
    rec3: null,
};



function reducer(state, action) {
    console.log(action);

    switch (action.type) {

        case "SET_USER":
            console.log(state.user)
            return {
                user: action.item,
            }
        case "ADD_REC1":
            return {
                rec1: action.item,
            }
        case "ADD_REC2":
            return {
                rec2: action.item,
            }
        case "ADD_REC3":
            return {
                rec3: action.item,
            }
        case "REM_USER":
            return{
                user: null,
                rec1: null,
                rec2: null,
                rec3: null,
            }
        default:
            
            return state;
    }
}

export default reducer;
// 