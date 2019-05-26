import apiObject from "../constants";
import request from "../request";
class Topic {
  async getTopics(data) {
    return (await request.get(apiObject.getTopics, data || {})).data;
  }
  async getTopicDetail(data) {
    return (await request.get(apiObject.getTopicInfo + data.id, data || {})).data;
  }
  async createTopic(data) {
    return await request.post(apiObject.createTopic, data || {});
  }
  async updateTopic(data) {
    return (await request.post(apiObject.replyTopic, data || {})).data;
  }
}
const topic = new Topic();
export default topic;