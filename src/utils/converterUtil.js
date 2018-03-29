// 格式化创建时间
export function formatCreatedTime(value) {
    let Y = new Date(value).getFullYear()
    let M = new Date(value).getMonth() + 1
    if (M < 10) {
        M = "0" + M;
    }
    let D = new Date(value).getDate()
    if (D < 10) {
        D = "0" + D;
    }
    let H = new Date(value).getHours()
    if (H < 10) {
        H = "0" + H;
    }
    let Min = new Date(value).getMinutes()
    if (Min < 10) {
        Min = "0" + Min;
    }
    let newValue = Y + '-' + M + '-' + D + '  ' + H + ':' + Min
    return newValue
}
// 格式化返回时间
export function formatReturnTime(dateTimeStamp) {
    var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - dateTimeStamp;
	if(diffValue < 0){return;}
	var monthC =diffValue/month;
	var weekC =diffValue/(7*day);
	var dayC =diffValue/day;
	var hourC =diffValue/hour;
    var minC =diffValue/minute;
    var result = "";
	if(monthC>=1){
		result="" + parseInt(monthC) + "月前";
	}
	else if(weekC>=1){
		result="" + parseInt(weekC) + "周前";
	}
	else if(dayC>=1){
		result=""+ parseInt(dayC) +"天前";
	}
	else if(hourC>=1){
		result=""+ parseInt(hourC) +"小时前";
	}
	else if(minC>=1){
		result=""+ parseInt(minC) +"分钟前";
	}else{
result="刚刚";
    }
	
	return result;

}

