export function valiTel(vaule) {
    var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
    return reg.test(vaule); //true
};

export function valiEmail(vaule) {
    // 验证规则
    var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return reg.test(vaule); //true
};

export function valiPayNo(vaule) {
    // 验证规则
    var reg1 = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    var reg2 = /^1[3|4|5|7|8][0-9]{9}$/; 
    
    return (reg1.test(vaule) || reg2.test(vaule)); //true
};