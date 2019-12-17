/**
* name 
*/
module gamebenchibaoma.page {
	const enum TYPE_INDEX {
		TYPE_WANFA_JIESHAO = 0,
		TYPE_BEISHU = 1,
	}
	export class BcbmRulePage extends game.gui.base.Page {

		private _viewUI: ui.ajqp.game_ui.benchibaoma.BenChiBaoMa_GuiZeUI;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._asset = [
				Path_game_benchibaoma.atlas_game_ui + "benchibaoma.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.benchibaoma.BenChiBaoMa_GuiZeUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.panel_beishu.vScrollBarSkin = "";
			this._viewUI.panel_beishu.vScrollBar.autoHide = true;
			this._viewUI.panel_beishu.vScrollBar.elasticDistance = 100;

			this._viewUI.tab_btn.selectHandler = new Handler(this, this.selectHandler);
			this._viewUI.tab_btn.selectedIndex = 0;
		}

		private selectHandler(index: number) {
			this._viewUI.img_rule.visible = index == TYPE_INDEX.TYPE_WANFA_JIESHAO;
			this._viewUI.panel_beishu.visible = index == TYPE_INDEX.TYPE_BEISHU;
		}

		public close(): void {
			super.close();
		}
	}
}