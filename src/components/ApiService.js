

export default class ApiService{
    static LoginUser(body){
        return fetch('http://127.0.0.1:8000/login/',{
            'method':'POST',
            headers:{
                 'content-Type':'application/json',
            },
            body:JSON.stringify(body)
         }).then(resp=>resp.json())
        
    
}
}