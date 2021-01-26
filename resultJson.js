/**
 * 有正常结果返回时
 * @param res
 * @param data
 */
exports.onSuccess = function (res, data) {
    var result = {};
    result.code = 1;
    result.msg = 'success';
    result.data = data;
    res.json(result);
};

/**
 * 当发生错误时
 * @param res
 * @param code
 * @param msg
 */
exports.onError = function (res, code, msg) {
    var error = {};
    error.code = code;
    error.msg = msg;
    res.json(error);
};

/**
 * 无数据记录
 * @param res
 */
exports.onNoRecord = function (res) {
    exports.onError(res, 1000, '无数据记录');
};

/**
 * 参数错误
 * @param res
 */
exports.onParamsError = function (res) {
    exports.onError(res, 1001, '参数错误');
};

/**
 * 系统错误
 * @param res
 */
exports.onSystemError = function (res) {
    exports.onError(res, 1002, '系统错误');
};