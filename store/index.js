export const state = () => ({
    white: false,
    hover: false
  })
  
  export const mutations = {
    onMouseEnter(state) {
        state.white = state.hover = true
    },

    onMouseLeave(state) {
        const scrollY = window.scrollY
        if (scrollY < 50) {
            state.white = state.hover = false
        } else {
            state.hover = false
            state.white = true
        }
    },

    onScroll(state) {
        const scrollY = window.scrollY
        if (scrollY < 50) {
            state.white = false
          } else {
            state.white = true
          }
    }  
}

export const getters = {
    white: (state) => { return state.white },
    hover: (state) => { return state.hover },
}

export const actions = {
    onMouseEnterAction ({commit}) {
        commit('onMouseEnter')
    },
    onMouseLeaveAction ({commit}) {
        commit('onMouseLeave')
    },
    onScrollAction({commit, page}) {
        commit('onScroll')
    }
}