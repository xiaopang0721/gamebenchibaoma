/**
* 奔驰宝马
*/
module gamebenchibaoma.page {
    const BCBM_CURVES: number[][] = [
        // [400,92, 489,89, 538,117, 598,171, 636,171, 676,173, 740,117, 786,89, 884,92, ],
        [400, 92, 642, 92, 884, 92],
        [884, 92, 1050, 112, 1060, 291, 1050, 464, 884, 486],
        [884, 486, 642, 486, 400, 486],
        [400, 486, 226, 473, 206, 297, 219, 114, 400, 92]
    ];
    const BCBM_CURVES_PARAM: number[][] = [
        // [6, 4],
        [6, 1],
        [15, 3],
        [6, 1],
        [15, 3]
    ];
    export class BcbmCarPage extends Laya.EventDispatcher {
        private static BCBM_IS_INIT_POINT: boolean = false;
        private static BCBM_ALL_POINTS: Vector2[][] = [];
        private static BCBM_ALL_ANGLES: number[][] = [];
        private static initBcbmPoint(): void {
            if (this.BCBM_IS_INIT_POINT) return;
            for (let i: number = 0; i < BCBM_CURVES.length; i++) {
                let curves: number[] = BCBM_CURVES[i];
                let params: number[] = BCBM_CURVES_PARAM[i];
                let ppp: any[] = Laya.Bezier.I.getBezierPoints(curves, params[0]);
                if (params[0] != 9) {
                    //去掉中间跟尾部
                    let relen: number = Math.floor(curves.length / 4);
                    for (let j: number = relen; j > 0; j--) {
                        ppp.splice((params[0] + 1) * j * 2 - 2, 2);
                    }
                }

                let zulen: number = 2 * params[1];
                let zu: number = ppp.length / zulen;
                if (ppp.length % zulen != 0) {
                    throw ("BcbmCarPage.initBcbmPoint error--index:" + i);
                }
                for (let k: number = 0; k < zu; k++) {
                    let arr: Vector2[] = [];
                    for (let j: number = 0; j < params[1]; j++) {
                        let idx: number = zulen * k + j * 2;
                        arr.push(new Vector2(ppp[idx], ppp[idx + 1]));
                    }
                    this.BCBM_ALL_POINTS.push(arr);
                }
            }
            if (this.BCBM_ALL_POINTS.length < 3) {
                throw ("BcbmCarPage.initBcbmPoint error--points length:" + this.BCBM_ALL_POINTS.length);
            }
            //每组头尾相连
            for (let i: number = 0; i < this.BCBM_ALL_POINTS.length; i++) {
                let arr: Vector2[] = this.BCBM_ALL_POINTS[i];
                let nextArr: Vector2[];
                if (i >= this.BCBM_ALL_POINTS.length - 1) {
                    //最后一组
                    nextArr = this.BCBM_ALL_POINTS[0];
                } else {
                    nextArr = this.BCBM_ALL_POINTS[i + 1];
                }
                arr.push(nextArr[0]);
            }

            //算下角度
            for (let i: number = 0; i < this.BCBM_ALL_POINTS.length; i++) {
                let arr: Vector2[] = this.BCBM_ALL_POINTS[i];
                let arrAng: number[] = [];
                arrAng.push(0);
                for (let j: number = 0; j < arr.length - 1; j++) {
                    let point1: Vector2 = arr[j];
                    let point2: Vector2 = arr[j + 1];
                    let angle: number = Math.atan2(point2.y - point1.y, point2.x - point1.x);
                    angle = angle * 180 / Math.PI;
                    arrAng.push(angle);
                }
                this.BCBM_ALL_ANGLES.push(arrAng);
            }
            for (let i: number = 0; i < this.BCBM_ALL_ANGLES.length; i++) {
                let arr: number[] = this.BCBM_ALL_ANGLES[i];
                let lastArr: number[];
                if (i == 0) {
                    lastArr = this.BCBM_ALL_ANGLES[this.BCBM_ALL_ANGLES.length - 1];
                } else {
                    lastArr = this.BCBM_ALL_ANGLES[i - 1];
                }
                arr[0] = lastArr[lastArr.length - 1];
            }

            this.BCBM_IS_INIT_POINT = true;
        }

        //绘制点
        private static readonly BCBM_IS_DRAW: boolean = false;
        private static DrawPoint(gra: Graphics): void {
            if (!gra) return;

            for (let i: number = 0; i < BCBM_CURVES.length; i++) {
                let fillColor: string = i % 2 == 0 ? "#ff0000" : "#0000ff";
                let arr: number[] = BCBM_CURVES[i];
                for (let j: number = 0; j < arr.length; j += 2) {
                    gra.drawCircle(arr[j], arr[j + 1], 8, fillColor);
                }
            }

            for (let i: number = 0; i < this.BCBM_ALL_POINTS.length; i++) {
                let fillColor: string = i % 2 == 0 ? "#00fff4" : "#c100ff";
                let arr: Vector2[] = this.BCBM_ALL_POINTS[i];
                for (let j: number = 0; j < arr.length - 1; j++) {
                    gra.drawCircle(arr[j].x, arr[j].y, j == 0 ? 6 : 4, j == 0 ? "#00ff00" : fillColor);
                }
            }
        }

        //打印角度
        private static LogAngle(): void {
            for (let i: number = 0; i < this.BCBM_ALL_ANGLES.length; i++) {
                console.log("BcbmCarPage--angle index:" + i);
                let arr: number[] = this.BCBM_ALL_ANGLES[i];
                for (let j: number = 0; j < arr.length; j++) {
                    console.log("BcbmCarPage--angle：" + arr[j]);
                }
            }
        }


        private _game: Game;
        private _boxCar: Box;
        private _uiDeng: ui.ajqp.game_ui.benchibaoma.component.GuangUI;
        private _points: Vector2[][];
        private _angles: number[][];
        private _totalNum: number = 0;
        constructor(game: Game, view: ui.ajqp.game_ui.benchibaoma.BenChiBaoMaUI) {
            super();
            this._game = game;
            BcbmCarPage.initBcbmPoint();
            if (BcbmCarPage.BCBM_IS_DRAW) {
                BcbmCarPage.DrawPoint((view.box_small_car.parent as Box).graphics);
            }
            // BcbmCarPage.LogAngle();

            this._points = BcbmCarPage.BCBM_ALL_POINTS;
            this._angles = BcbmCarPage.BCBM_ALL_ANGLES;
            this._totalNum = this._points.length;
            this._boxCar = view.box_small_car;;
            this._uiDeng = view.ui_small_car;

            this._uiDeng.ani1.gotoAndStop(1);
            this._uiDeng.visible = false;
            this._boxCar.x = BcbmCarPage.BCBM_ALL_POINTS[0][0].x;
            this._boxCar.y = BcbmCarPage.BCBM_ALL_POINTS[0][0].y;
            this._boxCar.rotation = BcbmCarPage.BCBM_ALL_ANGLES[0][1] - 180;


        }

        private _curIndex: number = 0;
        private _isFirst: boolean = false;
        private _isEnd: boolean = false;
        private _curTotalTime: number = 0;
        private _curPoints: Vector2[];
        private _targetAngle: number[];
        private _onePer: number = 0;
        public onDataChange(index: number, curTime: number, time: number, isStart: boolean = false, isEnd: boolean = false): void {
            this._curIndex = index % this._points.length;
            this._isFirst = index == 0;
            this._isEnd = isEnd;
            this._curTotalTime = time;
            this._curPoints = this._points[this._curIndex];
            this._onePer = 1 / (this._curPoints.length - 1);
            this._targetAngle = this._angles[this._curIndex];
            this._uiDeng.visible = isEnd;
            if (isEnd) {
                this._uiDeng.ani1.play(1, true);
            } else {
                this._uiDeng.ani1.gotoAndStop(1);
            }
            this.updateCar(curTime);
        }



        public updateCar(time: number): void {
            if (!this._curPoints || this._curPoints.length < 1) return;
            let per: number = time / this._curTotalTime;
            if (per > 1) return;
            if (this._isEnd) per = 0;

            let curPoint: Vector2;
            let nextPoint: Vector2;
            if (per == 1) {
                curPoint = this._curPoints[this._curPoints.length - 1];
                this._boxCar.x = curPoint.x;
                this._boxCar.y = curPoint.y;
                this._boxCar.rotation = this._targetAngle[this._targetAngle.length - 1] - 180;
            } else {
                let angle: number = 0;
                let idx: number = Math.floor(per / this._onePer);
                let idxPer: number = (per % this._onePer) / this._onePer;
                curPoint = this._curPoints[idx];
                nextPoint = this._curPoints[idx + 1];
                let posx: number = nextPoint.x * idxPer + (1 - idxPer) * curPoint.x;
                let posy: number = nextPoint.y * idxPer + (1 - idxPer) * curPoint.y;
                this._boxCar.x = posx;
                this._boxCar.y = posy;

                if (this._boxCar.rotation != this._targetAngle[idx + 1]) {
                    let curangle: number = this._targetAngle[idx] - 180;
                    let nextangle: number = this._targetAngle[idx + 1] - 180;
                    if (this._isFirst) curangle = nextangle;
                    if (Math.abs(curangle - nextangle) > 320) curangle = curangle < nextangle ? curangle + 360 : curangle - 360;
                    curangle = nextangle * idxPer + (1 - idxPer) * curangle;
                    this._boxCar.rotation = curangle;

                }

            }
        }


        //清除
        public clear(): void {

        }

        // 释放函数
        destroy(destroyChild?: boolean): void {
            this.clear();

            this._points = null;
            this._angles = null;
            this._boxCar = null;
            this._uiDeng = null;
            this._game = null;
        }














    }
}