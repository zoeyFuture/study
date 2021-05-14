'use strict'

// github: https://github.com/goto456/simple-git

const fs = require('fs')
const simpleGit = require('simple-git')
const git = require('simple-git/promise')

const gitConsole = (req, res) => {
  console.log('req:', req)
  const { gitPath, gitCommand } = req.body
  const commands = gitCommand.trim().split(/\s+/).slice(1)

  git(gitPath).raw(commands).then(data => {
    // 此处可以利用 socket.io 去实现实时推送消息，以达到模拟git的命令行窗口
    res.send({ result: 'success' })
  }).catch(error => {
    res.send(error)
  })
}

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
  // pull、checkout、commit、push、mergeFromTo('form', 'to')
  simpleGit().add('./*').commit('自动 commit，时间：' + time).push(['-u', 'origin', 'master'], error => {
    if (error) {
      console.error('commit 失败：' + error)
      return false
    }
    console.log('commit 成功，时间：' + time)
  })
}

// updateFile()
// setInterval(() => {
//   updateFile()
// }, 1000 * 60) // 时间不要太短

gitConsole()
