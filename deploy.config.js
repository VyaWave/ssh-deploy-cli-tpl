module.exports = {
  projectName: "", // 项目名称
  dev: {
    // 测试环境配置
    name: "测试环境",
    script: "npm run build", // 测试环境打包脚本
    host: "", // 测试服务器地址
    port: 22, // ssh port，一般默认22
    username: "", // 登录服务器用户名
    password: "", // 登录服务器密码
    distPath: "dist", // 本地打包dist目录
    webDir: "", // 测试环境服务器地址
  },
  prod: {
    // 线上环境配置
    name: "线上环境",
    script: "npm run build", // 线上环境打包脚本
    host: "", // 线上服务器地址
    port: 22, // ssh port，一般默认22
    username: "", // 登录服务器用户名
    password: "", // 登录服务器密码
    distPath: "dist", // 本地打包dist目录
    webDir: "", // 线上环境web目录
  },
  // 注：根据实际需要进行配置，如只需部署test测试环境，请删除pro线上环境配置，反之亦然，支持多环境部署（如若项目中有其他环境，参照以上配置即可）!!
}
