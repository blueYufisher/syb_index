import http from './public'
var serverUrl = process.env.API_ROOT

// 用户信息
export const userInfo = (params) => {
  return http.fetchPost(serverUrl + '/checkLogin', params)
}
export const loginCheck = (username, password, code) => {
  return http.fetchPost(serverUrl + '/login.check?username=' + username + '&password=' + password + '&code=' + code)
}
export const loginCheckWithoutCode = (username, password) => {
  return http.fetchPost(serverUrl + '/checkLogin?username=' + username + '&password=' + password)
}
export const getUserByUsername = (userName) => {
  return http.fetchGet(serverUrl + '/getUserByUsername?userName=' + userName)
}
export const logout = () => {
  return http.fetchGet(serverUrl + '/logout')
}

export const selectInfoByNumAndType = (num, type) => {
  return http.fetchGet(serverUrl + '/selectInfoByNumAndType?num=' + num + '&type=' + type)
}
export const selectInfoByIdAndType = (params) => {
  // return http.fetchGet(serverUrl + '/selectInfoByIdAndType?id=' + id + '&type=' + type)
  return http.fetchPost(serverUrl + '/selectInfoByIdAndType', params)
}
export const findInfoNumByVisit = (params) => {
  return http.fetchPost(serverUrl + '/findInfoNumByVisit', params)
}
export const limitInfosByTypeAndCurrentPageAndPageSize = (type, currentPage, pageSize) => {
  return http.fetchGet(serverUrl + '/limitInfosByTypeAndCurrentPageAndPageSize?type=' + type + '&currentPage=' + currentPage + '&pageSize=' + pageSize)
}
export const modifyInfoVisit = (id) => {
  return http.fetchGet(serverUrl + '/modifyInfoVisit?id=' + id)
}
export const searchInfosByTitleOrNote = (currentPage, pageSize, params) => {
  return http.fetchPost(serverUrl + '/searchInfosByTitleOrNote?currentPage=' + currentPage + '&pageSize=' + pageSize, params)
}
export const searchInfoByTypeId = (params) => {
  return http.fetchPost(serverUrl + '/searchInfoByTypeId', params)
}

export const modifyProjectVisit = (id) => {
  return http.fetchGet(serverUrl + '/modifyProjectVisit?id=' + id)
}
export const getProjectByIdReturnPreNextProj = (id) => {
  return http.fetchGet(serverUrl + '/getProjectByIdReturnPreNextProj?id=' + id)
}
export const selectProjectsByNum = (num) => {
  return http.fetchGet(serverUrl + '/selectProjectsByNum?num=' + num)
}
export const limitProjectsByCurrentPageAndPageSize = (currentPage, pageSize) => {
  return http.fetchGet(serverUrl + '/limitProjectsByCurrentPageAndPageSize?currentPage=' + currentPage + '&pageSize=' + pageSize)
}
export const findProjectNumByVisit = (num) => {
  return http.fetchGet(serverUrl + '/findProjectNumByVisit?num=' + num)
}
export const searchProjectByProjNameOrCompanyName = (currentPage, pageSize, params) => {
  return http.fetchPost(serverUrl + '/searchProjectByProjNameOrCompanyName?currentPage=' + currentPage + '&pageSize=' + pageSize, params)
}

export const selectPictureById = (id) => {
  return http.fetchGet(serverUrl + '/selectPictureById?id=' + id)
}
