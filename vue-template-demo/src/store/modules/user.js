import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      // let token = 'admin-token'
      // commit('SET_TOKEN', token)
      // setToken(token)
      // resolve()
      login({ name: username.trim(), password: password }).then(response => {
        const { data } = response
        console.log(11, data)
        let token = 'admin-token'
        commit('SET_TOKEN', token)
        setToken(token)
        resolve()
      }).catch(error => {
        // reject(error)
        resolve()
      })
      // login({ username: username.trim(), password: password }).then(response => {
      //   const { data } = response
      //   console.log(11, data)
      //   commit('SET_TOKEN', data.token)
      //   setToken(data.token)
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      console.log('-------------------')
      let name = 'Super Admin',
        avatar = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif';
      commit('SET_NAME', name)
      commit('SET_AVATAR', avatar)
      resolve()
      // getInfo(state.token).then(response => {
      //   const { data } = response
      //
      //   if (!data) {
      //     reject('Verification failed, please Login again.')
      //   }
      //
      //   const { name, avatar } = data
      //
      //   commit('SET_NAME', name)
      //   commit('SET_AVATAR', avatar)
      //   resolve(data)
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      removeToken()
      resetRouter()
      resolve()
      // logout(state.token).then(() => {
      //   commit('SET_TOKEN', '')
      //   removeToken()
      //   resetRouter()
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

