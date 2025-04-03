import request from '@/utils/request.js'

export function categoryTree() {
  return request({
    url: '/app/product/category/tree'
  })
}
export function productList(params) {
  return request({
    url: '/app/product/item/list',
    params
  })
}
export function productDetail(id) {
  return request({
    url: `/app/product/item/${id}`
  })
}
export function homeData() {
  return request({
    url: '/app/product/item/index'
  })
}
