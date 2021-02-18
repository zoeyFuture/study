'use strict'

const fs = require('fs')
const simpleGit = require('simple-git')


const updateFile = () => {
  const time = Date()
  fs.appendFile(__dirname + '/README.md', '#### 自动 commit，时间：' + time + '\r\n', error => {
    if (error) {
      console.error('缺少 README.md')
      return false
    }
    console.log('README 文件追加成功，时间：' + time)
    gitCommit(time)
  })
}

const gitCommit = (time) => {
  simpleGit().add('./*').commit('自动 commit，时间：' + time).push(['-u', 'origin', 'master'], error => {
    if (error) {
      console.error('commit 失败：' + error)
      return false
    }
    console.log('commit 成功，时间：' + time)
  })
}

updateFile()
setInterval(() => {
  updateFile()
}, 1000 * 60) // 时间不要太短

