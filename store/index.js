export const state = () => ({
    white: false,
    onPrestaLink: false,
    onSubheader: false,
  })
  
  export const mutations = {
    headerColorWhite(state) {
        state.white = true
    },

    headerColorTransparent(state) {
        state.white = false
    },

    onSubHeader(state) {
        state.onSubheader = true
    },

    outSubHeader(state) {
        state.onSubheader = false
    },

    onPrestaLink(state) {
        state.onPrestaLink = true
    },

    outPrestaLink(state) {
        state.onPrestaLink = false
    },
}

export const getters = {
    white: (state) => { return state.white },
    onPrestaLink: (state) => { return state.onPrestaLink },
    onSubheader: (state) => { return state.onSubheader },
}

export const actions = {
    headerColorWhiteAction ({commit}) {
        commit('headerColorWhite')
    },

    headerColorTransparentAction ({commit}) {
        commit('headerColorTransparent')
    },

    onSubHeaderAction ({commit}) {
        commit('onSubHeader')
    },

    outSubHeaderAction ({commit}) {
        commit('outSubHeader')
    },

    onPrestaLinkAction ({commit}) {
        commit('onPrestaLink')
    },

    outPrestaLinkAction ({commit}) {
        commit('outPrestaLink')
    },
}