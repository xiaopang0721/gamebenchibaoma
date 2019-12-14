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
        private _viewUI: ui.ajqp.game_ui.benchibaoma.BenChiBaoMaUI;
        private _bcbmStory: BenchibaomaStory;
        private _bcbmMapInfo: BenchibaomaMapInfo;

        private _seatlimit: number;//入座金币
        private _seatUIList: Array<any> = [];//座位UI集合
        private _unitSeated: Array<any> = [];//入座精灵信息集合

        private _curChip: number;//当前选择筹码
        private _curChipY: number;//当前选择筹码y轴位置
        private _chipUIList: Array<ui.ajqp.game_ui.tongyong.effect.Effect_cmUI> = [];//筹码UI集合
        private _chipArr: Array<number> = [];//筹码大小类型
        private _chipSortScore: number = 0;//筹码层级
        private _lottery: string = "";//中奖区域
        private _betMainTotal: number = 0;//玩家总下注
        private _allChips: Array<Array<any>> = [];//所有筹码
        private _areaList: Array<any> = [];//下注区域UI集合
        private _areaKuangUIList: Array<any> = [];//下注区域边框集合
        private _allTotalBetUI: Label[] = [];//下注文本
        private _allMainBetUI: Label[] = [];//自己下注文本
        private _allTotalBet: Array<number> = [];//所有玩家总下注
        private _allMainBet: Array<number> = [];//所有主玩家下注
        private _rebetList: Array<number> = [];//重复下注列表
        private _lotteryKuangIndex: number = 0;
        private _lotteryStartTime: number = 0;


        private _mainPlayerBenefit: number = 0;//玩家收益
        private _clipList: Array<BenchibaomaClip> = [];//飘字集合
        private _imgdiList: Array<LImage> = [];//飘字集合

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
                DatingPath.atlas_dating_ui + "qifu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                Path_game_benchibaoma.atlas_game_ui + "benchibaoma.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + 'dating.atlas',
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "chongzhi.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "nyl.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "js.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general + "anniu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "suiji.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "ksyx.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "ksxz.atlas",
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
            this._viewUI.main_player.effWin.visible = false;
            this._effPage = new BcbmEffectPage(this._game, this._viewUI.box_car, this._viewUI);

            this._seatUIList = [];
            for (let i: number = 0; i < SEAT_NUM; i++) {
                this._seatUIList.push(this._viewUI["seat" + i]);
                this._seatUIList[i].clip_money.visible = false;
                this._seatUIList[i].effWin.visible = false;
                this._seatUIList[i].img_qifu.visible = false;
                this._seatUIList[i].img_vip.visible = false;
            }

            this._chipUIList = [];
            for (let i: number = 0; i < CHIP_TYPE_NUM; i++) {
                this._chipUIList.push(this._viewUI["btn_chip" + i]);
                if (i == 0) {
                    this._curChipY = this._chipUIList[i].y + 10;
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
            this._areaKuangUIList = [];
            this._allMainBetUI = [];
            this._allTotalBetUI = [];
            for (let i: number = 0; i < BET_AREA_NUM; i++) {
                this._areaList.push(this._viewUI["area" + i]);
                this._areaKuangUIList.push(this._viewUI["kuang" + i]);
                this._areaKuangUIList[i].visible = false;
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
            this._viewUI.box_left.left = this._game.isFullScreen ? 23 : 3;
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

            this._game.qifuMgr.on(QiFuMgr.QIFU_FLY, this, this.qifuFly);

            this._viewUI.btn_spread.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_zhanji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_repeat.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_playerList.on(LEvent.CLICK, this, this.onBtnClickWithTween);


            for (let i: number = 0; i < this._seatUIList.length; i++) {
                this._seatUIList[i] && this._seatUIList[i].on(LEvent.CLICK, this, this.onSelectSeat, [i]);
            }

            for (let i: number = 0; i < this._chipUIList.length; i++) {
                this._chipUIList[i] && this._chipUIList[i].on(LEvent.CLICK, this, this.onSelectChip, [i]);
            }

            for (let i: number = 0; i < this._areaList.length; i++) {
                this._areaList[i].on(LEvent.MOUSE_OUT, this, this.onAreaBetMouseOut, [i]);
                this._areaList[i].on(LEvent.MOUSE_DOWN, this, this.onAreaBetMouseDown, [i]);
                this._areaList[i].on(LEvent.MOUSE_UP, this, this.onAreaBetMouseUp, [i]);
            }
        }

        protected onMouseClick(e: LEvent) {
            if (e.target != this._viewUI.btn_spread) {
                this.menuTween(false);
            }
        }

        //菜单栏
        private menuTween(isOpen: boolean) {
            if (isOpen) {
                this._viewUI.box_menu.visible = true;
                this._viewUI.box_menu.scale(0.2, 0.2);
                this._viewUI.box_menu.alpha = 0;
                Laya.Tween.to(this._viewUI.box_menu, { scaleX: 1, scaleY: 1, alpha: 1 }, 300, Laya.Ease.backInOut);
            } else {
                Laya.Tween.to(this._viewUI.box_menu, { scaleX: 0.2, scaleY: 0.2, alpha: 0 }, 300, Laya.Ease.backInOut, Handler.create(this, () => {
                    this._viewUI.box_menu.visible = false;
                }));
            }
        }

        //按钮缓动回调
        protected onBtnTweenEnd(e: any, target: any): void {
            switch (target) {
                case this._viewUI.btn_spread:
                    this.menuTween(!this._viewUI.box_menu.visible);
                    break;
                case this._viewUI.btn_rule:
                    this._game.uiRoot.general.open(BenchibaomaPageDef.PAGE_BCBM_RULE);
                    break;
                case this._viewUI.btn_set:
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING)
                    break;
                case this._viewUI.btn_qifu:
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_QIFU)
                    break;
                case this._viewUI.btn_playerList:
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_PLAYER_LIST)
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

                    this._game.sceneObjectMgr.leaveStory(true);
                    break;
                case this._viewUI.btn_repeat:
                    this.repeatBet();
                    break;
                case this._viewUI.btn_chongzhi:
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    break;
                default:
                    break;
            }
        }

        //选择座位入座
        private onSelectSeat(index: number): void {
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            if (mainUnit.GetMoney() < this._seatlimit) {
                this._game.uiRoot.topUnder.showTips("金币不足");
                return;
            }
            this._game.network.call_benchibaoma_seated(index + 1);
        }

        //重复下注
        private repeatBet(): void {
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
            this.moveHead(this._viewUI.main_player, this._mainHeadPos[0][0], this._mainHeadPos[0][1], this._mainHeadPos[1][0], this._mainHeadPos[1][1]);
            this._betWait = true;
            Laya.timer.once(100, this, () => {
                this._betWait = false;
            })
        }

        private kuangShanShuo(img) {
            img.alpha = 0;
            Laya.Tween.to(img, { alpha: 1 }, 333, null, Handler.create(this, () => {
                this.kuangShanShuo(img);
            }))
        }

        private _betWait: boolean = false;
        private onAreaBetMouseOut(index: number, e: LEvent): void {
            if (this._curStatus == MAP_STATUS.PLAY_STATUS_BET) {
                this._areaKuangUIList[index].visible = false;
            }
        }

        private onAreaBetMouseDown(index: number, e: LEvent): void {
            if (this._curStatus == MAP_STATUS.PLAY_STATUS_BET) {
                this._areaKuangUIList[index].visible = true;
            }
        }

        //区域下注
        private onAreaBetMouseUp(index: number, e: LEvent): void {
            if (this._curStatus != MAP_STATUS.PLAY_STATUS_BET) {
                this._game.uiRoot.topUnder.showTips("当前不在下注时间，请在下注时间再进行下注！");
                return;
            }
            this._areaKuangUIList[index].visible = false;
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
                }, true, TongyongPageDef.TIPS_SKIN_STR['cz']);
                return;
            }
            if (this._curChip > money) {
                this._game.uiRoot.topUnder.showTips("老板，您的金币不足哦~");
                return;
            }
            this.moveHead(this._viewUI.main_player, this._mainHeadPos[0][0], this._mainHeadPos[0][1], this._mainHeadPos[1][0], this._mainHeadPos[1][1]);
            this._betWait = true;
            Laya.timer.once(100, this, () => {
                this._betWait = false;
            })
            this._game.network.call_benchibaoma_bet(this._curChip, index + 1)
        }

        //筹码点击事件
        private onClickChip(index: number, e: LEvent): void {
            if (this._chipArr[index] == this._curChip) return;
            this._game.uiRoot.btnTween(e.currentTarget);
            this.onSelectChip(index);
        }

        //选择筹码
        private onSelectChip(index: number): void {
            this._curChip = this._chipArr[index];
            for (let i: number = 0; i < this._chipUIList.length; i++) {
                this._chipUIList[i].y = i == index ? this._curChipY - 10 : this._curChipY;
                this._chipUIList[i].img0.visible = this._chipUIList[i].img1.visible = i == index;
                if (i == index) {
                    this._chipUIList[i].ani1.play(0, true);
                } else {
                    this._chipUIList[i].ani1.gotoAndStop(0);
                }
            }
        }

        //筹码是否置灰（是否下注阶段）
        private onChipDisabled(isBetState: boolean): void {
            this.onUpdateChipGrey(isBetState);
            this._viewUI.btn_repeat.disabled = !isBetState;
            if (isBetState) {
                let index = this._chipArr.indexOf(this._curChip);
                for (let i: number = 0; i < this._chipUIList.length; i++) {
                    Laya.Tween.to(this._chipUIList[i], { y: i == index ? this._curChipY - 10 : this._curChipY }, 300);
                    this._chipUIList[i].img0.visible = this._chipUIList[i].img1.visible = i == index;
                    if (i == index) {
                        this._chipUIList[i].ani1.play(0, true);
                    } else {
                        this._chipUIList[i].ani1.gotoAndStop(0);
                    }
                }
            } else {
                for (let i: number = 0; i < this._chipUIList.length; i++) {
                    Laya.Tween.to(this._chipUIList[i], { y: this._curChipY + 10 }, 300);
                    this._chipUIList[i].disabled = true;
                    this._chipUIList[i].ani1.gotoAndStop(0);
                    this._chipUIList[i].img0.visible = this._chipUIList[i].img1.visible = false;
                }
            }
        }

        private onUpdateChipGrey(isBetState: boolean) {
            if (!this._game.sceneObjectMgr.mainUnit) return;
            if (!isBetState) return;
            let money: number = this._game.sceneObjectMgr.mainUnit.GetMoney();
            for (let i = 0; i < this._chipUIList.length; i++) {
                let index = this._chipUIList.length - 1 - i;
                if (money < this._chipArr[index]) {
                    this._chipUIList[index].disabled = true;
                    this._chipUIList[index].y = this._curChipY;
                } else {
                    this._chipUIList[index].disabled = false;
                }
            }
        }

        private _curDiffTime: number;
        //帧心跳
        update(diff: number) {
            if (!this._viewUI) return;
            super.update(diff);
            if (this._effPage) {
                this._effPage.Update(diff);
            }
            if (!this._curDiffTime || this._curDiffTime < 0) {
                this._viewUI.btn_chongzhi.ani1.play(0, false);
                this._curDiffTime = TongyongPageDef.CZ_PLAY_DIFF_TIME;
            } else {
                this._curDiffTime -= diff;
            }

            if (this._lotteryKuangIndex > 0) {
                let time: number = this._game.sync.serverTimeBys * 1000 - this._lotteryStartTime;
                if (time >= 0) {
                    time %= 600;
                    if (time > 300) time = 600 - time;
                    let per: number = time / 300;
                    this._areaKuangUIList[this._lotteryKuangIndex - 1].alpha = per;
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
                this._viewUI.main_player.txt_name.text = getMainPlayerName(mainUnit.GetName());
                if (this._curStatus != MAP_STATUS.PLAY_STATUS_SETTLE) {
                    this._viewUI.main_player.txt_money.text = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2).toString();
                }
                let mainIdx = mainUnit.GetIndex();
                this._viewUI.main_player.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(mainUnit.GetHeadKuangImg());
                this._viewUI.main_player.img_vip.visible = mainUnit.GetVipLevel() > 0;
                this._viewUI.main_player.img_vip.skin = TongyongUtil.getVipUrl(mainUnit.GetVipLevel());
                //祈福成功 头像上就有动画
                if (qifu_index && mainIdx == qifu_index) {
                    this._viewUI.main_player.qifu_type.visible = true;
                    this._viewUI.main_player.qifu_type.skin = this._qifuTypeImgUrl;
                    this.playTween(this._viewUI.main_player.qifu_type, qifu_index);
                }
                //时间戳变化 才加上祈福标志
                if (TongyongUtil.getIsHaveQiFu(mainUnit, this._game.sync.serverTimeBys)) {
                    if (qifu_index && mainIdx == qifu_index) {
                        Laya.timer.once(2500, this, () => {
                            this._viewUI.main_player.img_qifu.visible = true;
                            this._viewUI.main_player.img_icon.skin = TongyongUtil.getHeadUrl(mainUnit.GetHeadImg(), 2);
                        })
                    }
                } else {
                    this._viewUI.main_player.img_qifu.visible = false;
                    this._viewUI.main_player.img_icon.skin = TongyongUtil.getHeadUrl(mainUnit.GetHeadImg(), 2);
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
            this.onUpdateSeatedList(qifu_index);
        }

        //更新座位信息
        private onUpdateSeatedList(qifu_index?: number): void {
            if (!this._bcbmMapInfo) return;
            let seatedList = this._bcbmMapInfo.GetSeatedList();
            if (seatedList != "") {
                this._unitSeated = JSON.parse(seatedList);
            }
            if (!this._unitSeated.length) {
                return;
            }
            for (let i = 0; i < this._seatUIList.length; i++) {
                let seat = this._seatUIList[i];
                let unitIndex = this._unitSeated[i][0];
                let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIndex);
                if (unit) {
                    seat.img_txk.visible = true;
                    seat.txt_name.text = getMainPlayerName(unit.GetName());
                    seat.txt_name.fontSize = 15;
                    if (this._curStatus != MAP_STATUS.PLAY_STATUS_SETTLE) {
                        seat.txt_money.text = EnumToString.getPointBackNum(unit.GetMoney(), 2).toString();
                    }
                    seat.img_icon.skin = TongyongUtil.getHeadUrl(unit.GetHeadImg(), 2);
                    seat.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(unit.GetHeadKuangImg());
                    seat.img_vip.visible = unit.GetVipLevel() > 0;
                    seat.img_vip.skin = TongyongUtil.getVipUrl(unit.GetVipLevel());
                    //祈福成功 头像上就有动画
                    if (qifu_index && unitIndex == qifu_index) {
                        seat.qifu_type.visible = true;
                        seat.qifu_type.skin = this._qifuTypeImgUrl;
                        this.playTween1(seat.qifu_type, qifu_index);
                    }
                    //时间戳变化 才加上祈福标志
                    if (TongyongUtil.getIsHaveQiFu(unit, this._game.sync.serverTimeBys)) {
                        if (qifu_index && unitIndex == qifu_index) {
                            Laya.timer.once(2500, this, () => {
                                seat.img_qifu.visible = true;
                                seat.img_icon.skin = TongyongUtil.getHeadUrl(unit.GetHeadImg(), 2);
                            })
                        }
                    } else {
                        seat.img_qifu.visible = false;
                    }
                } else {
                    seat.txt_name.text = "";
                    seat.txt_name.fontSize = 20;
                    seat.txt_money.text = "点击入座";
                    seat.img_icon.skin = PathGameTongyong.ui_tongyong_general + "tu_weizi.png";
                    seat.img_qifu.visible = false;
                    seat.qifu_type.visible = false;
                    seat.img_txk.visible = false;
                    seat.img_vip.visible = false;
                }
            }
        }

        private onUpdateSettleMoney(): void {
            if (!this._bcbmMapInfo) return;
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (mainUnit) {
                let money = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2);
                this._viewUI.main_player.txt_money.text = money.toString();
            }
            let seatedList = this._bcbmMapInfo.GetSeatedList();
            if (seatedList != "") {
                this._unitSeated = JSON.parse(seatedList);
            }
            if (!this._unitSeated.length) {
                return;
            }
            for (let i = 0; i < this._seatUIList.length; i++) {
                let unitIndex = this._unitSeated[i][0];
                let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIndex);
                let seat = this._seatUIList[i];
                if (unit) {
                    seat.txt_money.text = EnumToString.getPointBackNum(unit.GetMoney(), 2).toString();
                }
            }
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

        private _qifuTypeImgUrl: string;
        private qifuFly(dataSource: any): void {
            if (!dataSource) return;
            let dataInfo = dataSource;
            if (!this._game.sceneObjectMgr || !this._game.sceneObjectMgr.mainUnit || this._game.sceneObjectMgr.mainUnit.GetIndex() != dataSource.qifu_index) return;
            this._game.qifuMgr.showFlayAni(this._viewUI.main_player, this._viewUI, dataSource, (dataInfo) => {
                //相对应的玩家精灵做出反应
                this._qifuTypeImgUrl = TongyongUtil.getQFTypeImg(dataInfo.qf_id);
                this.onUpdateUnit(dataInfo.qifu_index);
            });
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
                    this._chipUIList[i].btn_num.label = EnumToString.sampleChipNum(this._chipArr[i]);
                    this._chipUIList[i].btn_num.skin = StringU.substitute(PathGameTongyong.ui_tongyong_general + "tu_cm{0}.png", i);
                }
                if (!this._curChip) this.onSelectChip(0);
            }
        }

        private onUpdateCountDown(): void {
            if (!this._bcbmMapInfo) return;
            this._countDown = this._bcbmMapInfo.GetCountDown();
        }

        private isPlayingEff(): boolean {
            return this._effPage && this._effPage.isPlaying;
        }

        private onUpdateUnitOffline() {
            let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
            if (!mainPlayer) return;
            let mainPlayerInfo = mainPlayer.playerInfo;
            this._viewUI.main_player.txt_name.text = getMainPlayerName(mainPlayerInfo.nickname);
            this._viewUI.main_player.txt_money.text = EnumToString.getPointBackNum(mainPlayerInfo.money, 2).toString();
            this._viewUI.main_player.img_qifu.visible = TongyongUtil.getIsHaveQiFu(mainPlayer, this._game.sync.serverTimeBys);
            this._viewUI.main_player.img_icon.skin = TongyongUtil.getHeadUrl(mainPlayer.GetHeadImg(), 2);
            this._viewUI.main_player.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(mainPlayer.GetHeadKuangImg());
            this._viewUI.main_player.img_vip.visible = mainPlayer.playerInfo.vip_level > 0;
            this._viewUI.main_player.img_vip.skin = TongyongUtil.getVipUrl(mainPlayer.playerInfo.vip_level);
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
                    if (this._areaKuangUIList[this._lotteryKuangIndex - 1]) this._areaKuangUIList[this._lotteryKuangIndex - 1].visible = true;
                    Laya.timer.once(3000, this, () => {
                        if (this._areaKuangUIList[this._lotteryKuangIndex - 1]) this._areaKuangUIList[this._lotteryKuangIndex - 1].visible = false;
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
            } else {//其他玩家
                startIdx = 1;
                for (let i = 0; i < this._unitSeated.length; i++) {
                    let unitIndex = this._unitSeated[i][0];
                    let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIndex);
                    if (unit && info.SeatIndex == unitIndex) {
                        this.moveHead(this._seatUIList[i], this._headStartPos[i][0], this._headStartPos[i][1], this._headEndPos[i][0], this._headEndPos[i][1]);
                        startIdx = 3 + i;
                    }
                }
            }
            targetIdx = info.BetIndex;
            let type = this._chipArr.indexOf(info.BetVal);
            this.createChip(startIdx, targetIdx, type, info.BetVal, index, info.SeatIndex);
            this.updateChipOnTable(targetIdx - 1, info.BetVal, isMainPlayer);
        }

        //头像出筹码动态效果
        private moveHead(view, startX, startY, endX, endY): void {
            Laya.Tween.clearAll(view);
            Laya.Tween.to(view, { x: endX, y: endY }, 50, null, Handler.create(this, () => {
                Laya.Tween.to(view, { x: startX, y: startY }, 50);
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

        private _clipResult: any[] = [];
        private onBattleSettle(info: any): void {
            if (!this._game.sceneObjectMgr.mainUnit) return;
            if (this._game.sceneObjectMgr.mainUnit.GetIndex() == info.SeatIndex) {
                this._mainPlayerBenefit = parseFloat(info.SettleVal);
            }
            if (info.SettleVal == 0) return;
            this._clipResult.push([info.SeatIndex, info.SettleVal]);
        }

        //更新地图状态
        private onUpdateStatus() {
            if (!this._bcbmMapInfo) return;
            let mapStatus = this._bcbmMapInfo.GetMapState();
            if (this._curStatus == mapStatus) return;
            this._curStatus = mapStatus;
            if (this._game.uiRoot.HUD.isOpened(BenchibaomaPageDef.PAGE_BCBM_TONGSHA) && this._curStatus >= MAP_STATUS.PLAY_STATUS_WASH_CARD) {
                this._pageHandle.pushClose({ id: BenchibaomaPageDef.PAGE_BCBM_TONGSHA, parent: this._game.uiRoot.HUD });
            }
            this.onChipDisabled(this._curStatus == MAP_STATUS.PLAY_STATUS_BET);
            this._viewUI.box_tip.visible = false;
            this._viewUI.txt_status.visible = false;
            switch (this._curStatus) {
                case MAP_STATUS.PLAY_STATUS_NONE:// 准备阶段
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

                    for (let i = 0; i < this._areaKuangUIList.length; i++) {
                        this._areaKuangUIList[i].visible = true;
                        this.kuangShanShuo(this._areaKuangUIList[i]);
                        Laya.timer.once(1000, this, () => {
                            this._areaKuangUIList[i].visible = false;
                            this._areaKuangUIList[i].alpha = 1;
                            Laya.Tween.clearAll(this._areaKuangUIList[i]);
                            Laya.timer.clearAll(this._areaKuangUIList[i]);
                        });
                    }
                    break;
                case MAP_STATUS.PLAY_STATUS_STOP_BET:// 停止下注阶段
                    for (let i: number = 0; i < this._areaKuangUIList.length; i++) {
                        this._areaKuangUIList[i].visible = false;
                    }
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
                    Laya.timer.once(2500, this, () => {
                        this.onUpdateSettleMoney();
                        if (this._clipResult && this._clipResult.length > 0) {
                            for (let i = 0; i < this._clipResult.length; i++) {
                                let info = this._clipResult[i];
                                this.addMoneyClip(info[0], info[1]);
                            }
                        }
                    })
                    break;
                case MAP_STATUS.PLAY_STATUS_SHOW_INFO:// 显示结算框阶段
                    break;
                case MAP_STATUS.PLAY_STATUS_RELAX:// 休息阶段
                    Laya.Tween.clearAll(this);
                    Laya.timer.clearAll(this);
                    this.resetUI();
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
            this._clipResult = [];
            this._lottery = "";
            this.clearClips();
            this.clearChip();
            for (let i: number = 0; i < this._allMainBet.length; i++) {
                this._allMainBet[i] = 0;
                this._allTotalBet[i] = 0;
                this._allMainBetUI[i].text = "0";
                this._allTotalBetUI[i].text = "0";
            }
            for (let i: number = 0; i < this._areaKuangUIList.length; i++) {
                this._areaKuangUIList[i].visible = false;
            }
            if (this._effPage) {
                this._effPage.clear();
            }
        }

        //金币变化 飘字clip
        public addMoneyClip(index: number, value: number): void {
            let clip_money = value >= 0 ? new BenchibaomaClip(BenchibaomaClip.ADD_MONEY_FONT) : new BenchibaomaClip(BenchibaomaClip.SUB_MONEY_FONT);
            let preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
            let img_di = value >= 0 ? new LImage(PathGameTongyong.ui_tongyong_general + "tu_yingqian.png") : new LImage(PathGameTongyong.ui_tongyong_general + "tu_shuqian.png");
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
                if (!seatIndex) return;
                if (!bool) return;
                playerIcon = this._seatUIList[seatIndex - 1];
            }
            //飘字底
            img_di.centerX = playerIcon.img_di.centerX;
            img_di.centerY = playerIcon.img_di.centerY;
            playerIcon.img_di.parent.addChild(img_di);
            this._imgdiList.push(img_di);
            playerIcon.img_di.visible = false;
            //飘字
            clip_money.setText(Math.abs(value), true, false, preSkin);
            clip_money.centerX = playerIcon.clip_money.centerX;
            clip_money.centerY = playerIcon.clip_money.centerY;
            playerIcon.clip_money.parent.addChild(clip_money);
            this._clipList.push(clip_money);
            playerIcon.clip_money.visible = false;
            //飘字box缓动
            playerIcon.box_clip.y = 57;
            playerIcon.box_clip.visible = true;
            Laya.Tween.clearAll(playerIcon.box_clip);
            Laya.Tween.to(playerIcon.box_clip, { y: playerIcon.box_clip.y - 50 }, 1000);
            //赢钱动画
            playerIcon.effWin.visible = value > 0;
            value > 0 && playerIcon.effWin.ani1.play(0, false);
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

            if (this._imgdiList && this._imgdiList.length) {
                for (let j: number = 0; j < this._imgdiList.length; j++) {
                    let imgdi = this._imgdiList[j];
                    imgdi.removeSelf();
                    imgdi.destroy(true);
                    imgdi = null;
                }
            }
            this._imgdiList = [];
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
                chip.sendChip();
                this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "chouma.mp3", false);
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
                    Laya.timer.once(800, this, () => {
                        this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "piaoqian.mp3", false);
                        for (let j = 0; j < 20; j++) {
                            let ranType = MathU.randomRange(0, 4);
                            let ranVal = this._chipArr[ranType];
                            this._chipSortScore++;
                            this.bankerFlyChip(2, i + 1, ranType, ranVal, this._chipSortScore, -1);
                        }
                    })
                    Laya.timer.once(2000, this, this.bankerFlyToPlayerChip, [i]);
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
                this._viewUI.btn_chongzhi.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_repeat.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_playerList.off(LEvent.CLICK, this, this.onBtnClickWithTween);

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
                this._game.qifuMgr.off(QiFuMgr.QIFU_FLY, this, this.qifuFly);

                this.resetUI();
                if (this._seatUIList) {
                    for (let i: number = 0; i < this._seatUIList.length; i++) {
                        this._seatUIList[i] && this._seatUIList[i].off(LEvent.CLICK, this, this.onSelectSeat);
                        this._seatUIList[i] = null;
                    }
                    this._seatUIList.length = 0;
                }
                if (this._unitSeated) {
                    for (let i: number = 0; i < this._unitSeated.length; i++) {
                        this._unitSeated[i] = null;
                    }
                    this._unitSeated.length = 0;
                }

                if (this._chipUIList) {
                    for (let i: number = 0; i < this._chipUIList.length; i++) {
                        this._chipUIList[i] && this._chipUIList[i].off(LEvent.CLICK, this, this.onSelectChip);
                    }
                    this._chipUIList.length = 0;
                }
                this._allChips = [];
                if (this._areaKuangUIList) {
                    for (let i: number = 0; i < this._areaList.length; i++) {
                        this._areaList[i] && this._areaList[i].off(LEvent.MOUSE_OUT, this, this.onAreaBetMouseOut);
                        this._areaList[i] && this._areaList[i].off(LEvent.MOUSE_DOWN, this, this.onAreaBetMouseDown);
                        this._areaList[i] && this._areaList[i].off(LEvent.MOUSE_UP, this, this.onAreaBetMouseUp);
                    }
                    this._areaKuangUIList = [];
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
    class MapRecordRender extends ui.ajqp.game_ui.benchibaoma.component.RecordItemUI {
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