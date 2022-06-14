export interface IgetProductResponse {
  id: number
  imgSrc: string
  name: string
  desc: string
  price: number
  likeCount: number
  count: number
  createdAt: string
  detail: IProductDetail[]
  tab: IProductTab[]
}

export interface IProductDetail {
  title: string
  content: string
}

export interface IProductTab {
  title: string
  imgSrc: string
}
