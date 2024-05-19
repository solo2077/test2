import { dateEquals } from "element-plus";
import mockjs from "mockjs";
import { v4 as uuidv4 } from "uuid"
export const Mock = {
    //模拟获取订单数量
    //type:订单类型，0为普通，1为秒杀
    geOrder(type:any) {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                goods:( type == 0 ? '普通订单' : "秒杀订单") + (i+1),
                price: mockjs.Random.integer(20, 500) + '元',
                name: mockjs.Random.cname(),
                time: mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                role: mockjs.Random.boolean() ? '经理' : "分销员" ,
                state: mockjs.Random.boolean() ? '已支付' : "未支付",
                payType: mockjs.Random.boolean() ? '微信' : "支付宝",
                goodType: mockjs.Random.boolean() ? '已发货' : "未发货",
                source: mockjs.Random.url(),
                phone: mockjs.mock(/155+\d{8}/),
                goods_type: type,
                go_state: "通过",
                id: uuidv4(),

            }))

        }
        return array
    },
    getGoods(type:any) {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                goods:( type == 0 ? '普通商品' : (type == 1 ?"秒杀商品":"今日推荐" ))+ (i+1) ,
              img:mockjs.Random.image('60x100', 'Hello Mock.js'),
                  price: mockjs.Random.integer(20, 500) ,
                sum: mockjs.Random.integer(50, 100),
                t_sum: mockjs.Random.integer(10, 49),
                save_sum: mockjs.Random.integer(10, 200),
                all_sum: mockjs.Random.integer(100, 500),
                 t_Money: mockjs.Random.integer(1000, 5000),
                state: mockjs.Random.boolean() ? '上架' : "下架",
                mag: mockjs.Random.cname(),
                time: mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                colether_type: mockjs.Random.boolean() ? '男装' : "女装",
                eat_type: mockjs.Random.boolean() ? '已过期' : "未过期",
                phone: mockjs.mock(/155+\d{8}/),
                id: uuidv4(),
    
               

            }))

        }
        return array
    },
    get_yuangong() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                goods:mockjs.Random.cname(),
                phone: mockjs.mock(/155+\d{8}/),
                state: mockjs.Random.boolean() ? '上线' : "下线",
                Money_state: mockjs.Random.boolean() ? '经理' : "分销员",
                  get_price: mockjs.Random.integer(15000, 20000) ,
                  sent_price: mockjs.Random.integer(50, 100),
                  send_state: mockjs.Random.boolean() ? '站外' : "站内",
                yuan_sum: mockjs.Random.integer(1, 50),
                time: mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),

                
    
               

            }))

        }
        return array
    },
    get_money() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                goods:mockjs.Random.cname(),
                phone: mockjs.mock(/155+\d{8}/),
                state: mockjs.Random.boolean() ? '上线' : "下线",
                Money_state: mockjs.Random.boolean() ? '经理' : "分销员",
                  get_price: mockjs.Random.integer(15000, 20000) ,
                  sent_price: mockjs.Random.integer(50, 100),
                  send_state: mockjs.Random.boolean() ? '站外' : "站内",
                  
                get_money: mockjs.Random.integer(200000, 500000),
                sent_money: mockjs.Random.integer(50000, 100000),
                time: mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                day: Date(),

                
    
               

            }))

        }
        return array
    },
    get_money2() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                goods:mockjs.Random.cname(),
                phone: mockjs.mock(/155+\d{8}/),
                state: mockjs.Random.boolean() ? '上线' : "下线",
                Money_state: mockjs.Random.boolean() ? '经理' : "分销员",
                  get_price: mockjs.Random.integer(15000, 20000) ,
                  sent_price: mockjs.Random.integer(50, 100),
                  send_state: mockjs.Random.boolean() ? '站外' : "站内",
                  
                get_money: mockjs.Random.integer(500000, 800000),
                sent_money: mockjs.Random.integer(55000, 150000),
                time: mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                day: Date(),

                
    
               

            }))

        }
        return array
    },
    get_trade_data() {
        let array = [];
       
            array.push(mockjs.mock({
              
                alltra: mockjs.Random.integer(10000,50000 ),
                spetra: mockjs.Random.integer(0,5000 ),
                nortra: mockjs.Random.integer(0, 5000),
                usercount: mockjs.Random.integer(0,1000 ),
                managercount: mockjs.Random.integer(0,1000 ),
                time: mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                day: Date(),

                
    
               

            }))

        
        return array
    },
    get_charts_data() {
        let array = [];
        for (let i = 0; i < 1; i++) {
            array.push( mockjs.mock({
              
                a1: mockjs.Random.integer(1,100 ),
                a2: mockjs.Random.integer(0,100 ),
                a3: mockjs.Random.integer(0,100 ),
                a4: mockjs.Random.integer(0,100 ),
                a5: mockjs.Random.integer(0,100 ),
                a6: mockjs.Random.integer(0,100 ),
              

                
    
               

            })  )

        }
        return array
    },
}

export default Mock;