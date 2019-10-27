import ApiCommon from "../../common/api/common"
import config from "../config"

ApiCommon.prototype.send = function () {
  // console.log('每一个项目里特殊需求的请求')
}

let apiCommon = new ApiCommon(config.baseURL)

export default apiCommon
