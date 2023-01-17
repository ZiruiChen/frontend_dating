const dummyMan = [
  {
    id: "e1",
    name: "梁朝伟",
    age: 20,
    description:
      "梁朝伟，1962年6月27日出生于中国香港，祖籍广东省台山市，国家一级演员、歌手。1982年考入TVB无线电视艺员训练班从而正式进入演艺圈。",
    img: "https://img0.baidu.com/it/u=1569622284,3533180689&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=580",
  },
  {
    id: "e2",
    name: "金城武",
    age: 24,
    description:
      "金城武（Takeshi Kaneshiro），1973年10月11日出生于台湾省台北市，日本籍男演员、歌手。",
    img: "https://img2.baidu.com/it/u=807072024,1924482445&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=499",
  },
  {
    id: "e3",
    name: "周星驰",
    age: 21,
    description:
      "周星驰（Stephen Chow），1962年6月22日出生于香港，祖籍浙江省宁波市，中国香港影视男演员、导演、编剧、制作人、商人，毕业于无线电视艺员训练班。",
    img: "https://img0.baidu.com/it/u=2138718058,2596450093&fm=253&fmt=auto&app=138&f=JPEG?w=544&h=500",
  },
  {
    id: "e4",
    name: "周杰伦",
    age: 25,
    description:
      "周杰伦（Jay Chou），1979年1月18日出生于台湾省新北市，祖籍福建省泉州市永春县，中国台湾流行乐男歌手、音乐人、演员、导演、编剧，毕业于淡江中学。",
    img: "https://img1.baidu.com/it/u=624597525,716372664&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=924",
  },
  {
    id: "e5",
    name: "梁朝伟",
    age: 20,
    description:
      "梁朝伟，1962年6月27日出生于中国香港，祖籍广东省台山市，国家一级演员、歌手。1982年考入TVB无线电视艺员训练班从而正式进入演艺圈。",
    img: "https://img0.baidu.com/it/u=1569622284,3533180689&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=580",
  },
  {
    id: "e6",
    name: "金城武",
    age: 24,
    description:
      "金城武（Takeshi Kaneshiro），1973年10月11日出生于台湾省台北市，日本籍男演员、歌手。",
    img: "https://img2.baidu.com/it/u=807072024,1924482445&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=499",
  },
  {
    id: "e7",
    name: "周星驰",
    age: 21,
    description:
      "周星驰（Stephen Chow），1962年6月22日出生于香港，祖籍浙江省宁波市，中国香港影视男演员、导演、编剧、制作人、商人，毕业于无线电视艺员训练班。",
    img: "https://img0.baidu.com/it/u=2138718058,2596450093&fm=253&fmt=auto&app=138&f=JPEG?w=544&h=500",
  },
  {
    id: "e8",
    name: "周杰伦",
    age: 25,
    description:
      "周杰伦（Jay Chou），1979年1月18日出生于台湾省新北市，祖籍福建省泉州市永春县，中国台湾流行乐男歌手、音乐人、演员、导演、编剧，毕业于淡江中学。",
    img: "https://img1.baidu.com/it/u=624597525,716372664&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=924",
  },
  {
    id: "e9",
    name: "梁朝伟",
    age: 20,
    description:
      "梁朝伟，1962年6月27日出生于中国香港，祖籍广东省台山市，国家一级演员、歌手。1982年考入TVB无线电视艺员训练班从而正式进入演艺圈。",
    img: "https://img0.baidu.com/it/u=1569622284,3533180689&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=580",
  },
  {
    id: "e10",
    name: "金城武",
    age: 24,
    description:
      "金城武（Takeshi Kaneshiro），1973年10月11日出生于台湾省台北市，日本籍男演员、歌手。",
    img: "https://img2.baidu.com/it/u=807072024,1924482445&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=499",
  },
  {
    id: "e11",
    name: "周星驰",
    age: 21,
    description:
      "周星驰（Stephen Chow），1962年6月22日出生于香港，祖籍浙江省宁波市，中国香港影视男演员、导演、编剧、制作人、商人，毕业于无线电视艺员训练班。",
    img: "https://img0.baidu.com/it/u=2138718058,2596450093&fm=253&fmt=auto&app=138&f=JPEG?w=544&h=500",
  },
  {
    id: "e12",
    name: "周杰伦",
    age: 25,
    description:
      "周杰伦（Jay Chou），1979年1月18日出生于台湾省新北市，祖籍福建省泉州市永春县，中国台湾流行乐男歌手、音乐人、演员、导演、编剧，毕业于淡江中学。",
    img: "https://img1.baidu.com/it/u=624597525,716372664&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=924",
  },
  {
    id: "e13",
    name: "梁朝伟",
    age: 20,
    description:
      "梁朝伟，1962年6月27日出生于中国香港，祖籍广东省台山市，国家一级演员、歌手。1982年考入TVB无线电视艺员训练班从而正式进入演艺圈。",
    img: "https://img0.baidu.com/it/u=1569622284,3533180689&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=580",
  },
  {
    id: "e14",
    name: "金城武",
    age: 24,
    description:
      "金城武（Takeshi Kaneshiro），1973年10月11日出生于台湾省台北市，日本籍男演员、歌手。",
    img: "https://img2.baidu.com/it/u=807072024,1924482445&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=499",
  },
  {
    id: "e15",
    name: "周星驰",
    age: 21,
    description:
      "周星驰（Stephen Chow），1962年6月22日出生于香港，祖籍浙江省宁波市，中国香港影视男演员、导演、编剧、制作人、商人，毕业于无线电视艺员训练班。",
    img: "https://img0.baidu.com/it/u=2138718058,2596450093&fm=253&fmt=auto&app=138&f=JPEG?w=544&h=500",
  },
  {
    id: "e16",
    name: "周杰伦",
    age: 25,
    description:
      "周杰伦（Jay Chou），1979年1月18日出生于台湾省新北市，祖籍福建省泉州市永春县，中国台湾流行乐男歌手、音乐人、演员、导演、编剧，毕业于淡江中学。",
    img: "https://img1.baidu.com/it/u=624597525,716372664&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=924",
  },
  {
    id: "e17",
    name: "梁朝伟",
    age: 20,
    description:
      "梁朝伟，1962年6月27日出生于中国香港，祖籍广东省台山市，国家一级演员、歌手。1982年考入TVB无线电视艺员训练班从而正式进入演艺圈。",
    img: "https://img0.baidu.com/it/u=1569622284,3533180689&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=580",
  },
  {
    id: "e18",
    name: "金城武",
    age: 24,
    description:
      "金城武（Takeshi Kaneshiro），1973年10月11日出生于台湾省台北市，日本籍男演员、歌手。",
    img: "https://img2.baidu.com/it/u=807072024,1924482445&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=499",
  },
  {
    id: "e19",
    name: "周星驰",
    age: 21,
    description:
      "周星驰（Stephen Chow），1962年6月22日出生于香港，祖籍浙江省宁波市，中国香港影视男演员、导演、编剧、制作人、商人，毕业于无线电视艺员训练班。",
    img: "https://img0.baidu.com/it/u=2138718058,2596450093&fm=253&fmt=auto&app=138&f=JPEG?w=544&h=500",
  },
  {
    id: "e20",
    name: "周杰伦",
    age: 25,
    description:
      "周杰伦（Jay Chou），1979年1月18日出生于台湾省新北市，祖籍福建省泉州市永春县，中国台湾流行乐男歌手、音乐人、演员、导演、编剧，毕业于淡江中学。",
    img: "https://img1.baidu.com/it/u=624597525,716372664&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=924",
  },
  {
    id: "e21",
    name: "梁朝伟",
    age: 20,
    description:
      "梁朝伟，1962年6月27日出生于中国香港，祖籍广东省台山市，国家一级演员、歌手。1982年考入TVB无线电视艺员训练班从而正式进入演艺圈。",
    img: "https://img0.baidu.com/it/u=1569622284,3533180689&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=580",
  },
  {
    id: "e22",
    name: "金城武",
    age: 24,
    description:
      "金城武（Takeshi Kaneshiro），1973年10月11日出生于台湾省台北市，日本籍男演员、歌手。",
    img: "https://img2.baidu.com/it/u=807072024,1924482445&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=499",
  },
  {
    id: "e23",
    name: "周星驰",
    age: 21,
    description:
      "周星驰（Stephen Chow），1962年6月22日出生于香港，祖籍浙江省宁波市，中国香港影视男演员、导演、编剧、制作人、商人，毕业于无线电视艺员训练班。",
    img: "https://img0.baidu.com/it/u=2138718058,2596450093&fm=253&fmt=auto&app=138&f=JPEG?w=544&h=500",
  },
  {
    id: "e24",
    name: "周杰伦",
    age: 25,
    description:
      "周杰伦（Jay Chou），1979年1月18日出生于台湾省新北市，祖籍福建省泉州市永春县，中国台湾流行乐男歌手、音乐人、演员、导演、编剧，毕业于淡江中学。",
    img: "https://img1.baidu.com/it/u=624597525,716372664&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=924",
  },
];

export default dummyMan;
