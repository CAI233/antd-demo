import axios from 'axios';
import {Toast} from 'antd-mobile';

/**
 * 导出表中选中部分数据
 * 1.exportArray、downLoadURL为必填选项
 * 2.当downLoadFileName为null时，按默认名称下载
 * 3.当_this、stateName为null时，导出完成后不清空选中，不为null时，导出完成后清空选中
 *
 * @param {Array}  exportArray          部分导入传入的数组
 * @param {String} downLoadFileName     下载的下来的文件名字
 * @param {String} downLoadURL          服务请求的地址
 * @param {String} _this                this
 * @param {String} stateName            命名的state的名字
 */

export function getStreamData(exportArray, downLoadFileName, downLoadURL, _this, stateName) {

    //如果传入的数组为空直接返回
    if (!(exportArray.length > 0)) {
        // Toast.info({
        //     message: '请先选择导出的数据',
        //     description: '没有选择要导出的数据无法进行导出'
        // });
        return;
    }

    axios({
        method: 'post',
        url:downLoadURL,
        data: JSON.stringify(exportArray),
        headers: {
            'Content-Type': 'application/json',
            'token': window.sessionStorage.getItem('token') || ''
        },
        responseType: 'blob'
    }).then((response) => {
        if(response){
            const blob = new Blob([response.data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'});
            //下载文件的名称
            let filename = 'excel.xlsx';
            if (downLoadFileName) {
                filename = downLoadFileName;
            }
            //非IE浏览器通过download属性进行下载
            if('download' in document.createElement('a')){
                let downloadElememt = document.createElement('a');
                let href = '';
                if(window.URL){
                    href = window.URL.createObjectURL(blob);
                }else {
                    href = window.webkitURL.createObjectURL(blob);
                }
                downloadElememt.href = href;
                downloadElememt.download = filename;
                document.body.appendChild(downloadElememt);
                downloadElememt.click();
                if(window.URL){
                    window.URL.revokeObjectURL(href);
                }else {
                    window.webkitURL.revokeObjectURL(href);
                }
                // 导出成功之后清空选中的数据
                if (_this && stateName) {
                    _this.setState({
                        [stateName]: []
                    });
                }
            }else {
                // IE浏览器,通过navigator进行下载,支持IE10+
                if (navigator.msSaveBlob) {
                    // 导出成功之后清空选中的数据
                    if (_this && stateName) {
                        _this.setState({
                            [stateName]: []
                        });
                    }
                    return navigator.msSaveBlob(blob, filename);
                }
            }
        }else {
            // Toast.info({
            //     message: '导出选中数据失败',
            //     description: '调用接口导出选中的数据失败'
            // });
        }

    }).catch(() => {
        // Toast.info({
        //     message: '操作失败',
        //     description: '网络异常,请稍后重试'
        // });
    })
}
