/** 
 * 去除空格
 * @author LiQingSong
 */

 /** 
 * 去除两端空格
 * @author LiQingSong
 */
export function trim(val){
    return val.replace(/(^\s*)|(\s*$)/g, "");
}

 /** 
 * 去除左边空格
 * @author LiQingSong
 */
export function ltrim(val){
    return val.replace(/(^\s*)/g,"");
}

 /** 
 * 去除右边边空格
 * @author LiQingSong
 */
export function rtrim(val){
    return val.replace(/(\s*$)/g,"");
}

 /** 
 * 去除两端 ,
 * @author LiQingSong
 */
export function trimComma(val){
    return val.replace(/(^,*)|(,*$)/g, "");
}

 /** 
 * 去除两端 |
 * @author LiQingSong
 */
export function trimVerticalBar(val){
    return val.replace(/(^\|*)|(\|*$)/g, "");
}