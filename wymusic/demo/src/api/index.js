import ajax from './ajax'

//请求轮播图数据
export const reqBannerData=(url,data)=>(ajax(url,data))

//获取推荐歌单
export const reqSongList=(url,data)=>(ajax(url,data))

//获取热门搜索关键词
export const reqHotSearch=(url,data)=>(ajax(url,data))

//请求排行旁边的歌单
export const reqSongLIist=(url,data)=>(ajax(url,data))

//请求所有分类的榜单
export const reqCateRank=(url,data)=>(ajax(url,data))

//请求主页中的推荐歌单
export const reqRecommandSong=(url,data)=>(ajax(url,data))

//获取歌单中的歌曲
export const reqSongById=(url,data)=>(ajax(url,data))

//请求搜索结果
export const reqSearchResult=(url,data)=>(ajax(url,data))

//请求歌曲的url
export const reqSongUrlById=(url,data)=>(ajax(url,data))