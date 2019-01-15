// import Mock from 'mockjs'

// const Random = Mock.Random

export const login = (options) => {
  console.log(options)
  return {
    'token': '1234567890qwertyuiop'
  }
}

export const GetUserInfo = (options) => {
  console.log(options)
  return [
    {
      'username': 'root',
      'isadmin': true,
      'reallyname': '未命名'

    }
  ]
}

export const GetRegionTaskInfo = (options) => {
  console.log(options)
  return [
    {
      'index': '2',
      'title': '2018东南方向1800幅',
      'subs': [
        {
          index: '/taskpackagelist',
          title: '任务包列表'
        },
        {
          index: '/taskpackagepartition',
          title: '任务包列表划分'
        }
      ]
    },
    {
      'index': '/taskpackagelist',
      'title': '2018西南方向2000幅'
    },
    {
      'index': '/taskpackagelist',
      'title': '2018中部1000幅'
    }
  ]
}
