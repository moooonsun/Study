import api from '../ax/axiosSetting'

/**
 * 아이템 리스트
 * @param {*} param 
 * @returns 
 */
export const itemList = (param) =>{
    return api.get('/item/all',{
        params: param,

    });
}
export const itemList2 = (obj) =>{
    return api.get('/item/all',{
    
        params:obj
    });
}
/**
 * 추천 아이템
 * @param {*} obj 
 * @returns 
 */
export const itemGood = (obj) => {
    return api.get('/item/good',{
        params:obj
    } 

    );
}