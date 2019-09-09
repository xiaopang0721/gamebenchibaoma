/**
* name 
*/
module gamebenchibaoma.page {
	export class BcbmRulePage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.benchibaoma.BenChiBaoMa_GuiZeUI;

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


			this._viewUI.panel_rule.vScrollBarSkin = "";
			this._viewUI.panel_rule.vScrollBar.autoHide = true;
			this._viewUI.panel_rule.vScrollBar.elasticDistance = 100;
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

		}

		public close(): void {
			super.close();
		}
	}
}