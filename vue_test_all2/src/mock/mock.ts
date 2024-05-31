import { dateEquals } from "element-plus";
import mockjs from "mockjs";
import { v4 as uuidv4 } from "uuid"
export const Mock = {
   
    geOrder() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5,10); i++) {
            array.push(mockjs.mock({
                goods:(mockjs.Random.boolean() ? '普通订单' : "秒杀订单" )+(i+1),
                price: mockjs.Random.integer(20, 500) + '元',
                num: mockjs.Random.integer(1, 10) +'件',
                state: mockjs.Random.boolean() ? '已支付' : "未支付",
                state2: mockjs.Random.boolean() ? '中国' : "外国",
                id: uuidv4(),
               url:'图片',


                name: mockjs.Random.cname(),
                time: mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                role: mockjs.Random.boolean() ? '经理' : "分销员" ,
                payType: mockjs.Random.boolean() ? '微信' : "支付宝",
                goodType: mockjs.Random.boolean() ? '已发货' : "未发货",
                source: mockjs.Random.url(),
                phone: mockjs.mock(/155+\d{8}/),
              
                go_state: "通过",
             

            }))

        }
        return array
    },
    geOrder2() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                goods:mockjs.Random.boolean() ? '普通订单' : "秒杀订单" ,
                price: mockjs.Random.integer(20, 500) + '元',
                num: mockjs.Random.integer(1, 10) +'件',
                state: mockjs.Random.boolean() ? '已支付' : "未支付",
                state2: mockjs.Random.boolean() ? '中国' : "外国",
                id: uuidv4(),
               url:'图片',
               address:'旅游地点名称',
               type:'类型',
               goodType: mockjs.Random.boolean() ? '已发货' : "未发货",
             


                name: mockjs.Random.cname(),
                time: mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                role: mockjs.Random.boolean() ? '经理' : "分销员" ,
                payType: mockjs.Random.boolean() ? '微信' : "支付宝",
               
                source: mockjs.Random.url(),
                phone: mockjs.mock(/155+\d{8}/),
              
                go_state: "通过",
             

            }))

        }
        return array
    },
   
}

export default Mock;