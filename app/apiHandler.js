const cheerio = require('cheerio');
const request = require('request');

postChi = (method,url='',formData={},headers={}) => {
    return new Promise((resolve,reject)=>{
        request({method,url,headers,formData},(error,response)=>{
            if (error) reject(error);
            else resolve(response);
        });
    })
};
module.exports ={
    login(event,args){
        let Cookie;
        let result={};
        postChi('POST','http://www.shatelland.com/Authentication/Login',args,{'Cache-Control': 'no-cache','content-type': 'multipart/form-data'})
            .then(response=>{
                if(response.body.indexOf('<h2>Object moved to <a href="/Upload/Index">here</a>.</h2>')!==-1){
                    Cookie = response.headers['set-cookie'][1];
                    result.Cookie = Cookie;
                    return postChi('GET','http://www.shatelland.com/user/edit',{},{Cookie,'Cache-Control': 'no-cache'});
                }else{
                    return Promise.reject(false);
                }
            }).then(index=>{
                if(index.body.indexOf('<title>شاتل لند |  پروفایل</title>')!==-1){
                    const $ = cheerio.load(index.body);
                    result.User={
                        name:{
                            first: $('#FirstName')['0'].attribs.value,
                            last: $('#LastName')['0'].attribs.value,
                        },
                        email: $('#Email')['0'].attribs.value,
                        callPhone: $('#Attributes_CellPhone_')['0'].attribs.value,
                        phone: $('#Attributes_Phone_')['0'].attribs.value,
                        address: $('#Attributes_Address_')['0'].attribs.value,
                    };
                    event.sender.send('USER_LOGIN',result);
                }else{
                    return Promise.reject(false);
                }
            }).catch(err=>{
                event.sender.send('USER_LOGIN',err);
            });
    }
};