import request from '@/utils/request.js'

export function authLogin(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}
export function categoryList() {
  return request({
    url: '/sys/product/category/list'
  })
}
export function categoryTree() {
  return request({
    url: '/sys/product/category/tree'
  })
}
export function operateProduct(data) {
  return request({
    url: '/sys/product/item',
    method: data.goodsId ? 'put' : 'post',
    data
  })
}
export function deleteProduct(id) {
  return request({
    url: `/sys/product/item/${id}`,
    method: 'delete'
  })
}
export function productDetail(id) {
  return request({
    url: `/sys/product/item/${id}`,
  })
}
export function updateCategory(data) {
  return request({
    url: '/sys/product/category',
    method: 'put',
    data
  })
}
