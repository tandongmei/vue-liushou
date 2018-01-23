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
