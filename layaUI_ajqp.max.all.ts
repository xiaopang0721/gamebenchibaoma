
module ui.ajqp.game_ui.benchibaoma {
    export class BenChiBaoMaUI extends View {
		public box_car:Laya.Box;
		public box_che0:Laya.Box;
		public img_che_0:Laya.Image;
		public box_che1:Laya.Box;
		public img_che_1:Laya.Image;
		public box_che2:Laya.Box;
		public img_che_2:Laya.Image;
		public box_che3:Laya.Box;
		public img_che_3:Laya.Image;
		public box_che4:Laya.Box;
		public img_che_4:Laya.Image;
		public box_che5:Laya.Box;
		public img_che_5:Laya.Image;
		public box_che6:Laya.Box;
		public img_che_6:Laya.Image;
		public box_che7:Laya.Box;
		public img_che_7:Laya.Image;
		public box_che8:Laya.Box;
		public img_che_8:Laya.Image;
		public box_che9:Laya.Box;
		public img_che_9:Laya.Image;
		public box_che10:Laya.Box;
		public img_che_10:Laya.Image;
		public box_che11:Laya.Box;
		public img_che_11:Laya.Image;
		public box_che12:Laya.Box;
		public img_che_12:Laya.Image;
		public box_che13:Laya.Box;
		public img_che_13:Laya.Image;
		public box_che14:Laya.Box;
		public img_che_14:Laya.Image;
		public box_che15:Laya.Box;
		public img_che_15:Laya.Image;
		public box_che16:Laya.Box;
		public img_che_16:Laya.Image;
		public box_che17:Laya.Box;
		public img_che_17:Laya.Image;
		public box_che18:Laya.Box;
		public img_che_18:Laya.Image;
		public box_che19:Laya.Box;
		public img_che_19:Laya.Image;
		public box_che20:Laya.Box;
		public img_che_20:Laya.Image;
		public box_che21:Laya.Box;
		public img_che_21:Laya.Image;
		public box_che22:Laya.Box;
		public img_che_22:Laya.Image;
		public box_che23:Laya.Box;
		public img_che_23:Laya.Image;
		public box_che24:Laya.Box;
		public img_che_24:Laya.Image;
		public box_che25:Laya.Box;
		public img_che_25:Laya.Image;
		public box_che26:Laya.Box;
		public img_che_26:Laya.Image;
		public box_che27:Laya.Box;
		public img_che_27:Laya.Image;
		public box_che28:Laya.Box;
		public img_che_28:Laya.Image;
		public box_che29:Laya.Box;
		public img_che_29:Laya.Image;
		public box_che30:Laya.Box;
		public img_che_30:Laya.Image;
		public box_che31:Laya.Box;
		public img_che_31:Laya.Image;
		public box_small_car:Laya.Box;
		public img_da_deng:Laya.Image;
		public ui_small_car:ui.ajqp.game_ui.benchibaoma.component.GuangUI;
		public list_record:Laya.List;
		public main_player:ui.ajqp.game_ui.tongyong.TouXiangUI;
		public btn_chip0:ui.ajqp.game_ui.tongyong.effect.Effect_cmUI;
		public btn_chip1:ui.ajqp.game_ui.tongyong.effect.Effect_cmUI;
		public btn_chip2:ui.ajqp.game_ui.tongyong.effect.Effect_cmUI;
		public btn_chip3:ui.ajqp.game_ui.tongyong.effect.Effect_cmUI;
		public btn_chip4:ui.ajqp.game_ui.tongyong.effect.Effect_cmUI;
		public btn_repeat:Laya.Button;
		public seat0:ui.ajqp.game_ui.tongyong.TouXiangWzUI;
		public seat1:ui.ajqp.game_ui.tongyong.TouXiangWzUI;
		public seat2:ui.ajqp.game_ui.tongyong.TouXiangWzUI;
		public seat3:ui.ajqp.game_ui.tongyong.TouXiangWzUI;
		public seat4:ui.ajqp.game_ui.tongyong.TouXiangWzUI;
		public seat5:ui.ajqp.game_ui.tongyong.TouXiangWzUI;
		public kuang0:Laya.Image;
		public kuang1:Laya.Image;
		public kuang2:Laya.Image;
		public kuang3:Laya.Image;
		public kuang4:Laya.Image;
		public kuang5:Laya.Image;
		public kuang6:Laya.Image;
		public kuang7:Laya.Image;
		public area0:Laya.Box;
		public area1:Laya.Box;
		public area2:Laya.Box;
		public area3:Laya.Box;
		public area4:Laya.Box;
		public area5:Laya.Box;
		public area6:Laya.Box;
		public area7:Laya.Box;
		public box_info:Laya.Box;
		public box_time:ui.ajqp.game_ui.tongyong.DaoJiShiUI;
		public box_tip:Laya.Box;
		public clip_status:Laya.Clip;
		public txt_status:laya.display.Text;
		public txt_main_0:laya.display.Text;
		public txt_total_0:laya.display.Text;
		public txt_main_1:laya.display.Text;
		public txt_total_1:laya.display.Text;
		public txt_main_2:laya.display.Text;
		public txt_total_2:laya.display.Text;
		public txt_main_3:laya.display.Text;
		public txt_total_3:laya.display.Text;
		public txt_main_4:laya.display.Text;
		public txt_total_4:laya.display.Text;
		public txt_main_5:laya.display.Text;
		public txt_total_5:laya.display.Text;
		public txt_main_6:laya.display.Text;
		public txt_total_6:laya.display.Text;
		public txt_main_7:laya.display.Text;
		public txt_total_7:laya.display.Text;
		public btn_playerList:Laya.Button;
		public txt_online:laya.display.Text;
		public box_top_left:Laya.Box;
		public btn_spread:Laya.Button;
		public box_menu:Laya.Image;
		public btn_rule:Laya.Button;
		public btn_zhanji:Laya.Button;
		public btn_set:Laya.Button;
		public box_top_right:Laya.Box;
		public btn_qifu:Laya.Button;
		public btn_back:Laya.Button;
		public box_bottom_right:Laya.Box;
		public btn_chongzhi:ui.ajqp.game_ui.tongyong.effect.ChongzhiUI;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1280,"height":720},"child":[{"type":"Image","props":{"y":-44.49999297973676,"x":60.50000351013165,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_qc1.png","skewX":0,"rotation":90,"anchorY":0.5,"anchorX":0.5}},{"type":"GuangShu","props":{"y":-196,"x":628,"scaleX":-1,"blendMode":"lighter","runtime":"ui.ajqp.game_ui.benchibaoma.component.GuangShuUI"}},{"type":"Image","props":{"y":616.5000070202632,"x":72.50000351013165,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_qc4.png","anchorY":0.5,"anchorX":0.5}},{"type":"GuangShu","props":{"y":50,"x":-81,"scaleX":-1,"rotation":-90,"blendMode":"lighter","runtime":"ui.ajqp.game_ui.benchibaoma.component.GuangShuUI"}},{"type":"Image","props":{"y":-44.49999297973676,"x":1196.5000035101316,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_qc3.png","rotation":180,"anchorY":0.5,"anchorX":0.5}},{"type":"GuangShu","props":{"y":-194,"x":635,"blendMode":"lighter","runtime":"ui.ajqp.game_ui.benchibaoma.component.GuangShuUI"}},{"type":"Image","props":{"y":616.5000070202632,"x":1213.5000035101316,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_qc2.png","rotation":-90,"anchorY":0.5,"anchorX":0.5}},{"type":"GuangShu","props":{"y":351,"x":1022,"rotation":83,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.benchibaoma.component.GuangShuUI"}}]},{"type":"Box","props":{"y":3,"x":113,"var":"box_car"},"child":[{"type":"Box","props":{"y":2,"x":258,"width":63,"var":"box_che0","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_0","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":0,"x":338,"width":63,"var":"box_che1","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_1","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":1,"x":416,"width":63,"var":"box_che2","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_2","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":0,"x":495,"width":63,"var":"box_che3","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_3","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":1,"x":575,"width":63,"var":"box_che4","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_4","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":0,"x":656,"width":63,"var":"box_che5","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_5","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":1,"x":737,"width":63,"var":"box_che6","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_6","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":15,"x":819,"width":63,"var":"box_che7","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_7","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":49,"x":887,"width":63,"var":"box_che8","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_8","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":107,"x":939,"width":63,"var":"box_che9","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_9","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":175,"x":976,"width":63,"var":"box_che10","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_10","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":255,"x":986,"width":63,"var":"box_che11","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_11","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":330,"x":975,"width":63,"var":"box_che12","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_12","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":395,"x":941,"width":63,"var":"box_che13","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_13","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":453,"x":890,"width":63,"var":"box_che14","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_14","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":490,"x":823,"width":63,"var":"box_che15","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_15","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":508,"x":743,"width":63,"var":"box_che16","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_16","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":508,"x":659,"width":63,"var":"box_che17","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_17","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":508,"x":579,"width":63,"var":"box_che18","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_18","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":508,"x":498,"width":63,"var":"box_che19","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_19","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":508,"x":417,"width":63,"var":"box_che20","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_20","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":508,"x":336,"width":63,"var":"box_che21","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_21","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":508,"x":254,"width":63,"var":"box_che22","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_22","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":497,"x":173,"width":63,"var":"box_che23","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_23","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":463,"x":102,"width":63,"var":"box_che24","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_24","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":408,"x":46,"width":63,"var":"box_che25","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_25","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":337,"x":12,"width":63,"var":"box_che26","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_26","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":261,"x":0,"width":63,"var":"box_che27","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_27","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":176,"x":13,"width":63,"var":"box_che28","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_28","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":101,"x":51,"width":63,"var":"box_che29","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_29","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":43,"x":107,"width":63,"var":"box_che30","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_30","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":12,"x":179,"width":63,"var":"box_che31","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"y":32,"x":32,"var":"img_che_31","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":0,"x":0,"width":1280,"height":720},"child":[{"type":"Box","props":{"y":92,"x":384,"width":156,"var":"box_small_car","rotation":0,"pivotY":21,"pivotX":112,"height":44},"child":[{"type":"Image","props":{"y":0,"x":80,"var":"img_da_deng","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_qc.png"}},{"type":"Guang","props":{"y":-3,"x":-2,"var":"ui_small_car","blendMode":"lighter","runtime":"ui.ajqp.game_ui.benchibaoma.component.GuangUI"}}]}]},{"type":"Box","props":{"y":594,"width":736,"height":51,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":26,"width":739,"skin":"tongyong_ui/game_ui/tongyong/general/tu_d7.png","sizeGrid":"16,23,23,22","centerX":2,"anchorY":0.5,"anchorX":0.5,"alpha":0.75}},{"type":"List","props":{"y":7,"x":8,"width":728,"var":"list_record","spaceX":11,"repeatY":1,"repeatX":15,"height":38},"child":[{"type":"RecordItem","props":{"renderType":"render","runtime":"ui.ajqp.game_ui.benchibaoma.component.RecordItemUI"}}]}]},{"type":"Box","props":{"x":641,"width":948,"height":147,"bottom":-4,"anchorY":1,"anchorX":0.5},"child":[{"type":"TouXiang","props":{"var":"main_player","runtime":"ui.ajqp.game_ui.tongyong.TouXiangUI"}},{"type":"Box","props":{"y":99,"width":679,"height":113,"centerX":-10,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Effect_cm","props":{"y":55,"x":59,"var":"btn_chip0","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_cmUI"}},{"type":"Effect_cm","props":{"y":55,"x":195,"var":"btn_chip1","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_cmUI"}},{"type":"Effect_cm","props":{"y":55,"x":331,"var":"btn_chip2","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_cmUI"}},{"type":"Effect_cm","props":{"y":55,"x":466,"var":"btn_chip3","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_cmUI"}},{"type":"Effect_cm","props":{"y":55,"x":602,"var":"btn_chip4","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_cmUI"}}]},{"type":"Button","props":{"y":98,"var":"btn_repeat","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_3.png","sizeGrid":"0,0,0,0","labelStrokeColor":"#0f5b08","labelStroke":4,"labelSize":28,"labelColors":"#ffffff","labelBold":true,"centerX":416,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":36,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cfxz.png"}}]}]},{"type":"Box","props":{"y":115,"x":14},"child":[{"type":"TouXiangWz","props":{"var":"seat0","runtime":"ui.ajqp.game_ui.tongyong.TouXiangWzUI"}},{"type":"TouXiangWz","props":{"y":171,"var":"seat1","runtime":"ui.ajqp.game_ui.tongyong.TouXiangWzUI"}},{"type":"TouXiangWz","props":{"y":340,"var":"seat2","runtime":"ui.ajqp.game_ui.tongyong.TouXiangWzUI"}}]},{"type":"Box","props":{"y":115,"x":1163},"child":[{"type":"TouXiangWz","props":{"var":"seat3","runtime":"ui.ajqp.game_ui.tongyong.TouXiangWzUI"}},{"type":"TouXiangWz","props":{"y":171,"var":"seat4","runtime":"ui.ajqp.game_ui.tongyong.TouXiangWzUI"}},{"type":"TouXiangWz","props":{"y":340,"var":"seat5","runtime":"ui.ajqp.game_ui.tongyong.TouXiangWzUI"}}]},{"type":"Box","props":{"y":114,"x":234,"width":808,"height":352},"child":[{"type":"Image","props":{"y":0,"x":2,"var":"kuang0","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx4.png","blendMode":"lighter"}},{"type":"Image","props":{"y":0,"x":202,"var":"kuang1","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx3.png","blendMode":"lighter"}},{"type":"Image","props":{"y":0,"x":404,"var":"kuang2","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx3.png","blendMode":"lighter"}},{"type":"Image","props":{"y":0,"x":805,"var":"kuang3","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx4.png","scaleX":-1,"blendMode":"lighter"}},{"type":"Image","props":{"y":179,"x":0,"var":"kuang4","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx2.png","blendMode":"lighter"}},{"type":"Image","props":{"y":180,"x":202,"var":"kuang5","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx1.png","blendMode":"lighter"}},{"type":"Image","props":{"y":180,"x":404,"var":"kuang6","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx1.png","blendMode":"lighter"}},{"type":"Image","props":{"y":179,"x":806,"var":"kuang7","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx2.png","scaleX":-1,"blendMode":"lighter"}},{"type":"Box","props":{"y":10,"x":10,"width":190,"var":"area0","height":160}},{"type":"Box","props":{"y":10,"x":209,"width":190,"var":"area1","height":160}},{"type":"Box","props":{"y":10,"x":410,"width":190,"var":"area2","height":160}},{"type":"Box","props":{"y":10,"x":608,"width":190,"var":"area3","height":160}},{"type":"Box","props":{"y":185,"x":10,"width":190,"var":"area4","height":160}},{"type":"Box","props":{"y":185,"x":209,"width":190,"var":"area5","height":160}},{"type":"Box","props":{"y":185,"x":410,"width":190,"var":"area6","height":160}},{"type":"Box","props":{"y":185,"x":608,"width":190,"var":"area7","height":160}}]},{"type":"Box","props":{"y":311,"x":640,"width":241,"var":"box_info","height":116,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"DaoJiShi","props":{"y":-83,"x":116,"var":"box_time","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.DaoJiShiUI"}},{"type":"Box","props":{"y":-32,"x":120,"width":231,"var":"box_tip","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":13.5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_h.png","scaleY":0.7,"scaleX":0.6,"centerX":2,"anchorY":0.5,"anchorX":0.5,"alpha":0.5}},{"type":"Clip","props":{"y":0,"x":115,"var":"clip_status","skin":"tongyong_ui/game_ui/tongyong/general/clip_zhuangtai2.png","clipY":3,"anchorX":0.5}},{"type":"Text","props":{"y":2,"x":35,"wordWrap":true,"width":159,"var":"txt_status","text":"正在进入房间","strokeColor":"#00ffc1","leading":6,"height":22,"fontSize":20,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":-123,"x":-226},"child":[{"type":"Text","props":{"y":132,"x":14.600000000000001,"width":91,"var":"txt_main_0","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":-1,"x":14.600000000000001,"width":91,"var":"txt_total_0","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":-123,"x":-29},"child":[{"type":"Text","props":{"y":133,"x":0,"width":91,"var":"txt_main_1","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":-1,"x":0,"width":91,"var":"txt_total_1","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":-123,"x":171},"child":[{"type":"Text","props":{"y":132,"x":0,"width":91,"var":"txt_main_2","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":-1,"x":0,"width":91,"var":"txt_total_2","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":-123,"x":356},"child":[{"type":"Text","props":{"y":132,"x":0,"width":91,"var":"txt_main_3","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":-1,"x":0,"width":91,"var":"txt_total_3","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":48,"x":-222},"child":[{"type":"Text","props":{"y":126,"x":11,"width":91,"var":"txt_main_4","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":2,"x":11,"width":91,"var":"txt_total_4","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":48,"x":-29},"child":[{"type":"Text","props":{"y":125,"x":0,"width":91,"var":"txt_main_5","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":2,"x":0,"width":91,"var":"txt_total_5","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":48,"x":171},"child":[{"type":"Text","props":{"y":126,"x":0,"width":91,"var":"txt_main_6","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":2,"x":0,"width":91,"var":"txt_total_6","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":48,"x":356},"child":[{"type":"Text","props":{"y":125,"x":0,"width":91,"var":"txt_main_7","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":0,"x":0,"width":91,"var":"txt_total_7","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Image","props":{"y":20,"x":-103,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","scaleY":0.75,"scaleX":0.75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":96,"width":37,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bsj2.png","scaleY":0.75,"scaleX":0.75,"height":37,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":140,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bc2.png","scaleY":0.75,"scaleX":0.75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":339,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bm2.png","scaleY":0.75,"scaleX":0.75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":186,"x":-105,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","scaleY":0.6,"scaleX":0.6,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":186,"x":94,"width":37,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bsj2.png","scaleY":0.6,"scaleX":0.6,"height":37,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":186,"x":138,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bc2.png","scaleY":0.6,"scaleX":0.6,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":186,"x":337,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bm2.png","scaleY":0.6,"scaleX":0.6,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":657,"x":70,"var":"btn_playerList","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qtwj.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":67,"x":-23,"wordWrap":true,"width":132,"var":"txt_online","text":"在线200人","strokeColor":"#3b1211","stroke":4,"leading":6,"height":26,"fontSize":20,"color":"#ffffff","align":"center"}}]}]},{"type":"Box","props":{"width":112,"var":"box_top_left","top":0,"mouseThrough":true,"left":14,"height":337},"child":[{"type":"Button","props":{"y":53,"x":53,"var":"btn_spread","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_cd.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":84,"x":56,"var":"box_menu","skin":"tongyong_ui/game_ui/tongyong/general/anniu/cd_1.png","sizeGrid":"40,30,40,30","anchorY":0,"anchorX":0.5},"child":[{"type":"Image","props":{"y":94,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/cd_2.png"}},{"type":"Image","props":{"y":175,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/cd_2.png"}},{"type":"Button","props":{"y":55,"x":56,"var":"btn_rule","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gz.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":136,"x":56,"var":"btn_zhanji","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_zj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":217,"x":56,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_sz.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"width":178,"var":"box_top_right","top":16,"right":28,"height":76},"child":[{"type":"Button","props":{"y":35,"x":42.5,"var":"btn_qifu","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_qf.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":140.5,"var":"btn_back","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_fh1.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"width":121,"var":"box_bottom_right","right":12,"height":125,"bottom":0},"child":[{"type":"Chongzhi","props":{"y":63,"x":61,"var":"btn_chongzhi","scaleY":0.85,"scaleX":0.85,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.ChongzhiUI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.benchibaoma.component.GuangShuUI",ui.ajqp.game_ui.benchibaoma.component.GuangShuUI);
			View.regComponent("ui.ajqp.game_ui.benchibaoma.component.GuangUI",ui.ajqp.game_ui.benchibaoma.component.GuangUI);
			View.regComponent("ui.ajqp.game_ui.benchibaoma.component.RecordItemUI",ui.ajqp.game_ui.benchibaoma.component.RecordItemUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.TouXiangUI",ui.ajqp.game_ui.tongyong.TouXiangUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_cmUI",ui.ajqp.game_ui.tongyong.effect.Effect_cmUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.TouXiangWzUI",ui.ajqp.game_ui.tongyong.TouXiangWzUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.DaoJiShiUI",ui.ajqp.game_ui.tongyong.DaoJiShiUI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ChongzhiUI",ui.ajqp.game_ui.tongyong.effect.ChongzhiUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.benchibaoma.BenChiBaoMaUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.benchibaoma {
    export class BenChiBaoMa_GuiZeUI extends View {
		public tab_btn:Laya.Tab;
		public img_rule:Laya.Image;
		public panel_beishu:Laya.Panel;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"x":232,"width":816,"height":504,"centerY":0,"centerX":0},"child":[{"type":"ZhongKuang","props":{"y":-108,"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI"}},{"type":"Image","props":{"y":27,"x":408,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Tab","props":{"y":56,"x":0,"width":168,"var":"tab_btn","height":84},"child":[{"type":"Button","props":{"y":0,"x":3,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_wjjs.png","name":"item0"}},{"type":"Button","props":{"y":85,"x":3,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_yxbs.png","name":"item1"}}]},{"type":"Image","props":{"y":54,"x":172,"var":"img_rule","skin":"benchibaoma_ui/game_ui/benchibaoma/guize_1.png","height":159}},{"type":"Panel","props":{"y":54,"x":172,"width":647,"var":"panel_beishu","height":450},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"benchibaoma_ui/game_ui/benchibaoma/guize_2.png","height":519}}]},{"type":"Button","props":{"y":14,"x":803,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI",ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.benchibaoma.BenChiBaoMa_GuiZeUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.benchibaoma {
    export class BenChiBaoMa_HUDUI extends View {
		public view_hud:ui.ajqp.game_ui.tongyong.HudUI;
		public box_right:Laya.Box;
		public img_room0:Laya.Box;
		public txt_xianhong0:Laya.Clip;
		public img_room1:Laya.Box;
		public txt_xianhong1:Laya.Clip;
		public img_room2:Laya.Box;
		public txt_xianhong2:Laya.Clip;
		public img_room3:Laya.Box;
		public txt_xianhong3:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bj1.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"y":0,"var":"view_hud","top":0,"runtime":"ui.ajqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"width":1281,"skewY":0,"mouseThrough":true,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":210,"x":0,"width":1280,"var":"box_right","height":330,"centerX":0},"child":[{"type":"Box","props":{"y":0,"x":35,"width":300,"var":"img_room0","height":330},"child":[{"type":"Button","props":{"y":0,"x":0,"width":300,"stateNum":1,"skin":"benchibaoma_ui/game_ui/benchibaoma/btn_cjc.png","height":330}},{"type":"Box","props":{"y":280,"x":151,"width":200,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"txt_xianhong0","skin":"tongyong_ui/game_ui/tongyong/hud/clip_sz.png","clipX":11,"centerY":0,"centerX":0}}]}]},{"type":"Box","props":{"y":0,"x":338,"width":300,"var":"img_room1","height":330},"child":[{"type":"Button","props":{"stateNum":1,"skin":"benchibaoma_ui/game_ui/benchibaoma/btn_xzc.png"}},{"type":"Box","props":{"y":280,"x":151,"width":200,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"txt_xianhong1","skin":"tongyong_ui/game_ui/tongyong/hud/clip_sz.png","clipX":11,"centerY":0,"centerX":0}}]}]},{"type":"Box","props":{"y":0,"x":642,"width":300,"var":"img_room2","height":330},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"benchibaoma_ui/game_ui/benchibaoma/btn_lbc.png"}},{"type":"Box","props":{"y":280,"x":151,"width":200,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"txt_xianhong2","skin":"tongyong_ui/game_ui/tongyong/hud/clip_sz.png","clipX":11,"centerY":0,"centerX":0}}]}]},{"type":"Box","props":{"y":0,"x":945,"width":300,"var":"img_room3","height":330},"child":[{"type":"Button","props":{"stateNum":1,"skin":"benchibaoma_ui/game_ui/benchibaoma/btn_fhc.png"}},{"type":"Box","props":{"y":280,"x":151,"width":200,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"txt_xianhong3","skin":"tongyong_ui/game_ui/tongyong/hud/clip_sz.png","clipX":11,"centerY":0,"centerX":0}}]}]}]}]},{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_wz.png","scaleY":1,"scaleX":1,"left":155,"bottom":33,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":162,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/di.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":-29,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/di.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"x":1072,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_wrzx.png","right":30,"bottom":33}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.HudUI",ui.ajqp.game_ui.tongyong.HudUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.benchibaoma.BenChiBaoMa_HUDUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.benchibaoma.component {
    export class GuangUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":93,"height":47},"child":[{"type":"Image","props":{"y":-19,"x":-5,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.benchibaoma.component.GuangUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.benchibaoma.component {
    export class GuangShuUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":582,"height":626},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gs.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":313,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0}],"x":[{"value":291,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0}],"blendMode":[{"value":null,"tweenMethod":"linearNone","tween":false,"target":2,"key":"blendMode","index":0}],"anchorY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorY","index":0}],"anchorX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorX","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.benchibaoma.component.GuangShuUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.benchibaoma.component {
    export class RecordItemUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public img_icon:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":38,"height":38},"child":[{"type":"Image","props":{"y":19,"x":19,"var":"img_icon","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bm2.png","anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":1},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":2,"keyframes":{"y":[{"value":45,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0}],"x":[{"value":43,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":20}],"anchorY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorY","index":0}],"anchorX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorX","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":20}]}}],"name":"ani2","id":2,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.benchibaoma.component.RecordItemUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.benchibaoma {
    export class GoUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":360,"x":640,"skin":"tongyong_ui/game_ui/tongyong/general/effect/ksyx/tu_d.png","scaleY":1,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":11},{"type":"Box","props":{"y":360,"x":461.1578947368421,"width":680,"height":150,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":15,"child":[{"type":"Image","props":{"y":73,"x":606.8,"skin":"tongyong_ui/game_ui/tongyong/general/effect/ksxz/tu_g.png","scaleY":1.35,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":13},{"type":"Image","props":{"y":64,"x":636,"skin":"tongyong_ui/game_ui/tongyong/general/effect/ksxz/tu_wb.png","scaleY":2,"scaleX":0,"anchorY":0.5,"anchorX":1,"alpha":1},"compId":14},{"type":"Image","props":{"y":75,"x":517,"skin":"tongyong_ui/game_ui/tongyong/general/effect/ksxz/tu_ks.png","anchorY":0.5,"anchorX":0.5},"compId":12}]}]}],"animations":[{"nodes":[{"target":11,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":11,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"label":null,"key":"scaleY","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":11,"key":"scaleY","index":32}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":31}]}},{"target":15,"keyframes":{"x":[{"value":-343,"tweenMethod":"linearNone","tween":true,"target":15,"key":"x","index":0},{"value":-74.33333333333331,"tweenMethod":"linearNone","tween":true,"target":15,"key":"x","index":1},{"value":456,"tweenMethod":"linearNone","tween":true,"target":15,"key":"x","index":6},{"value":463,"tweenMethod":"linearNone","tween":true,"target":15,"label":null,"key":"x","index":25},{"value":1438,"tweenMethod":"linearNone","tween":true,"target":15,"key":"x","index":33}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":0},{"value":0.3333333333333333,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":15,"label":null,"key":"alpha","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":33}]}},{"target":14,"keyframes":{"x":[{"value":636,"tweenMethod":"linearNone","tween":true,"target":14,"key":"x","index":0},{"value":636,"tweenMethod":"linearNone","tween":true,"target":14,"label":null,"key":"x","index":25},{"value":836,"tweenMethod":"linearNone","tween":true,"target":14,"key":"x","index":26}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":14,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":14,"label":null,"key":"scaleX","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"scaleX","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"label":null,"key":"scaleX","index":25},{"value":2,"tweenMethod":"linearNone","tween":true,"target":14,"key":"scaleX","index":26}]}},{"target":13,"keyframes":{"x":[{"value":403,"tweenMethod":"linearNone","tween":true,"target":13,"key":"x","index":0},{"value":403,"tweenMethod":"linearNone","tween":true,"target":13,"label":null,"key":"x","index":5},{"value":478,"tweenMethod":"linearNone","tween":true,"target":13,"key":"x","index":6},{"value":616,"tweenMethod":"linearNone","tween":false,"target":13,"key":"x","index":21},{"value":483,"tweenMethod":"linearNone","tween":true,"target":13,"key":"x","index":26}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":13,"key":"scaleY","index":0},{"value":1.35,"tweenMethod":"linearNone","tween":false,"target":13,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":13,"key":"scaleY","index":26},{"value":0,"tweenMethod":"linearNone","tween":true,"target":13,"key":"scaleY","index":33}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":13,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":13,"label":null,"key":"alpha","index":6},{"value":0,"tweenMethod":"linearNone","tween":false,"target":13,"key":"alpha","index":21},{"value":0,"tweenMethod":"linearNone","tween":true,"target":13,"key":"alpha","index":25},{"value":1,"tweenMethod":"linearNone","tween":true,"target":13,"key":"alpha","index":26}]}},{"target":12,"keyframes":{"x":[{"value":517,"tweenMethod":"linearNone","tween":true,"target":12,"key":"x","index":0},{"value":517,"tweenMethod":"linearNone","tween":true,"target":12,"label":null,"key":"x","index":25},{"value":598,"tweenMethod":"linearNone","tween":true,"target":12,"key":"x","index":26}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.benchibaoma.GoUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.benchibaoma {
    export class StopUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":360,"x":640,"skin":"tongyong_ui/game_ui/tongyong/general/effect/ksyx/tu_d.png","scaleY":1,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":11},{"type":"Box","props":{"y":360,"x":461.1578947368421,"width":680,"height":150,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":15,"child":[{"type":"Image","props":{"y":73,"x":606.8,"skin":"tongyong_ui/game_ui/tongyong/general/effect/ksxz/tu_g.png","scaleY":1.35,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":13},{"type":"Image","props":{"y":64,"x":636,"skin":"tongyong_ui/game_ui/tongyong/general/effect/ksxz/tu_wb.png","scaleY":2,"scaleX":0,"anchorY":0.5,"anchorX":1,"alpha":1},"compId":14},{"type":"Image","props":{"y":75,"x":517,"skin":"tongyong_ui/game_ui/tongyong/general/effect/ksxz/tu_tz.png","anchorY":0.5,"anchorX":0.5},"compId":12}]}]}],"animations":[{"nodes":[{"target":11,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":11,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"label":null,"key":"scaleY","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":11,"key":"scaleY","index":32}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":31}]}},{"target":15,"keyframes":{"x":[{"value":-343,"tweenMethod":"linearNone","tween":true,"target":15,"key":"x","index":0},{"value":-74.33333333333331,"tweenMethod":"linearNone","tween":true,"target":15,"key":"x","index":1},{"value":456,"tweenMethod":"linearNone","tween":true,"target":15,"key":"x","index":6},{"value":463,"tweenMethod":"linearNone","tween":true,"target":15,"label":null,"key":"x","index":25},{"value":1438,"tweenMethod":"linearNone","tween":true,"target":15,"key":"x","index":33}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":0},{"value":0.3333333333333333,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":15,"label":null,"key":"alpha","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":33}]}},{"target":14,"keyframes":{"x":[{"value":636,"tweenMethod":"linearNone","tween":true,"target":14,"key":"x","index":0},{"value":636,"tweenMethod":"linearNone","tween":true,"target":14,"label":null,"key":"x","index":25},{"value":836,"tweenMethod":"linearNone","tween":true,"target":14,"key":"x","index":26}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":14,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":14,"label":null,"key":"scaleX","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"scaleX","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"label":null,"key":"scaleX","index":25},{"value":2,"tweenMethod":"linearNone","tween":true,"target":14,"key":"scaleX","index":26}]}},{"target":13,"keyframes":{"x":[{"value":403,"tweenMethod":"linearNone","tween":true,"target":13,"key":"x","index":0},{"value":403,"tweenMethod":"linearNone","tween":true,"target":13,"label":null,"key":"x","index":5},{"value":478,"tweenMethod":"linearNone","tween":true,"target":13,"key":"x","index":6},{"value":616,"tweenMethod":"linearNone","tween":false,"target":13,"key":"x","index":21},{"value":483,"tweenMethod":"linearNone","tween":true,"target":13,"key":"x","index":26}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":13,"key":"scaleY","index":0},{"value":1.35,"tweenMethod":"linearNone","tween":false,"target":13,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":13,"key":"scaleY","index":26},{"value":0,"tweenMethod":"linearNone","tween":true,"target":13,"key":"scaleY","index":33}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":13,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":13,"label":null,"key":"alpha","index":6},{"value":0,"tweenMethod":"linearNone","tween":false,"target":13,"key":"alpha","index":21},{"value":0,"tweenMethod":"linearNone","tween":true,"target":13,"key":"alpha","index":25},{"value":1,"tweenMethod":"linearNone","tween":true,"target":13,"key":"alpha","index":26}]}},{"target":12,"keyframes":{"x":[{"value":517,"tweenMethod":"linearNone","tween":true,"target":12,"key":"x","index":0},{"value":517,"tweenMethod":"linearNone","tween":true,"target":12,"label":null,"key":"x","index":25},{"value":598,"tweenMethod":"linearNone","tween":true,"target":12,"key":"x","index":26}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.benchibaoma.StopUI.uiView);
        }
    }
}
