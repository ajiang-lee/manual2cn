var router = require('express').Router();
//var _ = require('underscore');
//var service = require('../service');
//var db = require('../util/mysql_pool.js');
//var cache = require('../util/redis_client.js');

// 示例路由
router.get('/', function(req, res, next) {
    res.send({
        "msg": "success",
        "total": 10012,
        "rows": [
            {
                "author": {
                    "avatar": "http://qiniu-file.zhuoyouapp.com/i/81/20150305022013profile1425536413.jpg",
                    "nick_name": "晓菡是吃货",
                    "id": 81
                },
                "id": 28104,
                "category_id": 134,
                "category_name": "胆小勿入",
                "title": "每日一鬼【宿舍女鬼】",
                "subject": "",
                "cover": {
                    "img": "http://qiniu-file.zhuoyouapp.com/i/44/20150811145643818o_19sdonvp01aof13vq6g61kn22hpr.jpg",
                    "width": 391,
                    "height": 220
                },
                "content": [
                    {
                        "url": "http://qiniu-file.zhuoyouapp.com/i/44/20150811145643818o_19sdonvp01aof13vq6g61kn22hpr.jpg",
                        "width": 391,
                        "height": 220
                    },
                    "我叫月儿，读大一，今天是开学日，我拖着行李进了那间宿舍。",
                    "学校给我安排的宿舍是1444宿舍，当时我也没多想，只是大四大三的学姐们用恐惧的眼神看着我。",
                    "这个宿舍挺好，居然还有电脑。",
                    "我的舍友有三个，胖的叫胖妞，瘦的叫悦悦，还有个个子高的叫明溪。",
                    "不得不说开始几天非常快乐，我们四个天天吵吵嚷嚷，打打闹闹，非常开心。",
                    "直到那次。",
                    "大晚上的，胖妞开灯吵醒我们，嚷嚷着说见到鬼了，苍白的脸，可怕的笑。",
                    "我们都当胖妞在说梦话，做梦。",
                    "胖妞双眼变得通红:“你们不相信我？你们怎么能不相信我？我知道你们都嫌弃我胖！”",
                    "不管我们怎么劝，胖妞还是哭着跑出去了。",
                    "第二天我们接到了胖妞的死讯。",
                    "是从学校宿舍楼顶跳下来的，摔得稀巴烂。",
                    "学姐学长们都在议论，似乎在说着关于谁的故事。",
                    "过了不久，悦悦也是如此，我们拼命说信，她却还是崩溃地跑了出去。",
                    "悦悦也死了。",
                    "学姐说，这个宿舍不吉利，让我们尽快搬出去。",
                    "明溪愣住了。",
                    "“我们？只有我了啊？还有谁啊？”",
                    "学姐呆住了，用恐惧的眼神看着在明溪身后的我。",
                    "“小月……小月……”",
                    "不知道为什么那个学姐会疯掉呢。",
                    "我轻轻地躺在明溪身边，笑着看着熟睡的她。",
                    "她惊恐地看着我……"
                ],
                "type": 2,
                "create_time": "2015-08-11 17:01:00",
                "up_count": 286,
                "down_count": 27,
                "share_count": 0,
                "collect_count": 0,
                "comment_count": 0,
                "visit_count": 0,
                "report_count": 0,
                "comment": []
            },
            {
                "author": {
                    "avatar": "http://qiniu-file.zhuoyouapp.com/i/45/20150616063453profile1434450893.jpg",
                    "nick_name": "那些年",
                    "id": 45
                },
                "id": 27607,
                "category_id": 152,
                "category_name": "新技能get",
                "title": "6个最机智最酸爽的切西瓜手法！！不说了，马上找刀去~~~~",
                "subject": "",
                "cover": {
                    "img": "http://qiniu-file.zhuoyouapp.com/i/40/20150810113122852o_19saqj8i91i4i181i1e598u1odhq.gif",
                    "width": 307,
                    "height": 244
                },
                "content": [
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/40/20150810113122852o_19saqj8i91i4i181i1e598u1odhq.gif",
                            "height": 244,
                            "width": 307
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/40/20150810113130795o_19saqj8ia19m99736bc1h7r14q5r.gif",
                            "height": 213,
                            "width": 301
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/40/20150810113138521o_19saqj8ia18i41g19elg133t1oi8s.gif",
                            "height": 213,
                            "width": 301
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/40/20150810113145830o_19saqj8iam049vpmpk1ee41idst.gif",
                            "height": 220,
                            "width": 314
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/40/2015081011315553o_19saqj8ia142go2e1n9nu4e1nevu.gif",
                            "height": 207,
                            "width": 306
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/40/2015081011321338o_19saqj8ia1dr924m1pnadn8hpnv.gif",
                            "height": 216,
                            "width": 291
                        }
                    }
                ],
                "type": 3,
                "create_time": "2015-08-11 17:00:00",
                "up_count": 194,
                "down_count": 121,
                "share_count": 0,
                "collect_count": 0,
                "comment_count": 0,
                "visit_count": 3,
                "report_count": 0,
                "comment": []
            },
            {
                "author": {
                    "avatar": "http://qiniu-file.zhuoyouapp.com/i/105/20150311031417profile1426058057.jpeg",
                    "nick_name": "小逗捞",
                    "id": 105
                },
                "id": 27101,
                "category_id": 153,
                "category_name": "冷知识",
                "title": "解密：70年前在日本引爆的原子弹是如何装上飞机的",
                "subject": "",
                "cover": {
                    "img": "http://qiniu-file.zhuoyouapp.com/crawler/e2cfb133fbb6f666fdc9d96c1ce17dd2.jpeg",
                    "width": 550,
                    "height": 433
                },
                "content": [
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/e2cfb133fbb6f666fdc9d96c1ce17dd2.jpeg",
                            "height": 433,
                            "width": 550
                        },
                        "content": [
                            "1945年夏，日本败局已定，7月26日，美国、英国和中国发表了《波茨坦公告》，敦促日本投降。7月28日，日本政府拒绝接受《波茨坦公告》。",
                            "8月6日和9日，美国在日本广岛和长崎分别投下两枚原子弹，8月15日日本天皇裕仁发布诏书，宣布接受《波茨坦公告》，日本无条件投降。",
                            "2014年10月美国国家档案和记录管理局解密了一批老照片，详细记录了70年前在日本引爆的那两颗原子弹——“小男孩”和“胖子”是如何装上飞机的。"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/679bc2e23a47ae91c30b2273bfbd43d9.jpeg",
                            "height": 417,
                            "width": 550
                        },
                        "content": [
                            "曼哈顿成员Francis Birch在给“小男孩”做标记，右边是Norman Ramsey后来诺贝尔物理学奖的获得者。"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/8b2243c3456a1ea98c5ee35f346187a5.jpeg",
                            "height": 422,
                            "width": 550
                        },
                        "content": [
                            "对“胖子”密封"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/8c20a7982f6eca56a2a717af806993bc.jpeg",
                            "height": 432,
                            "width": 550
                        },
                        "content": [
                            "签名留念"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/cbc971f21e3b4f1857abe64b6dda8286.jpeg",
                            "height": 420,
                            "width": 550
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/4bbc9ef010202dd6c5beb878bcbe921f.jpeg",
                            "height": 376,
                            "width": 550
                        },
                        "content": [
                            "装车运往天宁岛的空军基地"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/578aedcca695215e506931b3d6e982cf.jpeg",
                            "height": 427,
                            "width": 550
                        },
                        "content": [
                            "装弹坑"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/a38ea15712de9a260c269966a70fb823.jpeg",
                            "height": 438,
                            "width": 550
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/bd011c65664c16224408c1961f4e6fd6.jpeg",
                            "height": 428,
                            "width": 550
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/a8333308c9315e7486835d495cbf4b8c.jpeg",
                            "height": 410,
                            "width": 550
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/c30dc5641212c29d0a9040d13e91fa07.jpeg",
                            "height": 707,
                            "width": 550
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/2039cc0c25b8eac745ca263feedb0759.jpeg",
                            "height": 412,
                            "width": 550
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/1099c3df836df2b76841c503fc90ef4b.jpeg",
                            "height": 429,
                            "width": 550
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/1932f67c4cc3b8e62ad4c3bbfb090d9d.jpeg",
                            "height": 443,
                            "width": 550
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/853ed12ac294c7cc65fba9f17eb75dd1.jpeg",
                            "height": 435,
                            "width": 550
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/17ba5e64e329fbe753700b17f3523f99.jpeg",
                            "height": 440,
                            "width": 550
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/775058565f91c901ac428dab6bde330d.jpeg",
                            "height": 704,
                            "width": 550
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/0b4a4bdc8b9bfaefe35a6a964635e0a9.jpeg",
                            "height": 694,
                            "width": 550
                        },
                        "content": [
                            "液压装置辅助安装"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/01bc0a49c3bd609368c11d1a079d32fe.jpeg",
                            "height": 426,
                            "width": 550
                        },
                        "content": [
                            "原子弹在机舱安装检查"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/90e80121c83925b8418380a8a8a17aca.jpeg",
                            "height": 326,
                            "width": 550
                        },
                        "content": [
                            "后面发生的事情"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/crawler/264ee18aff7756426e299500efec343f.jpeg",
                            "height": 367,
                            "width": 550
                        },
                        "content": [
                            "70年后，安倍拒认《波茨坦公告》侵略战争定性。"
                        ]
                    }
                ],
                "type": 3,
                "create_time": "2015-08-11 16:50:00",
                "up_count": 398,
                "down_count": 6,
                "share_count": 0,
                "collect_count": 0,
                "comment_count": 0,
                "visit_count": 0,
                "report_count": 0,
                "comment": []
            },
            {
                "author": {
                    "avatar": "http://qiniu-file.zhuoyouapp.com/i/116/20150311044912profile1426063752.png",
                    "nick_name": "大婊姐",
                    "id": 116
                },
                "id": 27318,
                "category_id": 150,
                "category_name": "腐利社",
                "title": "世上最强大的声优阵容是奥特曼，因为日本前首相竟还为它配过音......",
                "subject": "",
                "cover": {
                    "img": "http://qiniu-file.zhuoyouapp.com/i/100/2015080716443673o_19s3lakb41vfpvie1nr2ca9o6jf.jpg",
                    "width": 500,
                    "height": 562
                },
                "content": [
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/100/2015080716443673o_19s3lakb41vfpvie1nr2ca9o6jf.jpg",
                            "height": 562,
                            "width": 500
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/100/20150807164438340o_19s3lami11an89gm143pd3n10qek.jpg",
                            "height": 844,
                            "width": 500
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/100/20150807164440349o_19s3laogr18fo1q351r321p3o10o6p.jpg",
                            "height": 844,
                            "width": 500
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/100/20150807164442331o_19s3laqeo1aof1nbf1t9es8t1iv9u.jpg",
                            "height": 844,
                            "width": 500
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/100/20150807164444270o_19s3lasbb1sun3bh1rt31l191pvo13.jpg",
                            "height": 844,
                            "width": 500
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/100/20150807164448262o_19s3lb083182u19cu1k3gndg16no1d.jpg",
                            "height": 844,
                            "width": 500
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/100/20150807164536310o_19s3lcf5j11e91jslmq2urn1tla1n.jpg",
                            "height": 562,
                            "width": 500
                        }
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/100/20150807164451354o_19s3lb38o1rimf4m153k14k21rp01i.jpg",
                            "height": 281,
                            "width": 500
                        },
                        "content": [
                            "谁都别拦着，小编要去补凹凸曼！！众多男神的声优都在内啊！！！"
                        ]
                    }
                ],
                "type": 3,
                "create_time": "2015-08-11 16:45:00",
                "up_count": 167,
                "down_count": 123,
                "share_count": 0,
                "collect_count": 0,
                "comment_count": 0,
                "visit_count": 0,
                "report_count": 0,
                "comment": []
            },
            {
                "author": {
                    "avatar": "http://qiniu-file.zhuoyouapp.com/i/82/20150309112700profile1425871620.jpg",
                    "nick_name": "普通人",
                    "id": 82
                },
                "id": 27516,
                "category_id": 132,
                "category_name": "哈哈党",
                "title": "听说18轮卡车司机是一个技术含量非常高的工作！女司机望而却步",
                "subject": "",
                "cover": {
                    "img": "http://qiniu-file.zhuoyouapp.com/i/40/2015081009583409o_19sal8cc77ll675m6p12gm1e2il.gif",
                    "width": 346,
                    "height": 191
                },
                "content": [
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/40/2015081009583409o_19sal8cc77ll675m6p12gm1e2il.gif",
                            "height": 191,
                            "width": 346
                        }
                    }
                ],
                "type": 3,
                "create_time": "2015-08-11 16:27:00",
                "up_count": 450,
                "down_count": 2,
                "share_count": 0,
                "collect_count": 0,
                "comment_count": 0,
                "visit_count": 0,
                "report_count": 0,
                "comment": []
            },
            {
                "author": {
                    "avatar": "http://qiniu-file.zhuoyouapp.com/i/89/20150309020802profile1425881282.jpg",
                    "nick_name": "十斤",
                    "id": 89
                },
                "id": 27827,
                "category_id": 138,
                "category_name": "逗比放映室",
                "title": "怎样让自己在合影中脱颖而出？？？",
                "subject": "",
                "cover": {
                    "img": "http://qiniu-file.zhuoyouapp.com/i/84/2015081017211439198486209.jpg",
                    "width": 720,
                    "height": 480
                },
                "content": [
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/84/2015081017211439198486209.jpg",
                            "height": 480,
                            "width": 720
                        },
                        "content": [
                            "怎样让自己在合影中脱颖而出？？？"
                        ],
                        "duration": 60,
                        "url": "http://qiniu-file.zhuoyouapp.com/v/84/20150810172023873o_19sbeiapr1j1bg141ji740p12btl.mp4"
                    }
                ],
                "type": 3,
                "create_time": "2015-08-11 16:20:00",
                "up_count": 448,
                "down_count": 104,
                "share_count": 0,
                "collect_count": 0,
                "comment_count": 0,
                "visit_count": 0,
                "report_count": 0,
                "comment": []
            },
            {
                "author": {
                    "avatar": "http://qiniu-file.zhuoyouapp.com/i/103/20150311055011profile1426067411.jpg",
                    "nick_name": "小爪",
                    "id": 103
                },
                "id": 28044,
                "category_id": 146,
                "category_name": "趣事海淘",
                "title": "#Tumblr精选#看歪果仁儿如何遛狗！给跪了...",
                "subject": "",
                "cover": {
                    "img": "http://qiniu-file.zhuoyouapp.com/i/103/20150811134946694o_19sdktcpv7uvbr81aok1prjnd1l.gif",
                    "width": 300,
                    "height": 122
                },
                "content": [
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/103/20150811134946694o_19sdktcpv7uvbr81aok1prjnd1l.gif",
                            "height": 122,
                            "width": 300
                        }
                    }
                ],
                "type": 3,
                "create_time": "2015-08-11 16:00:00",
                "up_count": 442,
                "down_count": 31,
                "share_count": 0,
                "collect_count": 0,
                "comment_count": 1,
                "visit_count": 3,
                "report_count": 0,
                "comment": []
            },
            {
                "author": {
                    "avatar": "http://qiniu-file.zhuoyouapp.com/i/55/20150305015859profile1425535139.jpg",
                    "nick_name": "肉食动物",
                    "id": 55
                },
                "id": 28078,
                "category_id": 134,
                "category_name": "胆小勿入",
                "title": "美国一位摄影师，用照片再现了童年噩梦场景，感受一下",
                "subject": "",
                "cover": {
                    "img": "http://qiniu-file.zhuoyouapp.com/i/44/20150811142620110o_19sdn0apt16m0i4ftkr37pbig.jpg",
                    "width": 428,
                    "height": 441
                },
                "content": [
                    {
                        "url": "http://qiniu-file.zhuoyouapp.com/i/44/20150811142620110o_19sdn0apt16m0i4ftkr37pbig.jpg",
                        "width": 428,
                        "height": 441
                    },
                    {
                        "url": "http://qiniu-file.zhuoyouapp.com/i/44/20150811142620474o_19sdn0aptvnv1945lr91ml2ntmh.jpg",
                        "width": 428,
                        "height": 6478
                    }
                ],
                "type": 2,
                "create_time": "2015-08-11 15:52:00",
                "up_count": 343,
                "down_count": 86,
                "share_count": 0,
                "collect_count": 0,
                "comment_count": 0,
                "visit_count": 3,
                "report_count": 0,
                "comment": []
            },
            {
                "author": {
                    "avatar": "http://qiniu-file.zhuoyouapp.com/i/91/20150731053810profile1438335490.jpg",
                    "nick_name": "腐女斯基",
                    "id": 91
                },
                "id": 27803,
                "category_id": 139,
                "category_name": "异国风情",
                "title": "别在出国了，中国境内竟然藏着一个韩国",
                "subject": "",
                "cover": {
                    "img": "http://qiniu-file.zhuoyouapp.com/i/95/20150810170141836o_19sbdg326ip51f4r1htjepr1j2al.jpg",
                    "width": 690,
                    "height": 386
                },
                "content": [
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/95/20150810170141836o_19sbdg326ip51f4r1htjepr1j2al.jpg",
                            "height": 386,
                            "width": 690
                        },
                        "content": [
                            "现在韩流来袭，不少人都喜欢出国去韩国耍一趟。可是我大四川境内竟然隐藏着一个韩国，还用出国干啥子？不要不信，今天小编就带你去看看。",
                            "济州岛VS泸沽湖"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/95/20150810170158_79d2e87b67595dc4bc378c5e07a00899.jpeg",
                            "height": 330,
                            "width": 600
                        },
                        "content": [
                            "（济州岛）"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/95/20150810170159_7e071db2cb018002d31ab3e1150f4251.jpeg",
                            "height": 415,
                            "width": 640
                        },
                        "content": [
                            "（泸沽湖）",
                            "济州岛是韩国最大的岛屿，素来有“韩国夏威夷”之称。而我们的泸沽湖是四川第一大天然淡水湖，也是咱们的“高原明珠”。这样看是不是一点也不输给济州岛。",
                            "景福宫VS青羊宫"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/95/20150810170200_e883a37a23f5c8c3ca5a3b8fe8831a40.jpeg",
                            "height": 480,
                            "width": 640
                        },
                        "content": [
                            "（景福宫）"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/95/20150810170201_aaad6c71b80e136bc9a61020563fa209.jpeg",
                            "height": 480,
                            "width": 640
                        },
                        "content": [
                            "（青羊宫）",
                            "景福宫、青羊宫，一个是朝鲜王朝的宫殿，一个是全真道圣地，都是历史留下的痕迹。",
                            "济州岛泰迪熊博物馆VS温江泰迪熊博物馆"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/95/20150810170203_b4434b5f649d3d9124cc1fe90c19e6b4.jpeg",
                            "height": 300,
                            "width": 450
                        },
                        "content": [
                            "（济州岛泰迪熊博物馆）"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/95/20150810170203_3dccd1f42f72f63241f7dbc87adc0e34.jpeg",
                            "height": 400,
                            "width": 600
                        },
                        "content": [
                            "（温江泰迪熊博物馆）",
                            "济州岛的泰迪熊博物馆在成都也有啦，而且成都的这个还是全球最大的泰迪熊博物馆。从此，大家不用再去韩国就能感受到泰迪之爱了。",
                            "明洞VS春熙路"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/95/20150810170204_98f9fdf4506141efe3277630126d66d8.jpeg",
                            "height": 450,
                            "width": 600
                        },
                        "content": [
                            "（明洞）"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/95/20150810170205_7cbd2956fe3c426a64b354459207ecf1.jpeg",
                            "height": 398,
                            "width": 600
                        },
                        "content": [
                            "（春熙路）",
                            "两条分别是韩国和四川最受欢迎的购物街，咱们的春熙路可是中西部第一商业街、中西部第一商家高地，一点也不输给明洞。",
                            "首尔塔VS四川广播电视塔"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/95/20150810170206_93d1cc4c993a4466b5f0bf6fd13a77fb.jpeg",
                            "height": 480,
                            "width": 640
                        },
                        "content": [
                            "（首尔塔）（四川广播电视塔）",
                            "不用说别的，首尔塔高236.7米，四川广播电视塔高339米。只从高度就知道哪个更赞了。",
                            "汉拿山VS贡嘎山"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/95/20150810170207_dce3879b4fefb99fc9797cadf765c8d1.jpeg",
                            "height": 328,
                            "width": 501
                        },
                        "content": [
                            "（汉拿山）"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/95/20150810170208_662580e6569b839e9c2f4b805e5a1200.jpeg",
                            "height": 409,
                            "width": 640
                        },
                        "content": [
                            "（贡嘎山）",
                            "汉拿山是南韩最高的山，但高度也仅有1,950米，对此，周围有海拔6,000米以上的山峰45座，主峰更是海拔7,556米的贡嘎山也只能看看不说话了。更别提贡嘎山的冰川景色，汉拿山有吗？",
                            "茂朱萤火虫VS天台山萤火虫"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/95/20150810170208_36e8748f75d53dd9978256e88bbf04b0.jpeg",
                            "height": 295,
                            "width": 477
                        },
                        "content": [
                            "（茂朱萤火虫）"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/95/20150810170217_737067d93092cd48a47683bbf9a89c6d.jpeg",
                            "height": 333,
                            "width": 500
                        },
                        "content": [
                            "（天台山萤火虫）"
                        ]
                    }
                ],
                "type": 3,
                "create_time": "2015-08-11 15:38:00",
                "up_count": 181,
                "down_count": 34,
                "share_count": 0,
                "collect_count": 0,
                "comment_count": 0,
                "visit_count": 4,
                "report_count": 0,
                "comment": []
            },
            {
                "author": {
                    "avatar": "http://qiniu-file.zhuoyouapp.com/i/110/20150311043928profile1426063168.jpg",
                    "nick_name": "派小星",
                    "id": 110
                },
                "id": 27648,
                "category_id": 153,
                "category_name": "冷知识",
                "title": "祖先为什么定16两为一斤，用心竟如此良苦！",
                "subject": "",
                "cover": {
                    "img": "http://qiniu-file.zhuoyouapp.com/i/100/20150810133929329o_19sb1tqt9fjd1olao9i1s941f8tl.jpg",
                    "width": 398,
                    "height": 377
                },
                "content": [
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/100/20150810133929329o_19sb1tqt9fjd1olao9i1s941f8tl.jpg",
                            "height": 377,
                            "width": 398
                        },
                        "content": [
                            "过去人们常用半斤八两来形容两个事物是一样的，为什么这么说呢？",
                            "原来我们祖先使用的秤是十六两为一斤，所以半斤和八两就是一样的。",
                            "那么老祖囘宗为什么定十六两为一斤呢？是他们不聪明吗？不是的。"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/100/20150810134142_8e127ae25cf43c74d21770bb60a9663f.jpeg",
                            "height": 234,
                            "width": 400
                        },
                        "content": [
                            "传说我们的先人观察到北斗七星，南斗六星，再加上旁边的福、禄、寿三星，正好是十六星。",
                            "北斗七星主亡，南斗六星主生，福、禄、寿三星分别主一个人一生的福、禄、寿。他们在天上看着人的一切，所以说：人在做，神在看。"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/100/20150810134143_1338bae116bb6f9a4e39bfbb4a0afc82.jpeg",
                            "height": 232,
                            "width": 400
                        },
                        "content": [
                            "据说做买卖的人，如果称东西，短斤少两，都要受到惩罚。卖东西少给人一两，福星就减少这个人的福；少给二两，禄星就给这个人减禄；要少给三两，寿星就给这个人减寿。"
                        ]
                    },
                    {
                        "img": {
                            "url": "http://qiniu-file.zhuoyouapp.com/i/100/20150810134143_aecde9645785e8a1ddfb4c119f91a0ea.jpeg",
                            "height": 167,
                            "width": 400
                        },
                        "content": [
                            "古代人都知道“人在做，神在看”，所以人都不敢做昧良心的事。现在学习西制，把十六两一斤改为十两一斤。但我们仍旧要时刻记得，人要受心法的约束，要有道德，不能为了钱什么坏事都敢干了。"
                        ]
                    }
                ],
                "type": 3,
                "create_time": "2015-08-11 15:35:00",
                "up_count": 440,
                "down_count": 7,
                "share_count": 0,
                "collect_count": 0,
                "comment_count": 0,
                "visit_count": 0,
                "report_count": 0,
                "comment": []
            }
        ]
    });
});

router.head('/head', function(req, res, next) {
    res.send({
        info: 'success'
    });
});



module.exports = router;
