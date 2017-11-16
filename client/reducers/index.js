// Sample for later reference.

const initialState = {
    showHomePage: true,
    showHeroesList: false
}

export reducers(state = initialState, action) {
    switch(action.type) {
        case 'HOMEPAGE':
            return Object.Assign({}, state, {
                showHomePage: state.showHomePage
            });
        case 'HEROES_LIST':
            return Object.Assign({}, state, {
                showHeroesList: state.showHeroesList
            });
        default
            return state;
    }
}
