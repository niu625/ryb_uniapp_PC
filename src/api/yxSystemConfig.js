import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/yxSystemConfig',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/yxSystemConfig/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/yxSystemConfig',
    method: 'put',
    data
  })
}

export function get() {
  return request({
    url: 'api/yxSystemConfig?size=500',
    method: 'get'
  })
}

