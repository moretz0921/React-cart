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


export type Order = 'createdAt' | 'likeCount' | 'price';
export type Ascending = 'asc' | 'desc';


export interface IPaginationParams {
  order: Order;
  ascending: Ascending;
  currentPage: number;
  limit: number;
}