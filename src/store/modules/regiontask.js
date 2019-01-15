import { axiosGetRegionTaskInfo } from '../../api/api'

const state = {
  //  区域任务名字
  regiontasknames: []
}

const mutations = {
  //  修改vuex中存储的唯一方法
  SET_REGIONTASKNAME: (state, data) => {
    state.regiontasknames = data
    console.log('state.regiontasknames')
    console.log(state.regiontasknames)
  }
}

const actions = {
  //  当同时要修改多个值时，使用actions
  vuexGetRegionTaskInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      axiosGetRegionTaskInfo().then(response => {
        console.log('bbbbb')
        console.log(response.data)
        const data = response.data
        commit('SET_REGIONTASKNAME', data)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

// 使用命名空间
export default {
  state,
  mutations,
  actions
}
