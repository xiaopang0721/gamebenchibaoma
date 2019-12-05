/**
* 奔驰宝马
*/
module gamebenchibaoma.page {
	export class BcbmPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.benchibaoma.BenChiBaoMa_HUDUI;
		private _player: any;
		private _xianhongTmep: any = [5000, 8000, 25000, 50000];
		private _needMoney: any = [0, 0, 0, 0];
		private _xianhongClipList: ClipUtil[] = [];
		private _clipArr: any[] = [ClipUtil.HUD_FONT0, ClipUtil.HUD_FONT1, ClipUtil.HUD_FONT2, ClipUtil.HUD_FONT3];

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				Path_game_benchibaoma.atlas_game_ui + "benchibaoma.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				Path_game_benchibaoma.ui_benchibaoma + "sk/bcbm_0.png",
				Path_game_benchibaoma.ui_benchibaoma + "sk/bcbm_1.png",
				Path_game_benchibaoma.ui_benchibaoma + "sk/bcbm_2.png",
				Path_game_benchibaoma.ui_benchibaoma + "sk/bcbm_3.png",
			];
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.benchibaoma.BenChiBaoMa_HUDUI', ["game_ui.tongyong.HudUI"]);
			this.addChild(this._viewUI);
			this._game.playMusic(Path_game_benchibaoma.music_benchibaoma + "BGM_1.mp3");

			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = false;
			}
			for (let index = 0; index < 4; index++) {
				if (!this._xianhongClipList[index]) {
					this._xianhongClipList[index] = new ClipUtil(this._clipArr[index]);
					this._xianhongClipList[index].x = this._viewUI["clip_xianhong" + index].x;
					this._xianhongClipList[index].y = this._viewUI["clip_xianhong" + index].y;
					this._viewUI["clip_xianhong" + index].parent && this._viewUI["clip_xianhong" + index].parent.addChild(this._xianhongClipList[index]);
					this._viewUI["clip_xianhong" + index].removeSelf();
				}
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

			this.initPlayerInfo();
			(this._viewUI.view_hud as TongyongHudNqpPage).onOpen(this._game, BenchibaomaPageDef.GAME_NAME);
			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = true;
				Laya.Tween.from(this._viewUI.box_right._childs[index], {
					right: -300
				}, 200 + index * 100, Laya.Ease.linearNone);
			}

			this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_join.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		protected onBtnTweenEnd(e: LEvent, target: any): void {
			this._player = this._game.sceneObjectMgr.mainPlayer;
			if (!this._player) return;
			switch (target) {
				case this._viewUI.img_room0:
					this.EnterRoom(0);
					break;
				case this._viewUI.img_room1:
					this.EnterRoom(1);
					break;
				case this._viewUI.img_room2:
					this.EnterRoom(2);
					break;
				case this._viewUI.img_room3:
					this.EnterRoom(3);
					break;
				// case this._viewUI.btn_join:
				// 	let maplv = TongyongUtil.getJoinMapLv(BenchibaomaPageDef.GAME_NAME, this._player.playerInfo.money);
				// 	if (!maplv) return;
				// 	this._game.sceneObjectMgr.intoStory(BenchibaomaPageDef.GAME_NAME, maplv.toString(), true);
				// 	break;
				default:
					break;
			}
		}

		private EnterRoom(index: number): void {
			if (index < 0 || index >= this._needMoney.length) {
				loge("BcbmPage.EnterRoom--index is error:" + index);
				return;
			}
			this._game.sceneObjectMgr.intoStory(BenchibaomaPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_BENCHIBAOMA_1 + index).toString(), true);
		}

		private initPlayerInfo(): void {
			for (let index = 0; index < this._xianhongClipList.length; index++) {
				this._xianhongClipList[index].setText(this._xianhongTmep[index], true);
			}
			// this._viewUI["lab_money" + index].text = "准入: " + this._needMoney[index];
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.img_room0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.btn_join.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
					Laya.timer.clearAll(this._viewUI.box_right._childs[index]);
				}
			}
			this._player = null;
			this._game.stopMusic();

			super.close();
		}
	}
}