// import request from '@/utils/request'
import axios from 'axios'

export function getList(field, params) {
  return axios({
    url: 'http://192.168.131.86:8000/api/' + field + '/',
    method: 'get',
    params
  })
}
