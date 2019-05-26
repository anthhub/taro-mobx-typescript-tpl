import apiObject from "../constants";
import request from "../request";
class Reply {
  async replyTopic(data) {
    return await request.post(apiObject.replyTopic + data.topicid + '/replies', data || {});
  }
  async upReply(data) {
    return await request.post(apiObject.upReply + data.replyid + '/ups', data || {});
  }
}
const reply = new Reply();
export default reply;