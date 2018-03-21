// import request from '@/utils/request'
import axios from 'axios'

export function getList(field, params) {
  return axios({
    url: process.env.BASE_API + field + '/',
    method: 'get',
    params
  })
}

export function create(field, params) {
  return axios({
    url: process.env.BASE_API + field + '/',
    method: 'post',
    data: params
  })
}
