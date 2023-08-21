/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx533fbacf60afe150',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd6888642408c92cd96f5de246fcd7062',
  
  MAX_PUSH_ONE_MINUTE: 5,
  // 配合MAX_PUSH_ONE_MINUTE使用，休眠<SLEEP_TIME>毫秒后再发送剩余消息，不填则默认为65000
  SLEEP_TIME: 65000,
   // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: true,
    
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: true,
    
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,
    
    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: false,
    
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: false,
    
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: true,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
  
    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: false,
  },
  
  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '933695351fc45b860e142ecc0bb57860',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: true,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 0,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 3,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'title',
  },

  PROVINCE: '陕西',
  CITY: '咸阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oQT5T6VrHJoaChZBjR662E5PgbJE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'w04pvcBjTL0UgQjJ3IJk-2QRkMiTIwgX3tgHSzPv3Ns',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-09',
      
      FESTIVALS: [
    // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
    {
      type: '*生日', name: '宝贝', year: '2001', date: '09-09', isShowAge: true,
    },
  
    // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
    {
      type: '*生日', name: '田昊', year: '1996', date: '09-14', isShowAge: true,
    },
    {
      type: '节日', name: '相识纪念日', year: '2023', date: '03-24',
    }
    // 可以不断按格式往下增加
    // ...
  ],

      FESTIVALS_LIMIT: 2,
      
      CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    { keyword: 'love_day', date: '2023-7-10' },
    // 认识的日子
    { keyword: 'marry_day', date: '2023-03-24' },
    // ...
  ],
  


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'mwq8p-Y5BEI1urTJIYorCqycIc5ZUEL4UnNB8yIeh6w',

  CALLBACK_USERS: [
    {
      name: 'th',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oQT5T6bKN0vUHfhbx_EU_xNgCqbM',
    }
  ],

}

module.exports = USER_CONFIG

