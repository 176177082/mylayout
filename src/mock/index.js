import Mock from 'mockjs'
import { login } from './response/user'

// 登录相关
Mock.mock(/\/login/, 'post', login)

export default Mock
