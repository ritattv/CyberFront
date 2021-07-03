import http from '/http-common'
const RESOURCE_NAME = '/team'
export default {
  getAll() {
    return http.get(RESOURCE_NAME)
  },
  get(id) {
    return http.get(`${RESOURCE_NAME}/${id}`)
  },
  create(data) {
    return http.post(RESOURCE_NAME, data)
  },
  update(id, data) {
    return http.put(`${RESOURCE_NAME}/${id}`, data)
  },
  delete(id) {
    return http.delete(`${RESOURCE_NAME}/${id}`)
  }
}
