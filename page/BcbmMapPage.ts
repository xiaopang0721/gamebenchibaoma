/**
* 奔驰宝马
*/
module gamebenchibaoma.page {
    import TextFieldU = utils.TextFieldU;
    import Path_game_benchibaoma = gamebenchibaoma.data.Path;
    const enum MAP_STATUS {
        PLAY_STATUS_NONE = 0, // 准备阶段
        PLAY_STATUS_GAMESTART = 1, // 游戏开始
        PLAY_STATUS_WASH_CARD = 2, // 洗牌阶段
        PLAY_STATUS_BET = 3,// 下注阶段
        PLAY_STATUS_STOP_BET = 4,// 停止下注阶段
        PLAY_STATUS_PUSH_CARD = 5, // 发牌阶段
        PLAY_STATUS_SHOW_CARD = 6, // 开牌阶段
        PLAY_STATUS_SETTLE = 7, // 结算阶段
        PLAY_STATUS_SHOW_INFO = 8, // 显示结算框阶段
        PLAY_STATUS_RELAX = 9, // 休息阶段
    }
    const MONEY_NUM = 40; // 特效金币数量
    const MONEY_FLY_TIME = 30; // 金币飞行时间间隔

    const SEAT_NUM = 6; // 座位数量
    const CHIP_TYPE_NUM = 5; // 筹码类型种类
    const BET_AREA_NUM = 8; // 下注区域数
    const ALL_GAME_ROOM_CONFIG_ID = [161, 162, 163, 164];// 可进入的maplv
    const MONEY_LIMIT_CONFIG = {
        "161": [5000, 2000, 5000],    //新手(上庄限制，入座限制，投注限额)
        "162": [20000, 5000, 8000],  //小资(上庄限制，入座限制，投注限额)
        "163": [50000, 10000, 25000],  //老板(上庄限制，入座限制，投注限额)
        "164": [100000, 20000, 50000],    //富豪(上庄限制，入座限制，投注限额)
    };
    const ROOM_CHIP_CONFIG = {
        "161": [1, 10, 50, 100, 1000],     //新手
        "162": [10, 50, 100, 500, 1000],   //小资
        "163": [50, 100, 500, 1000, 5000],  //老板
        "164": [100, 500, 1000, 5000, 10000],  //富豪
    };
    const enum CAR_TYPE {
        CAR_TYPE_LBJN = 1,       //兰博基尼
        CAR_TYPE_BSJ = 2,       //保时捷
        CAR_TYPE_BC = 3,        //奔驰
        CAR_TYPE_BM = 4,         //宝马
        CAR_TYPE_LBJNX = 5,      //兰博基尼小
        CAR_TYPE_BSJX = 6,      //保时捷小
        CAR_TYPE_BCX = 7,        //奔驰小
        CAR_TYPE_BMX = 8,        //宝马小
    }
    const CAR_TYPE_DATA: number[] = [
        CAR_TYPE.CAR_TYPE_LBJNX, CAR_TYPE.CAR_TYPE_LBJN, CAR_TYPE.CAR_TYPE_BSJX, CAR_TYPE.CAR_TYPE_BSJ,
        CAR_TYPE.CAR_TYPE_BCX, CAR_TYPE.CAR_TYPE_BC, CAR_TYPE.CAR_TYPE_BMX, CAR_TYPE.CAR_TYPE_BM,

        CAR_TYPE.CAR_TYPE_LBJNX, CAR_TYPE.CAR_TYPE_LBJN, CAR_TYPE.CAR_TYPE_BSJX, CAR_TYPE.CAR_TYPE_BSJ,
        CAR_TYPE.CAR_TYPE_BCX, CAR_TYPE.CAR_TYPE_BC, CAR_TYPE.CAR_TYPE_BMX, CAR_TYPE.CAR_TYPE_BM,

        CAR_TYPE.CAR_TYPE_LBJNX, CAR_TYPE.CAR_TYPE_LBJN, CAR_TYPE.CAR_TYPE_BSJX, CAR_TYPE.CAR_TYPE_BSJ,
        CAR_TYPE.CAR_TYPE_BCX, CAR_TYPE.CAR_TYPE_BC, CAR_TYPE.CAR_TYPE_BMX, CAR_TYPE.CAR_TYPE_BM,

        CAR_TYPE.CAR_TYPE_LBJNX, CAR_TYPE.CAR_TYPE_LBJN, CAR_TYPE.CAR_TYPE_BSJX, CAR_TYPE.CAR_TYPE_BSJ,
        CAR_TYPE.CAR_TYPE_BCX, CAR_TYPE.CAR_TYPE_BC, CAR_TYPE.CAR_TYPE_BMX, CAR_TYPE.CAR_TYPE_BM,
    ];
    const CAR_SKIN: string[] = [
        "",
        Path_game_benchibaoma.ui_benchibaoma + "tu_lb1.png",
        Path_game_benchibaoma.ui_benchibaoma + "tu_bsj1.png",
        Path_game_benchibaoma.ui_benchibaoma + "tu_bc1.png",
        Path_game_benchibaoma.ui_benchibaoma + "tu_bm1.png",

        Path_game_benchibaoma.ui_benchibaoma + "tu_lb2.png",
        Path_game_benchibaoma.ui_benchibaoma + "tu_bsj2.png",
        Path_game_benchibaoma.ui_benchibaoma + "tu_bc2.png",
        Path_game_benchibaoma.ui_benchibaoma + "tu_bm2.png"
    ];
    export class BcbmMapPage extends game.gui.base.Page {
        private _viewUI: ui.nqp.game_ui.benchibaoma.BenChiBaoMaUI;
        private _bcbmStory: BenchibaomaStory;
        private _bcbmMapInfo: BenchibaomaMapInfo;

        private _seatlimit: number;//入座金币
        private _seatList: Array<any> = [];//座位UI集合
        private _unitSeated: Array<any> = [];//入座精灵信息集合

        private _curChip: number;//当前选择筹码
        private _curChipY: number;//当前选择筹码y轴位置
        private _chipList: Array<Button> = [];//筹码UI集合
        private _chipGuangList: Array<LImage> = [];//筹码光效UI集合
        private _chipArr: Array<number> = [];//筹码大小类型
        private _chipSortScore: number = 0;//筹码层级
        private _lottery: string = "";//中奖区域
        private _betMainTotal: number = 0;//玩家总下注
        private _allChips: Array<Array<any>> = [];//所有筹码
        private _areaList: Array<any> = [];//下注区域UI集合
        private _areaKuangList: Array<any> = [];//下注区域边框集合
        private _allTotalBetUI: Label[] = [];//下注文本
        private _allMainBetUI: Label[] = [];//自己下注文本
        private _allTotalBet: Array<number> = [];//所有玩家总下注
        private _allMainBet: Array<number> = [];//所有主玩家下注
        private _rebetList: Array<number> = [];//重复下注列表
        private _lotteryKuangIndex: number = 0;
        private _lotteryStartTime: number = 0;


        private _mainPlayerBenefit: number = 0;//玩家收益
        private _clipList: Array<BenchibaomaClip> = [];//飘字集合

        private _betlimit: number;//投注限额
        private _curStatus: number;//当前地图状态
        private _countDown: number = 0;//倒计时时间戳
        private _lotteryIndex: number = 0;
        private _effPage: BcbmEffectPage;


        private _mainHeadPos: any = [[0, 0], [0, -10]];//主玩家座位头像初始位置
        private _headStartPos: any = [[0, 0], [0, 171], [0, 340], [0, 0], [0, 171], [0, 340]];//座位头像初始位置
        private _headEndPos: any = [[10, 0], [10, 171], [10, 340], [-10, 0], [-10, 171], [-10, 340]];//座位头像移动位置
        private _htmlText: laya.html.dom.HTMLDivElement;
        private _isFirstOpen: boolean = false;
        private _carTypeData: Array<Array<number>>;

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedDuang = false;
            this._delta = 1000;
            this._asset = [
                PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + 'dating.atlas',
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                Path_game_benchibaoma.atlas_game_ui + "benchibaoma.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.benchibaoma.BenChiBaoMaUI');
            this.addChild(this._viewUI);
            this._viewUI.txt_status.visible = false;
            if (!this._pageHandle) {
                this._pageHandle = PageHandle.Get("BcbmMapPage");//额外界面控制器
            }
            this._viewUI.main_player.clip_money.visible = false;
            this._effPage = new BcbmEffectPage(this._game, this._viewUI.box_car, this._viewUI);

            this._seatList = [];
            for (let i: number = 0; i < SEAT_NUM; i++) {
                this._seatList.push(this._viewUI["seat" + i]);
                this._seatList[i].clip_money.visible = false;
            }

            this._chipList = [];
            this._chipGuangList = [];
            for (let i: number = 0; i < CHIP_TYPE_NUM; i++) {
                this._chipList.push(this._viewUI["btn_chip" + i]);
                this._chipGuangList.push(this._viewUI["guang" + i]);
                if (i == 0) {
                    this._curChipY = this._chipList[i].y;
                }
            }

            this._allChips = [];
            this._allTotalBet = [];
            this._allMainBet = [];
            this._rebetList = [];
            for (let i: number = 0; i < BET_AREA_NUM; i++) {
                this._allChips[i] = [];
                this._allTotalBet[i] = 0;
                this._allMainBet[i] = 0;
                this._rebetList[i] = 0;
            }

            this._areaList = [];
            this._areaKuangList = [];
            this._allMainBetUI = [];
            this._allTotalBetUI = [];
            for (let i: number = 0; i < BET_AREA_NUM; i++) {
                this._areaList.push(this._viewUI["area" + i]);
                this._areaKuangList.push(this._viewUI["kuang" + i]);
                this._areaKuangList[i].visible = false;
                this._allMainBetUI[i] = this._viewUI["txt_main_" + i];
                this._allTotalBetUI[i] = this._viewUI["txt_total_" + i];
            }

            //车标
            this._carTypeData = [];
            for (let i: number = 0; i < CAR_TYPE_DATA.length; i++) {
                let type: number = CAR_TYPE_DATA[i];
                if (this._viewUI["img_che_" + i]) {
                    this._viewUI["img_che_" + i].skin = CAR_SKIN[type];
                }
                if (!this._carTypeData[type]) {
                    this._carTypeData[type] = [];
                }
                this._carTypeData[type].push(i);
            }

            this._viewUI.list_record.itemRender = this.createChildren("game_ui.benchibaoma.component.RecordItemUI", MapRecordRender);
            this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);


            if (!this._htmlText) {
                this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_online);
            }
            this._viewUI.mouseThrough = true;
            this._game.playMusic(Path_game_benchibaoma.music_benchibaoma + "BGM_1.mp3");
            this._viewUI.btn_repeat.disabled = true;
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this._bcbmStory = this._game.sceneObjectMgr.story as BenchibaomaStory;
            this._viewUI.box_menu.zOrder = 99;
            this._viewUI.box_menu.visible = false;
            this._betWait = false;
            this._countDown = 0;
            this._lotteryKuangIndex = 0;

            this.resetUI();
            this.onSelectChip(0);
            this.onUpdateUnit();
            this.onUpdateUnitOffline();
            this.onUpdateSeatedList();
            this.onUpdateMapInfo();
            this.updateBetNum();
            this.onUpdateRecord();

            this._game.sceneObjectMgr.on(BenchibaomaMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
            this._game.sceneObjectMgr.on(BenchibaomaMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
            this._game.sceneObjectMgr.on(BenchibaomaMapInfo.EVENT_STATUS_CONTINUE, this, this.onUpdateUnit);//继续游戏状态改变后
            this._game.sceneObjectMgr.on(BenchibaomaMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown);//倒计时时间戳更新
            this._game.sceneObjectMgr.on(BenchibaomaMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList);//入座列表更新
            this._game.sceneObjectMgr.on(BenchibaomaMapInfo.EVENT_STATUS_CHECK, this, this.initRoomConfig);//地图传送参数
            this._game.sceneObjectMgr.on(BenchibaomaMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord);//游戏记录更新
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);

            this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);

            this._viewUI.btn_spread.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_zhanji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_chong.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_repeat.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_playerList.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);


            for (let i: number = 0; i < this._seatList.length; i++) {
                this._seatList[i] && this._seatList[i].on(LEvent.CLICK, this, this.onSelectSeat, [i]);
            }

            for (let i: number = 0; i < this._chipList.length; i++) {
                this._chipList[i] && this._chipList[i].on(LEvent.CLICK, this, this.onSelectChip, [i]);
            }

            for (let i: number = 0; i < this._areaList.length; i++) {
                this._areaList[i] && this._areaList[i].on(LEvent.CLICK, this, this.onAreaBetClick, [i]);
            }
        }

        protected onMouseClick(e: LEvent) {
            if (e.target != this._viewUI.btn_spread) {
                this.showMenu(false);
            }
        }

        showMenu(isShow: boolean) {
            if (isShow) {
                this._viewUI.box_menu.visible = true;
                this._viewUI.btn_spread.visible = false;
                this._viewUI.box_menu.y = -this._viewUI.box_menu.height;
                Laya.Tween.clearAll(this._viewUI.box_menu);
                Laya.Tween.to(this._viewUI.box_menu, { y: 10 }, 300, Laya.Ease.circIn)
            } else {
                if (this._viewUI.box_menu.y >= 0) {
                    Laya.Tween.clearAll(this._viewUI.box_menu);
                    Laya.Tween.to(this._viewUI.box_menu, { y: -this._viewUI.box_menu.height }, 300, Laya.Ease.circIn, Handler.create(this, () => {
                        this._viewUI.btn_spread.visible = true;
                        this._viewUI.box_menu.visible = false;
                    }));
                }
            }
        }

        //按钮缓动回调
        protected onBtnTweenEnd(e: any, target: any): void {
            switch (target) {
                case this._viewUI.btn_spread:
                    this.showMenu(true);
                    break;
                case this._viewUI.btn_rule:
                    this._game.uiRoot.general.open(BenchibaomaPageDef.PAGE_BCBM_RULE);
                    break;
                case this._viewUI.btn_set:
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING)
                    break;
                case this._viewUI.btn_qifu:
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU)
                    break;
                case this._viewUI.btn_zhanji:
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, (page) => {
                        page.dataSource = BenchibaomaPageDef.GAME_NAME;
                    });

                    break;
                case this._viewUI.btn_back:
                    let totalBet = 0;
                    for (let i: number = 0; i < this._allMainBet.length; i++) {
                        totalBet += this._allMainBet[i];
                    }
                    if (totalBet && this._bcbmMapInfo && this._bcbmMapInfo.GetPlayState() == 1) {
                        this._game.showTips("游戏尚未结束，请先打完这局哦~");
                        return;
                    }

                    TongyongPageDef.ins.alertClose("benchibaoma", this, this.onClickCancle);

                    break;
                case this._viewUI.btn_playerList://玩家列表
                    this._game.uiRoot.general.open(BenchibaomaPageDef.PAGE_BCBM_PLAYER_LIST);
                    break;
                case this._viewUI.btn_repeat:
                    if (this.showIsGuest()) return;
                    this.repeatBet();
                    break;
                case this._viewUI.btn_chong:
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    break;
                default:
                    break;
            }
        }

        //确定退出回调
        private onClickCancle(): void {
            this._game.sceneObjectMgr.leaveStory(true);
            // this.close();
        }

        //选择座位入座
        private onSelectSeat(index: number): void {
            if (this.showIsGuest()) return;
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            if (mainUnit.GetMoney() < this._seatlimit) {
                this._game.uiRoot.topUnder.showTips("金币不足");
                return;
            }
            this._game.network.call_benchibaoma_seated(index + 1);
        }

        //选择筹码
        private onSelectChip(index: number): void {
            this._curChip = this._chipArr[index];
            for (let i: number = 0; i < this._chipList.length; i++) {
                this._chipGuangList[i].visible = i == index;
                this._chipList[i].y = i == index ? this._curChipY - 10 : this._curChipY;
            }
        }

        //重复下注
        private repeatBet(): void {
            if (this.showIsGuest()) return;
            if (this._betWait) return;//投注间隔
            let betArr = [];
            let total = 0;
            for (let i = 0; i < this._rebetList.length; i++) {
                total += this._rebetList[i];
            }
            if (total > this._game.sceneObjectMgr.mainUnit.GetMoney()) {
                this._game.uiRoot.topUnder.showTips("老板,您的金币不够重复下注啦~");
                return;
            }
            for (let i = 0; i < this._rebetList.length; i++) {
                let antes = this._rebetList[i]//之前区域i下注总额
                if (antes) {
                    //从最大筹码开始循环，优先丢出大额筹码，剩下零头再由小额筹码去拼凑
                    for (let j = this._chipArr.length - 1; j >= 0; j--) {
                        if (!antes) break;
                        let num = Math.floor(antes / this._chipArr[j]);
                        if (num) {
                            antes = antes - this._chipArr[j] * num;
                            for (let k = 0; k < num; k++) {
                                this._game.network.call_benchibaoma_bet(this._chipArr[j], i + 1);
                            }
                        }
                    }
                }
            }
            this._betWait = true;
            Laya.timer.once(500, this, () => {
                this._betWait = false;
            })
        }

        //下注
        private _betWait: boolean = false;
        private onAreaBetClick(index: number, e: LEvent): void {
            if (this.showIsGuest()) return;
            if (this._curStatus != MAP_STATUS.PLAY_STATUS_BET) {
                this._game.uiRoot.topUnder.showTips("当前不在下注时间，请在下注时间再进行下注！");
                return;
            }
            if (this._betWait) return;//投注间隔
            let total = this._allMainBet[index];
            if (this._curChip + total > this._betlimit) {
                this._game.uiRoot.topUnder.showTips(StringU.substitute("本投注点限红{0}哦~", this._betlimit));
                return;
            }
            let money = this._game.sceneObjectMgr.mainUnit.GetMoney();
            if (!this._curChip) {
                TongyongPageDef.ins.alertRecharge("老板，您的金币不足哦~\n补充点金币去大杀四方吧~", () => {
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, () => {
                }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                return;
            }
            if (this._curChip > money) {
                this._game.uiRoot.topUnder.showTips("老板，您的金币不足哦~");
                return;
            }
            this._betWait = true;
            this._areaKuangList[index].visible = true;
            Laya.timer.once(500, this, () => {
                this._betWait = false;
                this._areaKuangList[index].visible = false;
            })
            this._game.network.call_benchibaoma_bet(this._curChip, index + 1)
        }

        //帧心跳
        update(diff: number) {
            if (!this._viewUI) return;
            super.update(diff);
            if (this._effPage) {
                this._effPage.Update(diff);
            }

            if (this._lotteryKuangIndex > 0) {
                let time: number = this._game.sync.serverTimeBys * 1000 - this._lotteryStartTime;
                if (time >= 0) {
                    time %= 600;
                    if (time > 300) time = 600 - time;
                    let per: number = time / 300;
                    this._areaKuangList[this._lotteryKuangIndex - 1].alpha = per;
                }
            }
        }

        //帧间隔心跳
        deltaUpdate() {
            if (!this._viewUI) return;
            let bool = this._curStatus == MAP_STATUS.PLAY_STATUS_BET;
            if (!bool) {
                this._viewUI.box_time.visible = false;
                return;
            }
            let curTime = this._game.sync.serverTimeBys;
            let time = Math.floor(this._countDown - curTime);
            // this.updateClip(time);
            this._viewUI.box_time.visible = time > 0;
            this._viewUI.box_time.txt_time.text = time.toString();
            if (time <= 3 && !this._viewUI.box_time.ani1.isPlaying) {
                this._viewUI.box_time.ani1.play(1, true);
            }
            if (time > 3) {
                this._viewUI.box_time.ani1.gotoAndStop(24);
            }

            if (time == 1) {
                this._game.playSound(PathGameTongyong.music_tongyong + "time2.mp3", false);
            } else if (time == 2 || time == 3) {
                this._game.playSound(PathGameTongyong.music_tongyong + "time1.mp3", false);
            }
        }

        //玩家进来了
        private onUnitAdd(u: Unit) {
            this.onUpdateUnit();
        }

        //玩家出去了
        private onUnitRemove(u: Unit) {
            this.onUpdateUnit();
        }

        private onUpdateUnit(qifu_index?: number) {
            if (!this._bcbmMapInfo) return;
            //主玩家的座位
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (mainUnit) {
                let headImg = mainUnit.GetHeadImg();
                this._viewUI.main_player.txt_name.text = getMainPlayerName(mainUnit.GetName());
                let money = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2);
                money >= 0 && (this._viewUI.main_player.txt_money.text = money.toString());
                let mainIdx = mainUnit.GetIndex();
                this._viewUI.main_player.img_txk.visible = mainUnit.GetVipLevel() > 0;
                if (this._viewUI.main_player.img_txk.visible) {
                    this._viewUI.main_player.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mainUnit.GetVipLevel() + ".png";
                }
                //祈福成功 头像上就有动画
                if (qifu_index && mainIdx == qifu_index) {
                    this._viewUI.main_player.qifu_type.visible = true;
                    this._viewUI.main_player.qifu_type.skin = this._qifuTypeImgUrl;
                    this.playTween(this._viewUI.main_player.qifu_type, qifu_index);
                }
                //时间戳变化 才加上祈福标志
                if (mainUnit.GetQFEndTime(mainUnit.GetQiFuType() - 1) > this._game.sync.serverTimeBys) {
                    if (qifu_index && mainIdx == qifu_index) {
                        Laya.timer.once(2500, this, () => {
                            this._viewUI.main_player.img_qifu.visible = true;
                            if (mainUnit.GetQiFuType()) {
                                let qifuImgUrl = this._nameStrInfo[mainUnit.GetQiFuType() - 1];
                                this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                            }
                        })
                    } else {
                        this._viewUI.main_player.img_qifu.visible = true;
                        if (mainUnit.GetQiFuType()) {
                            let qifuImgUrl = this._nameStrInfo[mainUnit.GetQiFuType() - 1];
                            this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                        }
                    }
                } else {
                    this._viewUI.main_player.img_qifu.visible = false;
                    if (headImg) {
                        this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + headImg + ".png";
                    }
                }
            }
            let onlineNum = 0;
            for (let key in this._game.sceneObjectMgr.unitDic) {
                if (this._game.sceneObjectMgr.unitDic.hasOwnProperty(key)) {
                    let unit = this._game.sceneObjectMgr.unitDic[key];
                    if (unit) {
                        onlineNum++;
                    }
                }
            }
            let maplv = this._bcbmMapInfo.GetMapLevel();
            if (maplv == Web_operation_fields.GAME_ROOM_CONFIG_BENCHIBAOMA_1) {
                let curHour = Sync.getHours(this._game.sync.serverTimeBys * 1000);//当前几点钟
                if (curHour >= 1 && curHour < 13) {
                    onlineNum += 50
                } else {
                    onlineNum += 150
                }
            } else if (maplv == Web_operation_fields.GAME_ROOM_CONFIG_BENCHIBAOMA_2) {
                let curHour = Sync.getHours(this._game.sync.serverTimeBys * 1000);//当前几点钟
                if (curHour >= 19 || curHour < 1) {
                    onlineNum += 100
                }
            }
            let innerHtml = StringU.substitute("在线<span style='color:#18ff00'>{0}</span>人", onlineNum);
            this._htmlText.innerHTML = innerHtml;
            this.onUpdateChipGrey();
            this.onUpdateSeatedList(qifu_index);
        }

        private _diff: number = 500;
        private _timeList: { [key: number]: number } = {};
        private _firstList: { [key: number]: number } = {};
        private playTween(img: LImage, index, isTween?: boolean) {
            if (!img) return;
            if (!this._timeList[index]) {
                this._timeList[index] = 0;
            }
            if (this._timeList[index] >= 2500) {
                this._timeList[index] = 0;
                this._firstList[index] = 0;
                img.visible = false;
                return;
            }
            Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween, [img, index, !isTween]), this._firstList[index] ? this._diff : 0);
            this._timeList[index] += this._diff;
            this._firstList[index] = 1;
        }
        private _timeList1: { [key: number]: number } = {};
        private _firstList1: { [key: number]: number } = {};
        private playTween1(img: LImage, index, isTween?: boolean) {
            if (!img) return;
            if (!this._timeList1[index]) {
                this._timeList1[index] = 0;
            }
            if (this._timeList1[index] >= 2500) {
                this._timeList1[index] = 0;
                this._firstList1[index] = 0;
                img.visible = false;
                return;
            }
            Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween1, [img, index, !isTween]), this._firstList1[index] ? this._diff : 0);
            this._timeList1[index] += this._diff;
            this._firstList1[index] = 1;
        }

        private _nameStrInfo: string[] = ["xs", "px", "gsy", "gg", "cs", "tdg"];
        private _qifuTypeImgUrl: string;
        protected onOptHandler(optcode: number, msg: any) {
            if (msg.type == Operation_Fields.OPRATE_GAME) {
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_GAME_QIFU_SUCCESS_RESULT:
                        let dataInfo = JSON.parse(msg.data);
                        //打开祈福动画界面
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU_ANI, (page) => {
                            page.dataSource = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}1.png", this._nameStrInfo[dataInfo.qf_id - 1]);
                        });
                        //相对应的玩家精灵做出反应
                        this._qifuTypeImgUrl = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}2.png", this._nameStrInfo[dataInfo.qf_id - 1]);
                        this.onUpdateUnit(dataInfo.qifu_index);
                        break;
                }
            }
        }

        //更新地图信息
        private onUpdateMapInfo(): void {
            let mapinfo = this._game.sceneObjectMgr.mapInfo;
            this._bcbmMapInfo = mapinfo as BenchibaomaMapInfo;
            if (mapinfo) {
                this.initRoomConfig();
                this.onUpdateBattle();
                this.onUpdateStatus();
                this.onUpdateSeatedList();
                this.onUpdateRecord();
                this.onUpdateCountDown();
                this.onUpdateUnit();
            }
        }

        private initRoomConfig(): void {
            let maplv = this._bcbmMapInfo.GetMapLevel();
            if (maplv && ALL_GAME_ROOM_CONFIG_ID.indexOf(maplv) != -1) {
                this._chipArr = ROOM_CHIP_CONFIG[maplv];
                this._seatlimit = MONEY_LIMIT_CONFIG[maplv][1];
                this._betlimit = MONEY_LIMIT_CONFIG[maplv][2];

                if (!this._chipArr) return;
                for (let i = 0; i < this._chipArr.length; i++) {
                    this._chipList[i].label = EnumToString.sampleChipNum(this._chipArr[i]);
                }
                if (!this._curChip) this.onSelectChip(0);
            }
        }

        //更新座位信息
        private onUpdateSeatedList(qifu_index?: number): void {
            if (!this._bcbmMapInfo) return;
            let seatedList = this._bcbmMapInfo.GetSeatedList();
            if (seatedList != "") {
                // logd(mapinfo.GetSeatedList());
                this._unitSeated = JSON.parse(seatedList);
            }
            if (!this._unitSeated.length) {
                return;
            }
            for (let i = 0; i < this._seatList.length; i++) {
                let unitIndex = this._unitSeated[i][0];
                let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIndex);
                if (unit) {
                    (this._seatList[i] as ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI).txt_name.text = getMainPlayerName(unit.GetName());
                    (this._seatList[i] as ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI).txt_name.fontSize = 15;
                    (this._seatList[i] as ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI).txt_money.text = EnumToString.getPointBackNum(unit.GetMoney(), 2).toString();
                    let unitHeadImg = unit.GetHeadImg();
                    if (unitHeadImg) {
                        (this._seatList[i] as ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI).img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unitHeadImg + ".png";
                    }
                    this._seatList[i].img_txk.visible = unit.GetVipLevel() > 0;
                    if (this._seatList[i].img_txk.visible) {
                        this._seatList[i].img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unit.GetVipLevel() + ".png";
                    }
                    //祈福成功 头像上就有动画
                    if (qifu_index && unitIndex == qifu_index) {
                        this._seatList[i].qifu_type.visible = true;
                        this._seatList[i].qifu_type.skin = this._qifuTypeImgUrl;
                        this.playTween1(this._seatList[i].qifu_type, qifu_index);
                    }
                    //时间戳变化 才加上祈福标志
                    if (unit.GetQFEndTime(unit.GetQiFuType() - 1) > this._game.sync.serverTimeBys) {
                        if (qifu_index && unitIndex == qifu_index) {
                            Laya.timer.once(2500, this, () => {
                                this._seatList[i].img_qifu.visible = true;
                                if (unit.GetQiFuType()) {
                                    let qifuImgUrl = this._nameStrInfo[unit.GetQiFuType() - 1];
                                    (this._seatList[i] as ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI).img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                                }
                            })
                        } else {
                            this._seatList[i].img_qifu.visible = true;
                            if (unit.GetQiFuType()) {
                                let qifuImgUrl = this._nameStrInfo[unit.GetQiFuType() - 1];
                                (this._seatList[i] as ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI).img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                            }
                        }
                    } else {
                        this._seatList[i].img_qifu.visible = false;
                    }
                } else {
                    (this._seatList[i] as ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI).txt_name.text = "";
                    (this._seatList[i] as ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI).txt_name.fontSize = 20;
                    (this._seatList[i] as ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI).txt_money.text = "点击入座";
                    (this._seatList[i] as ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI).img_icon.skin = PathGameTongyong.ui_tongyong_general + "tu_weizi.png";
                    this._seatList[i].img_qifu.visible = false;
                    this._seatList[i].qifu_type.visible = false;
                    this._seatList[i].img_txk.visible = false;
                }
            }
        }

        private onUpdateCountDown(): void {
            if (!this._bcbmMapInfo) return;
            this._countDown = this._bcbmMapInfo.GetCountDown();
        }

        private onUpdateChipGrey() {
            if (!this._game.sceneObjectMgr.mainUnit) return;
            let money: number = this._game.sceneObjectMgr.mainUnit.GetMoney();
            for (let i = 0; i < this._chipList.length; i++) {
                let index = this._chipList.length - 1 - i;
                if (money < this._chipArr[index]) {
                    this._chipList[index].disabled = true;
                    this._chipList[index].y = this._curChipY;
                    if (this._curChip == this._chipArr[index]) {

                    }
                } else {
                    this._chipList[index].disabled = false;
                }
            }
        }

        private isPlayingEff(): boolean {
            return this._effPage && this._effPage.isPlaying;
        }

        private onUpdateUnitOffline() {
            let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
            if (!mainPlayer) return;
            let mainPlayerInfo = mainPlayer.playerInfo;
            this._viewUI.main_player.txt_name.text = getMainPlayerName(mainPlayerInfo.nickname);
            this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mainPlayerInfo.headimg + ".png";
            // let money = parseFloat(mainPlayerInfo.money.toFixed(2));
            this._viewUI.main_player.txt_money.text = EnumToString.getPointBackNum(mainPlayerInfo.money, 2).toString();
            this._viewUI.main_player.img_qifu.visible = mainPlayer.GetQiFuEndTime(mainPlayerInfo.qifu_type - 1) > this._game.sync.serverTimeBys;
            if (this._viewUI.main_player.img_qifu.visible) {
                this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mainPlayerInfo.qifu_type - 1] + ".png";
            }
            this._viewUI.main_player.img_txk.visible = mainPlayerInfo.vip_level > 0;
            if (this._viewUI.main_player.img_txk.visible) {
                this._viewUI.main_player.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mainPlayerInfo.vip_level + ".png";
            }
        }

        private updateMoney(): void {
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (mainUnit) {
                // let money = parseFloat(mainUnit.GetMoney().toFixed(2));
                this._viewUI.main_player.txt_money.text = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2).toString();
            }
        }

        private static CHE_NAME: string[] = [
            "大兰博基尼", "大保时捷", "大奔驰", "大宝马",
            "小兰博基尼", "小保时捷", "小奔驰", "小宝马"
        ]
        //战斗结构体更新
        private _battleIndex: number = -1;
        private _lotteryInfo: gamecomponent.object.BattleInfoBCBMLottery;
        private onUpdateBattle() {
            if (!this._bcbmMapInfo) return;
            let battleInfoMgr = this._bcbmMapInfo.battleInfoMgr;
            if (!battleInfoMgr) return;
            for (let i = 0; i < battleInfoMgr.info.length; i++) {
                let info = battleInfoMgr.info[i];
                if (info instanceof gamecomponent.object.BattleInfoAreaBet) {
                    if (this._battleIndex < i) {
                        this._battleIndex = i;
                        this.onBattleBet(info, i);
                    }
                }
                if (info instanceof gamecomponent.object.BattleInfoBCBMLottery) {
                    if (this._battleIndex < i) {
                        this._battleIndex = i;
                        this._lotteryInfo = info;
                        this._lotteryIndex = info.lotteryIndex;
                        this._lottery = BcbmMapPage.CHE_NAME[info.lotteryIndex - 1];
                        console.log("奔驰宝马开奖索引：" + this._lotteryIndex);
                        // let carArr:number[] = this._carTypeData[this._lotteryIndex];
                        // let index:number = carArr[Math.floor(Math.random()*carArr.length)];
                        let index: number = info.lotteryPos - 1;
                        if (this._effPage) {
                            this._effPage.playEff(index, info.startTime, Handler.create(this, this.onEffComplete, null, false));
                            if (!this._bcbmStory.isReconnect) {
                                this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "paoche.mp3");
                            }
                        }

                    }
                }
                if (info instanceof gamecomponent.object.BattleInfoSettle) {
                    if (this._battleIndex < i) {
                        this._battleIndex = i;
                        this.onBattleSettle(info);
                    }
                }

            }
        }

        private onEffComplete(callType: number, type: number, index: number, isFirst: boolean, totalIdx: number = 0, startIdx: number = 0, endIdx: number = 0): void {
            if (callType == 1 || callType == 2) {
                if (totalIdx < startIdx + 5 || totalIdx > endIdx - 15) {
                    this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "zhuandong.mp3");
                } else {
                    let yu: number = (totalIdx - startIdx - 5) % 3;
                    if (yu == 0) {
                        this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "zhuandong.mp3");
                    }
                }

                if (totalIdx == endIdx) {
                    this._lotteryKuangIndex = this._lotteryIndex;
                    this._lotteryStartTime = this._game.sync.serverTimeBys * 1000;
                    if (this._areaKuangList[this._lotteryKuangIndex - 1]) this._areaKuangList[this._lotteryKuangIndex - 1].visible = true;
                    Laya.timer.once(3000, this, () => {
                        if (this._areaKuangList[this._lotteryKuangIndex - 1]) this._areaKuangList[this._lotteryKuangIndex - 1].visible = false;
                        this._lotteryKuangIndex = 0;
                        this._lotteryStartTime = 0;
                    })
                }
            }

        }


        //战斗日志来更新桌面上的筹码
        private onBattleBet(info: any, index: number): void {
            //主玩家的座位
            if (!this._game.sceneObjectMgr.mainUnit) return;
            let mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let startIdx: number;
            let targetIdx: number;
            let isMainPlayer: boolean = info.SeatIndex == mainIdx;
            if (isMainPlayer) {//主玩家
                startIdx = 0;
                this.moveHead(this._viewUI.main_player, this._mainHeadPos[0][0], this._mainHeadPos[0][1], this._mainHeadPos[1][0], this._mainHeadPos[1][1]);
            } else {//其他玩家
                startIdx = 1;
                for (let i = 0; i < this._unitSeated.length; i++) {
                    let unitIndex = this._unitSeated[i][0];
                    let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIndex);
                    if (unit && info.SeatIndex == unitIndex) {
                        this.moveHead(this._seatList[i], this._headStartPos[i][0], this._headStartPos[i][1], this._headEndPos[i][0], this._headEndPos[i][1]);
                        startIdx = 3 + i;
                    }
                }
                if (startIdx == 1) {
                    this.moveHead(this._viewUI.btn_playerList, 70, 657, 89, 639);
                }
            }
            targetIdx = info.BetIndex;
            let type = this._chipArr.indexOf(info.BetVal) + 1;
            this.createChip(startIdx, targetIdx, type, info.BetVal, index, info.SeatIndex);
            this.updateChipOnTable(targetIdx - 1, info.BetVal, isMainPlayer);
        }

        //头像出筹码动态效果
        private moveHead(view, startX, startY, endX, endY): void {
            Laya.Tween.clearAll(view);
            Laya.Tween.to(view, { x: endX, y: endY }, 150, null, Handler.create(this, () => {
                Laya.Tween.to(view, { x: startX, y: startY }, 150);
            }))
        }

        private updateChipOnTable(index: number, bet: number, isMainPlayer: boolean) {
            if (index < 0 || index >= this._allTotalBet.length) return;
            this._allTotalBet[index] += bet;
            if (isMainPlayer) {
                this._allMainBet[index] += bet;
                this._betMainTotal += bet;
            }
            this.updateBetNum();
        }

        private updateBetNum(): void {
            for (let i: number = 0; i < this._allMainBet.length; i++) {
                this._allMainBetUI[i].text = this._allMainBet[i] + "";
                this._allTotalBetUI[i].text = this._allTotalBet[i] + "";
            }
        }

        private onBattleSettle(info: any): void {
            if (!this._game.sceneObjectMgr.mainUnit) return;
            if (this._game.sceneObjectMgr.mainUnit.GetIndex() == info.SeatIndex) {
                this._mainPlayerBenefit = parseFloat(info.SettleVal);
            }
            if (info.SettleVal == 0) return;
            if (info.SettleVal == 0) return;
            this.addMoneyClip(info.SeatIndex, info.SettleVal);
        }

        //更新地图状态
        private onUpdateStatus() {
            if (!this._bcbmMapInfo) return;
            let mapStatus = this._bcbmMapInfo.GetMapState();
            if (this._curStatus == mapStatus) return;
            this._curStatus = mapStatus;
            this._viewUI.btn_repeat.disabled = this._curStatus != MAP_STATUS.PLAY_STATUS_BET;
            if (this._game.uiRoot.HUD.isOpened(BenchibaomaPageDef.PAGE_BCBM_TONGSHA) && this._curStatus >= MAP_STATUS.PLAY_STATUS_WASH_CARD) {
                this._pageHandle.pushClose({ id: BenchibaomaPageDef.PAGE_BCBM_TONGSHA, parent: this._game.uiRoot.HUD });
            }
            this._viewUI.box_tip.visible = false;
            this._viewUI.txt_status.visible = false;
            switch (this._curStatus) {
                case MAP_STATUS.PLAY_STATUS_NONE:// 准备阶段
                    // this._viewUI.box_tip.visible = true;
                    this._viewUI.txt_status.text = "";
                    this.resetUI();
                    this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_SETTLE, parent: this._game.uiRoot.HUD });
                    break;
                case MAP_STATUS.PLAY_STATUS_WASH_CARD:// 游戏开始
                    this.resetUI();
                    this._pageHandle.pushOpen({ id: BenchibaomaPageDef.PAGE_BCBM_BEGIN, parent: this._game.uiRoot.HUD });
                    this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "dingding_start.mp3");
                    this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "xiazhu_start.mp3");
                    break;
                case MAP_STATUS.PLAY_STATUS_BET:// 下注阶段
                    this._pageHandle.pushClose({ id: BenchibaomaPageDef.PAGE_BCBM_BEGIN, parent: this._game.uiRoot.HUD });
                    this.onUpdateSeatedList();
                    this._viewUI.box_tip.visible = true;
                    this._viewUI.txt_status.text = "";
                    this._viewUI.clip_status.index = 0;
                    let bool = false;
                    for (let i = 0; i < this._rebetList.length; i++) {
                        if (this._rebetList[i] > 0) {
                            bool = true;
                            break;
                        }
                    }
                    this._viewUI.btn_repeat.disabled = !bool;

                    // for (let i = 0; i < this._areaKuangList.length; i++) {
                    //     this._areaKuangList[i].visible = true;
                    //     // this._areaKuangList[i].ani1.play(0, true);
                    //     Laya.timer.once(1000, this, () => {
                    //         // this._areaKuangList[i].ani1.stop();
                    //     });
                    // }
                    break;
                case MAP_STATUS.PLAY_STATUS_STOP_BET:// 停止下注阶段
                    this._pageHandle.pushOpen({ id: BenchibaomaPageDef.PAGE_BCBM_END, parent: this._game.uiRoot.HUD });
                    this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "dingding_end.mp3");
                    this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "xiazhu_end.mp3");
                    this._bcbmStory.isReconnect = false;
                    break;
                case MAP_STATUS.PLAY_STATUS_PUSH_CARD:// 发牌阶段
                    this._pageHandle.pushClose({ id: BenchibaomaPageDef.PAGE_BCBM_END, parent: this._game.uiRoot.HUD });
                    this._viewUI.box_tip.visible = true;
                    this._viewUI.txt_status.text = "";
                    this._viewUI.clip_status.index = 1;
                    let betAllTotal = 0;
                    for (let i = 0; i < this._allMainBet.length; i++) {
                        betAllTotal += this._allMainBet[i];
                    }
                    if (betAllTotal > 0) {
                        for (let i = 0; i < this._allMainBet.length; i++) {
                            this._rebetList[i] = this._allMainBet[i];
                        }
                    }
                    break;
                case MAP_STATUS.PLAY_STATUS_SHOW_CARD:// 停止下注（开牌）阶段
                    this._viewUI.box_tip.visible = true;
                    this._viewUI.txt_status.text = "";
                    this._viewUI.clip_status.index = 1;
                    break;
                case MAP_STATUS.PLAY_STATUS_SETTLE:// 结算阶段
                    this.onUpdateSeatedList();
                    this._viewUI.box_tip.visible = true;
                    this._viewUI.txt_status.text = "";
                    this._viewUI.clip_status.index = 2;
                    this.flyChipEffect();
                    this.updateMoney();
                    Laya.timer.once(1000, this, () => {

                        if (this._mainPlayerBenefit > 0) {
                            let rand = MathU.randomRange(1, 3);
                            this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "win{0}.mp3", rand), true);
                        } else if (this._mainPlayerBenefit < 0) {
                            let rand = MathU.randomRange(1, 4);
                            this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "lose{0}.mp3", rand), true);
                        }
                    });
                    break;
                case MAP_STATUS.PLAY_STATUS_SHOW_INFO:// 显示结算框阶段
                    //打开结算界面
                    this._viewUI.clip_status.index = 2;
                    this._pageHandle.pushOpen({
                        id: TongyongPageDef.PAGE_TONGYONG_SETTLE,
                        dataSource: { myBet: this._betMainTotal, myBenefit: this._mainPlayerBenefit, lottery: this._lottery },
                        parent: this._game.uiRoot.HUD
                    });
                    break;
                case MAP_STATUS.PLAY_STATUS_RELAX:// 休息阶段
                    Laya.Tween.clearAll(this);
                    Laya.timer.clearAll(this);
                    this.resetUI();
                    this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_SETTLE, parent: this._game.uiRoot.HUD });
                    this._bcbmStory.isReconnect = false;
                    this._viewUI.txt_status.text = "";
                    break;
            }

            this._pageHandle.updatePageHandle();//更新额外界面的开关状态
            this._pageHandle.reset();//清空额外界面存储数组
        }

        private onUpdateRecord(): void {
            if (!this._bcbmMapInfo) return;
            let recordArr = [];
            let gameRecord = this._bcbmMapInfo.GetGameRecord();
            if (gameRecord != "") {
                recordArr = JSON.parse(gameRecord);
                //倒序
                // for (let i = 0; i < recordArr.length / 2; i++) {
                //     let val = recordArr[i];
                //     recordArr[i] = recordArr[recordArr.length - 1 - i];
                //     recordArr[recordArr.length - 1 - i] = val;
                // }
            }

            this._viewUI.list_record.dataSource = recordArr;
        }

        private renderHandler(cell: MapRecordRender, index: number) {
            if (cell) {
                cell.setData(this._game, cell.dataSource);
            }
        }

        //重置UI
        private resetUI(): void {
            this._battleIndex = -1;
            this._mainPlayerBenefit = 0;
            this._betMainTotal = 0;
            this._lottery = "";
            this.clearClips();
            this.clearChip();
            for (let i: number = 0; i < this._allMainBet.length; i++) {
                this._allMainBet[i] = 0;
                this._allTotalBet[i] = 0;
                this._allMainBetUI[i].text = "0";
                this._allTotalBetUI[i].text = "0";
            }
            if (this._effPage) {
                this._effPage.clear();
            }
        }

        private showIsGuest(): boolean {
            if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) return false;
            if (this._game.sceneObjectMgr.mainPlayer.IsIsGuest()) {
                TongyongPageDef.ins.alertRecharge("亲爱的玩家，您正使用游客模式进行游戏，该模式下的游戏数据（包括付费数据）在删除游戏、更换设备后清空！对此造成的损失，本平台将不承担任何责任。为保障您的虚拟财产安全，我们强力建议您绑定手机号升级为正式账号。",
                    () => { }, () => { }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                return true;
            }
            return false;
        }

        //金币变化 飘字clip
        public addMoneyClip(index: number, value: number): void {
            let valueClip = value >= 0 ? new BenchibaomaClip(BenchibaomaClip.ADD_MONEY_FONT) : new BenchibaomaClip(BenchibaomaClip.SUB_MONEY_FONT);
            let preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
            valueClip.scale(0.8, 0.8);
            valueClip.anchorX = 0.5;
            valueClip.setText(Math.abs(value) + "", true, false, preSkin);
            let playerIcon: any;
            if (index == this._game.sceneObjectMgr.mainUnit.GetIndex()) {
                playerIcon = this._viewUI.main_player;
            } else {
                let unit = this._game.sceneObjectMgr.getUnitByIdx(index);
                if (!unit) return;
                let seatIndex = unit.GetSeat();
                let bool = false;
                for (let i = 0; i < this._unitSeated.length; i++) {
                    let unitIndex = this._unitSeated[i][0];
                    if (index == unitIndex) {
                        bool = true;
                    }
                }
                // logd("座位" + seatIndex);
                if (!seatIndex) return;
                if (!bool) return;
                playerIcon = this._seatList[seatIndex - 1];
            }
            valueClip.x = playerIcon.clip_money.x;
            valueClip.y = playerIcon.clip_money.y;
            playerIcon.clip_money.parent.addChild(valueClip);
            this._clipList.push(valueClip);
            playerIcon.clip_money.visible = false;
            Laya.Tween.clearAll(valueClip);
            Laya.Tween.to(valueClip, { y: valueClip.y - 25 }, 1500);
        }

        //清理飘字clip
        private clearClips(): void {
            if (this._clipList && this._clipList.length) {
                for (let i: number = 0; i < this._clipList.length; i++) {
                    let clip = this._clipList[i];
                    clip.removeSelf();
                    clip.destroy(true);
                    clip = null;
                }
            }
            this._clipList = [];
        }

        //创建筹码
        private createChip(startIdx: number, targetIdx: number, type: number, value: number, index: number, unitIndex: number) {
            if (targetIdx < 1 || targetIdx > this._allChips.length) return;

            let chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, BenChiBaoMaChip) as BenChiBaoMaChip;
            chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
            this._allChips[targetIdx - 1].push(chip);
            if (this._curStatus != MAP_STATUS.PLAY_STATUS_BET) {
                chip.drawChip();
            }
            else {
                Laya.timer.once(350, this, () => {
                    chip.sendChip();
                    this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "chouma.mp3", false);
                })
            }
            this._chipSortScore = index;//存下来最后一个筹码层级
        }

        //结算飘筹码
        private flyChipEffect(): void {
            //遍历四个区域的游戏结果
            for (let i = 0; i < this._allChips.length; i++) {
                let chipArr = this._allChips[i];
                if (i + 1 != this._lotteryIndex) {
                    this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "piaoqian.mp3", false);
                    for (let j = 0; j < chipArr.length; j++) {
                        let chip: BenChiBaoMaChip = chipArr[j];
                        chip.flyChip(2, false, j, this._game);//庄家先收筹码
                    }
                } else {
                    Laya.timer.once(1100, this, () => {
                        this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "piaoqian.mp3", false);
                        for (let j = 0; j < 20; j++) {
                            let ranType = MathU.randomRange(1, 5);
                            let ranVal = this._chipArr[ranType - 1];
                            this._chipSortScore++;
                            this.bankerFlyChip(2, i + 1, ranType, ranVal, this._chipSortScore, -1);
                        }
                    })
                    Laya.timer.once(3000, this, this.bankerFlyToPlayerChip, [i]);
                }

            }
        }

        private bankerFlyToPlayerChip(index: number) {
            let chipArr = this._allChips[index];
            if (!chipArr) return;
            this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "piaoqian.mp3", false);
            for (let j = 0; j < chipArr.length; j++) {
                let chip: BenChiBaoMaChip = chipArr[j];
                if (!chip) continue;
                let mainIndex = this._game.sceneObjectMgr.mainUnit.GetIndex();
                if (chip._seatIndex == mainIndex) {
                    chip.flyChip(0, false, j, this._game);//主玩家收筹码
                } else {
                    let isSeat: boolean = false;
                    for (let k = 0; k < this._unitSeated.length; k++) {
                        let seatInfo = this._unitSeated[k];
                        if (seatInfo && seatInfo[0] == chip._seatIndex) {
                            chip.flyChip(3 + k, false, j, this._game);//入座玩家收筹码
                            isSeat = true;
                            break;
                        }
                    }
                    if (!isSeat) {
                        chip.flyChip(1, false, j, this._game);//其他玩家收筹码
                    }
                }
            }

        }



        //庄家飞筹码去输的区域
        private bankerFlyChip(startIdx: number, targetIdx: number, type: number, value: number, index: number, unitIndex: number) {
            if (targetIdx < 1 || targetIdx > this._allChips.length) return;
            let chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, BenChiBaoMaChip) as BenChiBaoMaChip;
            chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
            this._allChips[targetIdx - 1].push(chip);
            Laya.timer.once(350, this, () => {
                chip.sendChip();
            })
        }

        //清除筹码
        private clearChip(): void {
            if (this._allChips) {
                this._game.sceneObjectMgr.clearOfflineObject();
                for (let i: number = 0; i < this._allChips.length; i++) {
                    this._allChips[i] = [];
                }
            }
        }

        public close(): void {
            if (this._viewUI) {
                this._viewUI.btn_spread.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rule.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhanji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chong.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_repeat.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_playerList.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);

                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);

                this._game.sceneObjectMgr.off(BenchibaomaMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                this._game.sceneObjectMgr.off(BenchibaomaMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.off(BenchibaomaMapInfo.EVENT_STATUS_CONTINUE, this, this.onUpdateUnit);//继续游戏状态改变后
                this._game.sceneObjectMgr.off(BenchibaomaMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown);//倒计时时间戳更新
                this._game.sceneObjectMgr.off(BenchibaomaMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList);//入座列表更新
                this._game.sceneObjectMgr.off(BenchibaomaMapInfo.EVENT_STATUS_CHECK, this, this.initRoomConfig);//地图传送参数
                this._game.sceneObjectMgr.off(BenchibaomaMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord);//游戏记录更新
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);

                this.resetUI();
                if (this._seatList) {
                    for (let i: number = 0; i < this._seatList.length; i++) {
                        this._seatList[i] && this._seatList[i].off(LEvent.CLICK, this, this.onSelectSeat);
                        this._seatList[i] = null;
                    }
                    this._seatList.length = 0;
                }
                if (this._unitSeated) {
                    for (let i: number = 0; i < this._unitSeated.length; i++) {
                        this._unitSeated[i] = null;
                    }
                    this._unitSeated.length = 0;
                }

                if (this._chipList) {
                    for (let i: number = 0; i < this._chipList.length; i++) {
                        this._chipList[i] && this._chipList[i].off(LEvent.CLICK, this, this.onSelectChip);
                    }
                    this._chipList.length = 0;
                }
                this._chipGuangList = [];
                this._allChips = [];
                if (this._areaKuangList) {
                    for (let i: number = 0; i < this._areaList.length; i++) {
                        this._areaList[i] && this._areaList[i].off(LEvent.CLICK, this, this.onAreaBetClick);
                    }
                    this._areaKuangList = [];
                }
                this._areaList = [];
                this._allMainBetUI = [];
                this._allTotalBetUI = [];
                if (this._effPage) {
                    this._effPage.clear();
                    this._effPage.destroy();
                    this._effPage = null;
                }

                if (this._htmlText) {
                    this._htmlText = null;
                }
                if (this._bcbmStory) {
                    this._bcbmStory.clear();
                    this._bcbmStory = null;
                }
                this._game.uiRoot.HUD.close(BenchibaomaPageDef.PAGE_BCBM_BEGIN);
                this._game.uiRoot.HUD.close(BenchibaomaPageDef.PAGE_BCBM_END);
                this._game.stopAllSound();
                this._game.stopMusic();
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);
            }

            super.close();
        }
    }

    const CAR_SKIN_RENDER: string[] = [
        "",
        Path_game_benchibaoma.ui_benchibaoma + "tu_lb2.png",
        Path_game_benchibaoma.ui_benchibaoma + "tu_bsj2.png",
        Path_game_benchibaoma.ui_benchibaoma + "tu_bc2.png",
        Path_game_benchibaoma.ui_benchibaoma + "tu_bm2.png",

        Path_game_benchibaoma.ui_benchibaoma + "tu_lb3.png",
        Path_game_benchibaoma.ui_benchibaoma + "tu_bsj3.png",
        Path_game_benchibaoma.ui_benchibaoma + "tu_bc3.png",
        Path_game_benchibaoma.ui_benchibaoma + "tu_bm3.png"
    ];
    class MapRecordRender extends ui.nqp.game_ui.benchibaoma.component.RecordItemUI {
        private _game: Game;
        private _data: any;
        constructor() {
            super();
        }
        setData(game: Game, data: any) {
            this._game = game;
            this._data = data;
            if (!this._data) {
                this.visible = false;
                return;
            }
            this.visible = true;
            this.img_icon.skin = CAR_SKIN_RENDER[this._data];
        }
        destroy() {
            super.destroy();
        }
    }
}