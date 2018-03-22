// import request from '@/utils/request'
import axios from 'axios'

export function getList(params) {
  return axios({
    url: process.env.BASE_API + 'asset' + '/',
    method: 'get',
    params
  })
}

export function getAsset(field, params) {
  return axios({
    url: process.env.BASE_API + 'asset/' + field + '/',
    method: 'get',
    params
  })
}

