import api from '../ax/axiosSetting'


export const memberIdCheck = (obj) => {
    return api.post('/member/findId', JSON.stringify(obj)
    , {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const areaList = () =>{
    
    return api.get('/area/list');
}

export const memberlogin = (obj) =>{
    
    return api.post('/member/login', JSON.stringify(obj)
    , {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export const memberList = () =>{
    
    return api.post('/member/list');
}