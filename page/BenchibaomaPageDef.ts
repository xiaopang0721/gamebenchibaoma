/**
* name 
*/
module gamebenchibaoma.page {
	export class BenchibaomaPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string;
		//奔驰宝马界面
		static PAGE_BCBM: string = "1";
		//奔驰宝马地图UI
		static PAGE_BCBM_MAP: string = "2";
		//奔驰宝马开始下注界面
		static PAGE_BCBM_BEGIN: string = "3";
		//奔驰宝马游戏通杀界面
		static PAGE_BCBM_TONGSHA: string = "4";
		//奔驰宝马游戏通赔界面
		static PAGE_BCBM_TONGPEI: string = "5";
		//奔驰宝马游戏规则界面
		static PAGE_BCBM_RULE: string = "101";
		//奔驰宝马玩家列表界面
		static PAGE_BCBM_PLAYER_LIST: string = "10";
		//奔驰宝马停止下注界面
		static PAGE_BCBM_END: string = "11";


		static myinit(str: string) {
			super.myinit(str);
			BenchibaomaClip.init();
			PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM] = BcbmPage;
			PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM_MAP] = BcbmMapPage;
			PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM_BEGIN] = BcbmBeginPage;
			PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM_TONGSHA] = BcbmTongShaPage;
			PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM_TONGPEI] = BcbmTongPeiPage;
			PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM_RULE] = BcbmRulePage;
			PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM_PLAYER_LIST] = BcbmPlayerListPage;
			PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM_END] = BcbmEndPage;

			this["__needLoadAsset"] = [
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				Path_game_benchibaoma.atlas_game_ui + "benchibaoma.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
				DatingPath.atlas_dating_ui + "qifu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/kaipai.atlas",
				Path_game_benchibaoma.ui_benchibaoma + "sk/bcbm_0.png",
				Path_game_benchibaoma.ui_benchibaoma + "sk/bcbm_1.png",
				Path_game_benchibaoma.ui_benchibaoma + "sk/bcbm_2.png",
				Path_game_benchibaoma.ui_benchibaoma + "sk/bcbm_3.png",

				Path.custom_atlas_scene + 'chip.atlas',
				Path.map + 'pz_benchibaoma.png',
				Path.map_far + 'bg_benchibaoma.jpg'
			]

			if (WebConfig.needMusicPreload) {
				this["__needLoadAsset"] = this["__needLoadAsset"].concat([
					Path_game_benchibaoma.music_benchibaoma + "BGM_1.mp3",
					Path_game_benchibaoma.music_benchibaoma + "call_start.mp3",
					Path_game_benchibaoma.music_benchibaoma + "car_bgm.mp3",
					Path_game_benchibaoma.music_benchibaoma + "dingding_end.mp3",
					Path_game_benchibaoma.music_benchibaoma + "paoche.mp3",
					Path_game_benchibaoma.music_benchibaoma + "xiazhu_end.mp3",
					Path_game_benchibaoma.music_benchibaoma + "xiazhu_start.mp3",
					Path_game_benchibaoma.music_benchibaoma + "zhuandong.mp3",
					Path_game_benchibaoma.music_benchibaoma + "chouma.mp3",
					Path_game_benchibaoma.music_benchibaoma + "dingding_start.mp3",
					Path_game_benchibaoma.music_benchibaoma + "piaoqian.mp3",
				])
			}
		}
	}
}