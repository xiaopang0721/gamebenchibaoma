/**
* 奔驰宝马
*/
module gamebenchibaoma.page {
    const PRIZE_TYPE_NORMAL: number = 1;           //普通
    const PRIZE_TYPE_NUM: number = 1;              //几种奖励类型

    const FIRST_CIRCLE_TIME: number = 9000;              //第一圈总时间
    const OTHER_CIRCLE_TIME: number = 3000;              //其他圈总时间
    export class BcbmEffectPage {

        private _box: Box;
        private _grids: Box[];
        private _game: Game;
        private _imgs: LImage[] = [];
        private _effContainer: Laya.Sprite;
        private _totalNum: number = 0;
        private _carPage: BcbmCarPage;
        private _bcbmStory: BenchibaomaStory;

        constructor(game: Game, box: Box, view: ui.ajqp.game_ui.benchibaoma.BenChiBaoMaUI) {
            this._game = game;
            this._box = box;
            this._grids = [];
            for (let i: number = 0; i < 100; i++) {
                let grid: Box = view["box_che" + i];
                if (!grid) {
                    break;
                }
                this._grids[i] = grid;
            }
            this._totalNum = this._grids.length;
            this._effContainer = new Laya.Sprite();
            this._box.addChild(this._effContainer);
            this._carPage = new BcbmCarPage(game, view);
            this._bcbmStory = this._game.sceneObjectMgr.story as BenchibaomaStory;
        }

        public Update(diff: number): void {
            let nowTime: number = this._game.sync.serverTimeBys * 1000;
            this.updateEff(diff, Laya.timer.currTimer);
            this.updateGrid(diff, nowTime);
        }

        //更新特效
        private updateEff(diff: number, nowTime: number): void {
            if (this._allEff.length > 0) {
                for (let i: number = this._allEff.length - 1; i >= 0; i--) {
                    let eff: BcbmGridEff = this._allEff[i];
                    if (eff && eff.isPlaying) {
                        eff.Update(diff, nowTime);
                    } else {
                        BcbmGridEff.ToPool(eff);
                        this._allEff.splice(i, 1);
                    }
                }
            }
        }

        private _allEff: BcbmGridEff[] = [];
        private addEff(type: number, index: number, gridTime: number, completeFun: Laya.Handler = null, param1: number = 0, isNew: boolean = true): void {
            let idx: number = index % this._totalNum;
            let eff: BcbmGridEff = BcbmGridEff.GetPool();
            eff.play(type, index, gridTime, completeFun, param1);
            eff.x = this._grids[idx].x;
            eff.y = this._grids[idx].y;
            this._effContainer.addChild(eff);
            this._allEff.push(eff);
        }

        private clearEffByIndex(index: number): boolean {
            for (let i: number = 0; i < this._allEff.length; i++) {
                let eff: BcbmGridEff = this._allEff[i];
                if (eff && eff.index == index) {
                    BcbmGridEff.ToPool(eff);
                    this._allEff.splice(i, 1);
                    return true;
                }
            }
            return false;
        }

        private clearEff(): void {
            for (let i: number = 0; i < this._allEff.length; i++) {
                let eff: BcbmGridEff = this._allEff[i];
                BcbmGridEff.ToPool(eff);
            }
            this._allEff = [];
        }



        private _lotteryIndex: number = 0;
        private _startTime: number = 0;//毫秒
        private _prizeType: number = 0;
        private _completeFun: Laya.Handler = null;

        private _isEnd: boolean = true;
        private _isPlaying: boolean = false;
        private _endRewardIdx: number[] = [];
        private _startIdx: number = 0;
        private _endIdx: number = 0;
        private _curIdx: number = 0;
        private _curTime: number = 0;
        private _updateTime: number = 0;
        private _endTime: number = 0;
        private _circleGridTimeList: number[] = [];
        private _gridUpdateInfoList: any[] = [];

        private _fsRewardNum = 0;

        //是否播放特效哦
        public get isPlaying(): boolean {
            return this._isPlaying;
        }

        //获取游戏时间
        public get gameTime(): number {
            let nowTime: number = this._game.sync.serverTimeBys * 1000
            if (nowTime < this._startTime) return 0;
            if (nowTime > this._endTime) nowTime = this._endTime;
            let time: number = nowTime - this._startTime;
            return time;
        }

        //更新格子
        private updateGrid(diff: number, nowTime: number): void {
            if (nowTime < this._startTime) return;
            if (!this._isEnd && nowTime >= this._updateTime) {
                let tt: number = nowTime - this._curTime;
                for (let i: number = this._curIdx; i <= this._endIdx; i++) {
                    let updateInfo: any = this.calIdxUpdateInfoByIndex(i);
                    if (!updateInfo) continue;
                    tt -= updateInfo.time;
                    let isNew: boolean = tt < 0;
                    if (i == this._endIdx) {
                        //结束了
                        this._curIdx = i;
                        this._startIdx = this._endIdx % this._totalNum;

                        if (updateInfo.efftype == BcbmGridEff.TYPE_FULL_SCREEN) this._fsRewardNum++;
                        if (updateInfo.efftype != -1) {
                            this.addEff(updateInfo.efftype, i, updateInfo.time, null, this._fsRewardNum, isNew);

                            if (this._endRewardIdx.indexOf(i) != -1 || updateInfo.efftype == BcbmGridEff.TYPE_FULL_SCREEN) {
                                this.onRewardComplete(i, updateInfo.start, updateInfo.end);
                            }
                            this._carPage.onDataChange(i, 0, 0, false, true);
                        }
                        this.onComplete();
                    } else {
                        if (i > this._curIdx) {
                            if (updateInfo.efftype == BcbmGridEff.TYPE_FULL_SCREEN) this._fsRewardNum++;
                            if (updateInfo.efftype != -1) {
                                this.addEff(updateInfo.efftype, i, updateInfo.time, null, this._fsRewardNum, isNew);

                                if (this._endRewardIdx.indexOf(i) != -1 || updateInfo.efftype == BcbmGridEff.TYPE_FULL_SCREEN) {
                                    this.onRewardComplete(i, updateInfo.start, updateInfo.end);
                                } else {
                                    this.onGridComplete(i, updateInfo.start, updateInfo.end);
                                }
                            }
                        }
                        if (tt < 0) {
                            this._curIdx = i;
                            this._curTime = nowTime - tt - updateInfo.time;
                            this._updateTime = this._curTime + updateInfo.time;
                            this._carPage.onDataChange(i, nowTime - this._curTime, updateInfo.time, false, false);
                            break;
                        }

                    }


                }


            }
            if (!this._isEnd && nowTime >= this._curTime) {
                let tt: number = nowTime - this._curTime;
                this._carPage.updateCar(tt);
            }
            if (this._isPlaying && nowTime >= this._endTime) {
                this.onCompletePlay();
            }

        }

        private onGridComplete(index: number, start: number, end: number): void {
            if (this._completeFun) {
                this._completeFun.runWith([2, this._prizeType, index % this._totalNum, false, index, start, end]);
            }
        }

        private onRewardComplete(index: number, start: number, end: number): void {
            if (this._completeFun) {
                let idx: number = index % this._totalNum;
                this._completeFun.runWith([1, this._prizeType, idx, false, index, start, end]);
            }
        }

        private onComplete(): void {
            this._isEnd = true;
        }

        private onCompletePlay(): void {
            this._isPlaying = false;
            if (this._completeFun) {
                this._completeFun.runWith([0, this._prizeType, 0, false]);
            }
        }

        public playEff(targetIndex: number, startTime: number, completeFun: Laya.Handler = null): void {
            if (this._isPlaying || targetIndex < 0 || targetIndex >= this._totalNum) {
                if (!this._isPlaying) {
                    logd("BcbmEffectPage.playEff() targetIndex is error:" + targetIndex);
                }
                return;
            }
            this.clear();
            this._lotteryIndex = targetIndex;
            this._startTime = startTime * 1000;
            this._prizeType = PRIZE_TYPE_NORMAL;
            this._completeFun = completeFun;

            this._isEnd = false;
            this._isPlaying = true;
            this._endRewardIdx = [];
            this._curIdx = this._startIdx;
            this._curTime = this._startTime;
            // console.log("------------------------------:" + this._curTime);
            this._endIdx = this.calEndIndex(this._prizeType, targetIndex, this._curIdx, this._endRewardIdx);
            this._endTime = this._startTime + this.calUpdateInfoList(this._startIdx, this._endIdx);
            let updateInfo: any = this.calIdxUpdateInfoByIndex(this._curIdx);
            this._updateTime = updateInfo.time;
            if (!this._bcbmStory.isReconnect) {
                this.addEff(updateInfo.efftype, this._curIdx, updateInfo.time);
                this._carPage.onDataChange(this._curIdx, 0, updateInfo.time, true, false);
            } else {
                //游戏开始后，断线重连进来，就直接出结果
                this._curIdx = this._endIdx;
                this._startIdx = this._endIdx % this._totalNum
                let updateInfo: any = this.calIdxUpdateInfoByIndex(this._curIdx);
                this.addEff(updateInfo.efftype, this._curIdx, updateInfo.time, null, this._fsRewardNum, true);
                this._carPage.onDataChange(this._curIdx, 0, 0, false, true);
                this._carPage.updateCar(updateInfo.time);
                this._isEnd = true;
                this.onCompletePlay();
            }
        }

        //计算结束为止
        private calEndIndex(type: number, targetIndex: number, startIndex: number, endIndexs: number[]): number {
            if (!endIndexs) endIndexs = [];

            let endIndex: number = startIndex;
            switch (type) {
                default:
                    //先转两圈
                    endIndex += this._totalNum * 4;
                    let yEndIndex: number = endIndex % this._totalNum;
                    endIndex += targetIndex - yEndIndex;
                    if (targetIndex <= yEndIndex) {
                        endIndex += this._totalNum;
                    }
                    endIndexs[0] = endIndex;
                    break;
            }

            return endIndex;
        }

        //计算格子更新信息列表
        private calUpdateInfoList(startindex: number, endindex: number): number {
            this._circleGridTimeList = [];
            this._gridUpdateInfoList = [];
            for (let i: number = startindex; i < endindex; i++) {
                let updateInfo: any = this.calIdxUpdateInfo(this._prizeType, i);
                this._gridUpdateInfoList.push(updateInfo);
                if (!this._circleGridTimeList[updateInfo.curCircle]) {
                    this._circleGridTimeList[updateInfo.curCircle] = 0;
                }
                this._circleGridTimeList[updateInfo.curCircle] += updateInfo.beishu;
            }

            //计算时间
            let totalTimeMs: number = 0;
            for (let i: number = 0; i < this._circleGridTimeList.length; i++) {
                let time: number = OTHER_CIRCLE_TIME;
                if (i == 0) {
                    time = FIRST_CIRCLE_TIME;
                }
                totalTimeMs += time;
                this._circleGridTimeList[i] = time / this._circleGridTimeList[i];
            }

            for (let i: number = 0; i < this._gridUpdateInfoList.length; i++) {
                let updateInfo: any = this._gridUpdateInfoList[i];
                updateInfo.time = updateInfo.beishu * this._circleGridTimeList[updateInfo.curCircle];
            }

            totalTimeMs += 1500;//结束后停留时间

            return totalTimeMs;
        }

        //计算每个位置刷新信息
        private calIdxUpdateInfoByIndex(index: number): any {
            if (index < this._startIdx || index > this._endIdx) return null;


            if (index == this._endIdx) {
                //最后一个
                let info: any = {
                    time: 0,
                    start: this._startIdx,
                    end: this._endIdx,
                    efftype: BcbmGridEff.TYPE_TWINKLE,
                    curCircle: this._endRewardIdx.length,
                }

                return info;
            }
            return this._gridUpdateInfoList[index - this._startIdx];
        }

        //计算每个位置刷新信息
        private calIdxUpdateInfo(type: number, index: number): any {
            if (index < this._startIdx || index > this._endIdx) return null;

            let info: any = {
                time: 0,
                efftype: BcbmGridEff.TYPE_TRAIL,
                start: this._startIdx,
                end: this._endIdx
            }
            if (index == this._endIdx) {
                //最后一个
                info.efftype = BcbmGridEff.TYPE_TWINKLE;
                info.curCircle = this._endRewardIdx.length
                return info;
            }

            let startRewardIdx: number = this._startIdx;
            let endRewardIdx: number = -1;
            let curCircle: number = 0;
            for (let i: number = 0; i < this._endRewardIdx.length; i++) {
                if (index < this._endRewardIdx[i]) {
                    curCircle = i;
                    endRewardIdx = this._endRewardIdx[i];
                    if (i > 0) startRewardIdx = this._endRewardIdx[i - 1];
                    break;
                }
            }
            if (endRewardIdx == -1 || endRewardIdx <= startRewardIdx) {
                return null;
            }

            info.start = startRewardIdx;
            info.end = endRewardIdx;
            info.curCircle = curCircle;

            //第一圈
            let chaIdx: number = 0;
            let beishu: number = 1;
            if (curCircle == 0) {
                //头
                chaIdx = index - startRewardIdx;
                if (chaIdx < 5) {
                    beishu += (5 - chaIdx) * 3;
                } else {
                    //尾
                    chaIdx = endRewardIdx - index;
                    if (chaIdx < 15) {
                        beishu += (15 - chaIdx) * 2;
                    }
                }

            } else if (curCircle == 1) {
                //头
                chaIdx = index - startRewardIdx;
                if (chaIdx < 3) {
                    beishu += (3 - chaIdx);
                    if (chaIdx == 0) {
                        info.efftype = BcbmGridEff.TYPE_TWINKLE;
                        switch (type) {
                            default:
                                beishu = 50;
                                break;
                        }
                    }
                } else {
                    //尾
                    chaIdx = endRewardIdx - index;
                    if (chaIdx < 6) {
                        beishu += (6 - chaIdx) * 3;
                    }
                    if (chaIdx == 1) {

                    }
                }
            } else {
                //头
                chaIdx = index - startRewardIdx;
                if (chaIdx < 3) {
                    beishu += (3 - chaIdx);
                    if (chaIdx == 0) {
                        beishu = 50;
                        info.efftype = BcbmGridEff.TYPE_TWINKLE;
                    }
                } else {
                    //尾
                    chaIdx = endRewardIdx - index;
                    if (chaIdx < 6) {
                        beishu += (6 - chaIdx) * 3;
                    }
                }
            }
            info.beishu = beishu /** BcbmGridEff.UPDATE_TIME*/;
            return info;


        }

        //清除
        public clear(): void {
            this._lotteryIndex = 0;
            this._startTime = 0;
            this._prizeType = 0;
            if (this._completeFun) {
                this._completeFun.recover();
                this._completeFun = null;
            }
            this._gridUpdateInfoList = [];
            this._fsRewardNum = 0;

            this._isEnd = true;
            this._isPlaying = false;
            this._endRewardIdx = [];

            this.clearEff();
        }

        // 释放函数
        destroy(destroyChild?: boolean): void {
            this.clear();

            this._box = null;
            this._grids.length = 0;
            this._grids = null;
            this._game = null;
            this._imgs = null;
            if (this._effContainer) {
                this._effContainer.removeSelf();
                this._effContainer.destroy();
                this._effContainer = null;
            }
            this._carPage.destroy();
            this._carPage = null;
        }














    }
}