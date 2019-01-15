import Mock from 'mockjs'
import { login, GetUserInfo, GetRegionTaskInfo } from './response/api'

// 登录相关
Mock.mock(/\/login/, 'post', login)

Mock.mock(/\/user/, 'get', GetUserInfo)

Mock.mock(/\/regiontasks/, 'get', GetRegionTaskInfo)

export default Mock
