
module ui.nqp.game_ui.benchibaoma {
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
		public ui_small_car:ui.nqp.game_ui.benchibaoma.component.GuangUI;
		public list_record:Laya.List;
		public main_player:ui.nqp.game_ui.benchibaoma.component.TouXiangUI;
		public btn_chip0:Laya.Button;
		public guang0:Laya.Image;
		public btn_chip1:Laya.Button;
		public guang1:Laya.Image;
		public btn_chip2:Laya.Button;
		public guang2:Laya.Image;
		public btn_chip3:Laya.Button;
		public guang3:Laya.Image;
		public btn_chip4:Laya.Button;
		public guang4:Laya.Image;
		public btn_repeat:Laya.Button;
		public seat0:ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI;
		public seat1:ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI;
		public seat2:ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI;
		public seat3:ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI;
		public seat4:ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI;
		public seat5:ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI;
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
		public box_time:ui.nqp.game_ui.tongyong.DaoJiShiUI;
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
		public btn_back:Laya.Button;
		public btn_spread:Laya.Button;
		public box_menu:Laya.Image;
		public btn_rule:Laya.Button;
		public btn_set:Laya.Button;
		public btn_zhanji:Laya.Button;
		public btn_qifu:Laya.Button;
		public btn_chong:ui.nqp.game_ui.benchibaoma.component.Effect_chongzhiUI;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1280,"height":720},"child":[{"type":"Image","props":{"y":-44.49999297973676,"x":60.50000351013165,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_qc1.png","skewX":0,"rotation":90,"anchorY":0.5,"anchorX":0.5}},{"type":"GuangShu","props":{"y":-196,"x":628,"scaleX":-1,"blendMode":"lighter","runtime":"ui.nqp.game_ui.benchibaoma.component.GuangShuUI"}},{"type":"Image","props":{"y":616.5000070202632,"x":72.50000351013165,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_qc4.png","anchorY":0.5,"anchorX":0.5}},{"type":"GuangShu","props":{"y":50,"x":-81,"scaleX":-1,"rotation":-90,"blendMode":"lighter","runtime":"ui.nqp.game_ui.benchibaoma.component.GuangShuUI"}},{"type":"Image","props":{"y":-44.49999297973676,"x":1196.5000035101316,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_qc3.png","rotation":180,"anchorY":0.5,"anchorX":0.5}},{"type":"GuangShu","props":{"y":-194,"x":635,"blendMode":"lighter","runtime":"ui.nqp.game_ui.benchibaoma.component.GuangShuUI"}},{"type":"Image","props":{"y":616.5000070202632,"x":1213.5000035101316,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_qc2.png","rotation":-90,"anchorY":0.5,"anchorX":0.5}},{"type":"GuangShu","props":{"y":351,"x":1022,"rotation":83,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.benchibaoma.component.GuangShuUI"}}]},{"type":"Box","props":{"y":3,"x":113,"var":"box_car"},"child":[{"type":"Box","props":{"y":2,"x":258,"width":63,"var":"box_che0","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_0","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":0,"x":338,"width":63,"var":"box_che1","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_1","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":1,"x":416,"width":63,"var":"box_che2","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_2","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":0,"x":495,"width":63,"var":"box_che3","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_3","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":1,"x":575,"width":63,"var":"box_che4","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_4","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":0,"x":656,"width":63,"var":"box_che5","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_5","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":1,"x":737,"width":63,"var":"box_che6","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_6","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":15,"x":819,"width":63,"var":"box_che7","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_7","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":49,"x":887,"width":63,"var":"box_che8","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_8","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":107,"x":939,"width":63,"var":"box_che9","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_9","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":175,"x":976,"width":63,"var":"box_che10","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_10","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":255,"x":986,"width":63,"var":"box_che11","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_11","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":330,"x":975,"width":63,"var":"box_che12","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_12","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":395,"x":941,"width":63,"var":"box_che13","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_13","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":453,"x":890,"width":63,"var":"box_che14","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_14","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":490,"x":823,"width":63,"var":"box_che15","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_15","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":508,"x":743,"width":63,"var":"box_che16","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_16","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":508,"x":659,"width":63,"var":"box_che17","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_17","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":508,"x":579,"width":63,"var":"box_che18","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_18","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":508,"x":498,"width":63,"var":"box_che19","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_19","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":508,"x":417,"width":63,"var":"box_che20","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_20","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":508,"x":336,"width":63,"var":"box_che21","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_21","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":508,"x":254,"width":63,"var":"box_che22","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_22","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":497,"x":173,"width":63,"var":"box_che23","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_23","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":463,"x":102,"width":63,"var":"box_che24","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_24","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":408,"x":46,"width":63,"var":"box_che25","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_25","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":337,"x":12,"width":63,"var":"box_che26","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_26","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":261,"x":0,"width":63,"var":"box_che27","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_27","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":176,"x":13,"width":63,"var":"box_che28","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_28","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":101,"x":51,"width":63,"var":"box_che29","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"var":"img_che_29","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":43,"x":107,"width":63,"var":"box_che30","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_hgq.png"}},{"type":"Image","props":{"var":"img_che_30","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":12,"x":179,"width":63,"var":"box_che31","height":63},"child":[{"type":"Image","props":{"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lgq.png"}},{"type":"Image","props":{"y":32,"x":32,"var":"img_che_31","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":0,"x":0,"width":1280,"height":720},"child":[{"type":"Box","props":{"y":92,"x":384,"width":156,"var":"box_small_car","rotation":0,"pivotY":21,"pivotX":112,"height":44},"child":[{"type":"Image","props":{"y":0,"x":80,"var":"img_da_deng","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_qc.png"}},{"type":"Guang","props":{"y":-3,"x":-2,"var":"ui_small_car","blendMode":"lighter","runtime":"ui.nqp.game_ui.benchibaoma.component.GuangUI"}}]}]},{"type":"Box","props":{"y":600,"width":736,"height":51,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":26,"width":739,"skin":"tongyong_ui/game_ui/tongyong/general/tu_d7.png","sizeGrid":"16,23,23,22","centerX":2,"anchorY":0.5,"anchorX":0.5,"alpha":0.75}},{"type":"List","props":{"y":7,"x":8,"width":728,"var":"list_record","spaceX":11,"repeatY":1,"repeatX":15,"height":38},"child":[{"type":"RecordItem","props":{"renderType":"render","runtime":"ui.nqp.game_ui.benchibaoma.component.RecordItemUI"}}]}]},{"type":"Box","props":{"x":641,"width":948,"height":147,"bottom":-4,"anchorY":1,"anchorX":0.5},"child":[{"type":"TouXiang","props":{"var":"main_player","runtime":"ui.nqp.game_ui.benchibaoma.component.TouXiangUI"}},{"type":"Box","props":{"y":99,"width":679,"height":113,"centerX":-10,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":54.5,"x":57,"var":"btn_chip0","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm1.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"50","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":52,"x":59,"var":"guang0","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":54.5,"x":178,"var":"btn_chip1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm2.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"100","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":52,"x":60,"var":"guang1","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":54.5,"x":300,"var":"btn_chip2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm3.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"200","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":53,"x":60,"var":"guang2","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":54.5,"x":421,"var":"btn_chip3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm4.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"500","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":52,"x":60,"var":"guang3","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":54.5,"x":539,"var":"btn_chip4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm5.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"1000","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":52,"x":59,"var":"guang4","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Button","props":{"y":96,"var":"btn_repeat","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_xz.png","sizeGrid":"0,0,0,0","labelStrokeColor":"#0f5b08","labelStroke":4,"labelSize":28,"labelColors":"#ffffff","labelBold":true,"centerX":326,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":115,"x":14},"child":[{"type":"TouXiangWz","props":{"var":"seat0","runtime":"ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI"}},{"type":"TouXiangWz","props":{"y":171,"var":"seat1","runtime":"ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI"}},{"type":"TouXiangWz","props":{"y":340,"var":"seat2","runtime":"ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI"}}]},{"type":"Box","props":{"y":115,"x":1163},"child":[{"type":"TouXiangWz","props":{"var":"seat3","runtime":"ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI"}},{"type":"TouXiangWz","props":{"y":171,"var":"seat4","runtime":"ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI"}},{"type":"TouXiangWz","props":{"y":340,"var":"seat5","runtime":"ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI"}}]},{"type":"Box","props":{"y":114,"x":234,"width":808,"height":352},"child":[{"type":"Image","props":{"y":0,"x":2,"var":"kuang0","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx4.png","blendMode":"lighter"}},{"type":"Image","props":{"y":0,"x":202,"var":"kuang1","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx3.png","blendMode":"lighter"}},{"type":"Image","props":{"y":0,"x":404,"var":"kuang2","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx3.png","blendMode":"lighter"}},{"type":"Image","props":{"y":0,"x":805,"var":"kuang3","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx4.png","scaleX":-1,"blendMode":"lighter"}},{"type":"Image","props":{"y":179,"x":0,"var":"kuang4","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx2.png","blendMode":"lighter"}},{"type":"Image","props":{"y":180,"x":202,"var":"kuang5","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx1.png","blendMode":"lighter"}},{"type":"Image","props":{"y":180,"x":404,"var":"kuang6","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx1.png","blendMode":"lighter"}},{"type":"Image","props":{"y":179,"x":806,"var":"kuang7","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx2.png","scaleX":-1,"blendMode":"lighter"}},{"type":"Box","props":{"y":10,"x":10,"width":190,"var":"area0","height":160}},{"type":"Box","props":{"y":10,"x":209,"width":190,"var":"area1","height":160}},{"type":"Box","props":{"y":10,"x":410,"width":190,"var":"area2","height":160}},{"type":"Box","props":{"y":10,"x":608,"width":190,"var":"area3","height":160}},{"type":"Box","props":{"y":185,"x":10,"width":190,"var":"area4","height":160}},{"type":"Box","props":{"y":185,"x":209,"width":190,"var":"area5","height":160}},{"type":"Box","props":{"y":185,"x":410,"width":190,"var":"area6","height":160}},{"type":"Box","props":{"y":185,"x":608,"width":190,"var":"area7","height":160}}]},{"type":"Box","props":{"y":311,"x":640,"width":241,"var":"box_info","height":116,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"DaoJiShi","props":{"y":-83,"x":116,"var":"box_time","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.tongyong.DaoJiShiUI"}},{"type":"Box","props":{"y":-32,"x":120,"width":231,"var":"box_tip","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":13.5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_h.png","scaleY":0.7,"scaleX":0.6,"centerX":2,"anchorY":0.5,"anchorX":0.5,"alpha":0.5}},{"type":"Clip","props":{"y":0,"x":115,"var":"clip_status","skin":"tongyong_ui/game_ui/tongyong/general/clip_zhuangtai2.png","clipY":3,"anchorX":0.5}},{"type":"Text","props":{"y":2,"x":35,"wordWrap":true,"width":159,"var":"txt_status","text":"正在进入房间","strokeColor":"#00ffc1","leading":6,"height":22,"fontSize":20,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":-123,"x":-226},"child":[{"type":"Text","props":{"y":132,"x":14.600000000000001,"width":91,"var":"txt_main_0","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":-1,"x":14.600000000000001,"width":91,"var":"txt_total_0","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":-123,"x":-29},"child":[{"type":"Text","props":{"y":133,"x":0,"width":91,"var":"txt_main_1","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":-1,"x":0,"width":91,"var":"txt_total_1","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":-123,"x":171},"child":[{"type":"Text","props":{"y":132,"x":0,"width":91,"var":"txt_main_2","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":-1,"x":0,"width":91,"var":"txt_total_2","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":-123,"x":356},"child":[{"type":"Text","props":{"y":132,"x":0,"width":91,"var":"txt_main_3","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":-1,"x":0,"width":91,"var":"txt_total_3","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":48,"x":-222},"child":[{"type":"Text","props":{"y":126,"x":11,"width":91,"var":"txt_main_4","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":2,"x":11,"width":91,"var":"txt_total_4","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":48,"x":-29},"child":[{"type":"Text","props":{"y":125,"x":0,"width":91,"var":"txt_main_5","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":2,"x":0,"width":91,"var":"txt_total_5","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":48,"x":171},"child":[{"type":"Text","props":{"y":126,"x":0,"width":91,"var":"txt_main_6","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":2,"x":0,"width":91,"var":"txt_total_6","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":48,"x":356},"child":[{"type":"Text","props":{"y":125,"x":0,"width":91,"var":"txt_main_7","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":0,"x":0,"width":91,"var":"txt_total_7","text":"0/0","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Image","props":{"y":20,"x":-103,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","scaleY":0.75,"scaleX":0.75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":96,"width":37,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bsj2.png","scaleY":0.75,"scaleX":0.75,"height":37,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":140,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bc2.png","scaleY":0.75,"scaleX":0.75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":339,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bm2.png","scaleY":0.75,"scaleX":0.75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":186,"x":-105,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb2.png","scaleY":0.6,"scaleX":0.6,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":186,"x":94,"width":37,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bsj2.png","scaleY":0.6,"scaleX":0.6,"height":37,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":186,"x":138,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bc2.png","scaleY":0.6,"scaleX":0.6,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":186,"x":337,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bm2.png","scaleY":0.6,"scaleX":0.6,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":657,"x":70,"var":"btn_playerList","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qtwj.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":67,"x":-23,"wordWrap":true,"width":132,"var":"txt_online","text":"在线200人","strokeColor":"#3b1211","stroke":4,"leading":6,"height":26,"fontSize":20,"color":"#ffffff","align":"center"}}]}]},{"type":"Button","props":{"var":"btn_back","top":11,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh1.png","right":16,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_spread","top":11,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cd.png","left":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"width":180,"var":"box_menu","top":0,"skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","left":10,"height":231},"child":[{"type":"Image","props":{"y":77,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":153,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":22,"x":14,"var":"btn_rule","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gz.png"}},{"type":"Button","props":{"y":162,"x":14,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sz.png"}},{"type":"Button","props":{"y":92,"x":14,"var":"btn_zhanji","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_zj.png"}}]},{"type":"Button","props":{"var":"btn_qifu","top":11,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qf.png","right":92,"anchorY":0.5,"anchorX":0.5}},{"type":"Effect_chongzhi","props":{"var":"btn_chong","right":10,"bottom":0,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.benchibaoma.component.Effect_chongzhiUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.benchibaoma.component.GuangShuUI",ui.nqp.game_ui.benchibaoma.component.GuangShuUI);
			View.regComponent("ui.nqp.game_ui.benchibaoma.component.GuangUI",ui.nqp.game_ui.benchibaoma.component.GuangUI);
			View.regComponent("ui.nqp.game_ui.benchibaoma.component.RecordItemUI",ui.nqp.game_ui.benchibaoma.component.RecordItemUI);
			View.regComponent("ui.nqp.game_ui.benchibaoma.component.TouXiangUI",ui.nqp.game_ui.benchibaoma.component.TouXiangUI);
			View.regComponent("ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI",ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI);
			View.regComponent("ui.nqp.game_ui.tongyong.DaoJiShiUI",ui.nqp.game_ui.tongyong.DaoJiShiUI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.nqp.game_ui.benchibaoma.component.Effect_chongzhiUI",ui.nqp.game_ui.benchibaoma.component.Effect_chongzhiUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.benchibaoma.BenChiBaoMaUI.uiView);
        }
    }
}

module ui.nqp.game_ui.benchibaoma {
    export class BenChiBaoMa_GuiZeUI extends View {
		public btn_close:Laya.Button;
		public panel_rule:Laya.Panel;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":826,"height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-42,"x":-39,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk2.png"}},{"type":"Button","props":{"y":64,"x":5,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_wjjs.png"}},{"type":"Image","props":{"y":18,"x":415,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":16,"x":818,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_tuichu.png","anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":69,"x":222,"width":734,"var":"panel_rule","height":403},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"benchibaoma_ui/game_ui/benchibaoma/guize_1.png","height":633}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.benchibaoma.BenChiBaoMa_GuiZeUI.uiView);
        }
    }
}

module ui.nqp.game_ui.benchibaoma {
    export class BenChiBaoMa_HUDUI extends View {
		public view_hud:ui.nqp.game_ui.tongyong.HudUI;
		public box_right:Laya.Box;
		public img_room0:Laya.Box;
		public clip_xianhong0:Laya.Clip;
		public img_room1:Laya.Box;
		public clip_xianhong1:Laya.Clip;
		public img_room2:Laya.Box;
		public clip_xianhong2:Laya.Clip;
		public img_room3:Laya.Box;
		public clip_xianhong3:Laya.Clip;
		public btn_join:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_zjh.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"y":0,"var":"view_hud","top":0,"runtime":"ui.nqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"width":1281,"skewY":0,"right":0,"mouseThrough":true,"left":0,"height":720,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":349,"width":1293,"var":"box_right","height":465,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":90,"width":301,"var":"img_room0","right":988,"height":286},"child":[{"type":"SkeletonPlayer","props":{"y":143,"x":150,"url":"benchibaoma_ui/game_ui/benchibaoma/sk/bcbm_0.sk"}},{"type":"Clip","props":{"y":197,"x":157,"var":"clip_xianhong0","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png","index":0,"clipX":10}}]},{"type":"Box","props":{"y":90,"width":331,"var":"img_room1","right":650,"height":286},"child":[{"type":"SkeletonPlayer","props":{"y":143,"x":166,"url":"benchibaoma_ui/game_ui/benchibaoma/sk/bcbm_1.sk"}},{"type":"Clip","props":{"y":196,"x":178,"var":"clip_xianhong1","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu2.png","index":0,"clipX":10}}]},{"type":"Box","props":{"y":90,"width":301,"var":"img_room2","right":343,"height":286},"child":[{"type":"SkeletonPlayer","props":{"y":142,"x":151,"url":"benchibaoma_ui/game_ui/benchibaoma/sk/bcbm_2.sk"}},{"type":"Clip","props":{"y":197,"x":156,"var":"clip_xianhong2","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu1.png","clipX":10}}]},{"type":"Box","props":{"y":13,"width":323,"var":"img_room3","right":13,"height":363},"child":[{"type":"SkeletonPlayer","props":{"y":218,"x":161,"url":"benchibaoma_ui/game_ui/benchibaoma/sk/bcbm_3.sk"}},{"type":"Clip","props":{"y":274,"x":165,"var":"clip_xianhong3","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu.png","index":1,"clipX":10}}]}]}]},{"type":"Image","props":{"top":10,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_wz.png","scaleY":1,"scaleX":1,"centerX":200,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":668,"x":640,"var":"btn_join","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_ksjr.png","centerX":0,"bottom":10,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.tongyong.HudUI",ui.nqp.game_ui.tongyong.HudUI);
			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.nqp.game_ui.benchibaoma.BenChiBaoMa_HUDUI.uiView);
        }
    }
}

module ui.nqp.game_ui.benchibaoma.component {
    export class Effect_chongzhiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":246,"height":94},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Button","props":{"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_chongzhi.png"}},{"type":"Box","props":{"y":0,"x":0,"blendMode":"lighter"},"child":[{"type":"Button","props":{"y":0,"x":12,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_chizhizz.png"}},{"type":"Image","props":{"x":79.16666666666666,"skin":"tongyong_ui/game_ui/tongyong/general/tu_czsg.png","renderType":"mask"},"compId":3}]}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"x":[{"value":-173,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":183,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":40}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.benchibaoma.component.Effect_chongzhiUI.uiView);
        }
    }
}

module ui.nqp.game_ui.benchibaoma.component {
    export class GuangUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":93,"height":47},"child":[{"type":"Image","props":{"y":-19,"x":-5,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gx.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.benchibaoma.component.GuangUI.uiView);
        }
    }
}

module ui.nqp.game_ui.benchibaoma.component {
    export class GuangShuUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":582,"height":626},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_gs.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":313,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0}],"x":[{"value":291,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0}],"blendMode":[{"value":null,"tweenMethod":"linearNone","tween":false,"target":2,"key":"blendMode","index":0}],"anchorY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorY","index":0}],"anchorX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorX","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.benchibaoma.component.GuangShuUI.uiView);
        }
    }
}

module ui.nqp.game_ui.benchibaoma.component {
    export class RecordItemUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public img_icon:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":38,"height":38},"child":[{"type":"Image","props":{"y":19,"x":19,"var":"img_icon","skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bm2.png","anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":1},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":2,"keyframes":{"y":[{"value":45,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0}],"x":[{"value":43,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":20}],"anchorY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorY","index":0}],"anchorX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorX","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":20}]}}],"name":"ani2","id":2,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.benchibaoma.component.RecordItemUI.uiView);
        }
    }
}

module ui.nqp.game_ui.benchibaoma.component {
    export class TouXiangUI extends View {
		public img_icon:Laya.Image;
		public img_txk:Laya.Image;
		public txt_name:laya.display.Text;
		public txt_money:laya.display.Text;
		public clip_money:Laya.Clip;
		public img_qifu:Laya.Image;
		public qifu_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":137},"child":[{"type":"Box","props":{"y":1,"x":1,"width":99,"height":136},"child":[{"type":"Image","props":{"y":71,"x":-16,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png"}},{"type":"Image","props":{"y":32,"x":49,"width":78,"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","height":78,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-15,"x":2,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95}},{"type":"Image","props":{"y":79,"x":-8,"width":114,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","height":24}},{"type":"Image","props":{"y":77,"x":-19,"skin":"tongyong_ui/game_ui/tongyong/general/icon_money.png"}},{"type":"Text","props":{"y":106,"x":-3,"wordWrap":true,"width":101,"var":"txt_name","text":"玩家名字","leading":6,"height":21,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":80,"x":0,"wordWrap":true,"width":110,"var":"txt_money","text":"000000.00","leading":6,"height":22,"fontSize":20,"color":"#f8ea5e","align":"center"}},{"type":"Clip","props":{"y":5,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_num1.png","clipX":11,"centerX":0}},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}},{"type":"Image","props":{"y":80,"x":50,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"anchorY":1,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.benchibaoma.component.TouXiangUI.uiView);
        }
    }
}

module ui.nqp.game_ui.benchibaoma.component {
    export class TouXiangWzUI extends View {
		public img_icon:Laya.Image;
		public img_txk:Laya.Image;
		public txt_money:laya.display.Text;
		public txt_name:laya.display.Text;
		public clip_money:Laya.Clip;
		public img_qifu:Laya.Image;
		public qifu_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":137},"child":[{"type":"Box","props":{"y":1,"x":1,"width":99,"height":136},"child":[{"type":"Image","props":{"y":73,"x":-15,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png"}},{"type":"Image","props":{"y":31,"x":50,"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/general/tu_weizi.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-16,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95,"centerX":0}},{"type":"Text","props":{"y":106,"x":0,"wordWrap":true,"width":99,"var":"txt_money","text":"点击入座","leading":6,"height":21,"fontSize":20,"color":"#f8ea5e","align":"center"}},{"type":"Text","props":{"y":82,"x":0,"wordWrap":true,"width":101,"var":"txt_name","text":"玩家名字","leading":6,"height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Clip","props":{"y":5,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_num1.png","clipX":11,"centerX":0}},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}},{"type":"Image","props":{"y":63,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"centerX":0,"anchorY":1,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.benchibaoma.component.TouXiangWzUI.uiView);
        }
    }
}

module ui.nqp.game_ui.benchibaoma {
    export class GoUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":350,"x":650,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_0.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":360,"x":957.4016,"skin":"tongyong_ui/game_ui/tongyong/general/tu_xz.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":2},{"type":"Image","props":{"y":360,"x":317.5984,"skin":"tongyong_ui/game_ui/tongyong/general/tu_ks0.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":4},{"type":"Image","props":{"y":360,"x":637,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","centerY":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3},{"type":"Image","props":{"y":251,"x":385,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":9},{"type":"Image","props":{"y":436,"x":916,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":10}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"key":"x","index":0},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":40},{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}},{"target":4,"keyframes":{"x":[{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"key":"x","index":0},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":10},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":40},{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"alpha","index":48}]}},{"target":3,"keyframes":{"x":[{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":40},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":48}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":13},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":48}]}},{"target":7,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":46}],"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":40},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":45},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":46}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":40},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":45},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":46}]}},{"target":9,"keyframes":{"y":[{"value":251,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0}],"x":[{"value":385,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":4},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":10},{"value":937,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":30}]}},{"target":10,"keyframes":{"y":[{"value":436,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":4},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":10},{"value":425,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":30}],"x":[{"value":916,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":4},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":10},{"value":343,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.benchibaoma.GoUI.uiView);
        }
    }
}

module ui.nqp.game_ui.benchibaoma {
    export class JieSuanUI extends View {
		public ani2:Laya.FrameAnimation;
		public img_js_0:Laya.Image;
		public img_js_1:Laya.Image;
		public img_js_2:Laya.Image;
		public img_js_3:Laya.Image;
		public txt_bet_0:laya.display.Text;
		public txt_bet_1:laya.display.Text;
		public txt_bet_2:laya.display.Text;
		public txt_bet_3:laya.display.Text;
		public txt_bet_4:laya.display.Text;
		public txt_bet_5:laya.display.Text;
		public txt_bet_6:laya.display.Text;
		public txt_bet_7:laya.display.Text;
		public txt_total:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":210,"x":636,"var":"img_js_0","skin":"tongyong_ui/game_ui/tongyong/general/tu_gs.png","rotation":360,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":44},{"type":"Image","props":{"width":673,"skin":"tongyong_ui/game_ui/tongyong/dating/game_popout_bg.png","height":396,"centerY":0,"centerX":0}},{"type":"Image","props":{"var":"img_js_1","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png","centerY":-207,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_js_2","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_js.png","centerY":-191,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":209,"x":626,"var":"img_js_3","skin":"benchibaoma_ui/game_ui/benchibaoma/jiesuan_2.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":6},{"type":"Image","props":{"y":317,"x":509,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":500,"x":542,"wordWrap":false,"width":102,"text":"输赢合计：","leading":6,"height":20,"fontSize":20,"color":"#fffbb5","align":"center"}},{"type":"Image","props":{"y":254,"x":509,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Image","props":{"y":254,"x":803,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Image","props":{"y":318,"x":803,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Image","props":{"y":244,"x":634,"width":4,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_d6.png","height":235}},{"type":"Image","props":{"y":423,"x":355,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_d5.png"}},{"type":"Image","props":{"y":361,"x":355,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_d5.png"}},{"type":"Image","props":{"y":300,"x":355,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_d5.png"}},{"type":"Image","props":{"y":372,"x":509,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Image","props":{"y":373,"x":803,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Image","props":{"y":495,"x":632,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Image","props":{"y":484,"x":355,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_d5.png"}},{"type":"Image","props":{"y":439,"x":508,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":260,"x":519,"wordWrap":true,"width":100,"var":"txt_bet_0","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"right"}},{"type":"Text","props":{"y":323,"x":519,"wordWrap":true,"width":101,"var":"txt_bet_1","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"right"}},{"type":"Text","props":{"y":378,"x":519,"wordWrap":true,"width":98,"var":"txt_bet_2","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"right"}},{"type":"Text","props":{"y":445,"x":518,"wordWrap":true,"width":98,"var":"txt_bet_3","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"right"}},{"type":"Text","props":{"y":260,"x":813,"wordWrap":true,"width":98,"var":"txt_bet_4","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"right"}},{"type":"Text","props":{"y":324,"x":813,"wordWrap":true,"width":97,"var":"txt_bet_5","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"right"}},{"type":"Text","props":{"y":379,"x":813,"wordWrap":true,"width":97,"var":"txt_bet_6","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"right"}},{"type":"Text","props":{"y":446,"x":812,"wordWrap":true,"width":97,"var":"txt_bet_7","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"right"}},{"type":"Text","props":{"y":501,"x":642,"wordWrap":true,"width":100,"var":"txt_total","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":440,"x":802,"width":117,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Image","props":{"y":393,"x":387,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bc.png","scaleY":0.55,"scaleX":0.55,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":454,"x":386,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bm.png","scaleY":0.55,"scaleX":0.55,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":332,"x":386,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bsj.png","scaleY":0.55,"scaleX":0.55,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":271,"x":386,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb.png","scaleY":0.55,"scaleX":0.55,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":392,"x":678,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bc.png","scaleY":0.4,"scaleX":0.4,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":453,"x":677,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bm.png","scaleY":0.4,"scaleX":0.4,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":331,"x":677,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_bsj.png","scaleY":0.4,"scaleX":0.4,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":270,"x":677,"skin":"benchibaoma_ui/game_ui/benchibaoma/tu_lb.png","scaleY":0.4,"scaleX":0.4,"anchorY":0.5,"anchorX":0.5}}]}],"animations":[{"nodes":[{"target":44,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":100}]}},{"target":6,"keyframes":{"y":[{"value":168,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":0},{"value":168,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":42}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.benchibaoma.JieSuanUI.uiView);
        }
    }
}

module ui.nqp.game_ui.benchibaoma {
    export class StopUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":350,"x":650,"visible":false,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_0.png","scaleY":0.1,"scaleX":2,"anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":360,"x":1000,"skin":"tongyong_ui/game_ui/tongyong/general/tu_xz.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":2},{"type":"Image","props":{"y":360,"x":275,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tz0.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":4},{"type":"Image","props":{"y":360,"x":637,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","centerY":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3},{"type":"Image","props":{"y":251,"x":937,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":9},{"type":"Image","props":{"y":425,"x":343,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":10}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"key":"x","index":0},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":40},{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}},{"target":4,"keyframes":{"x":[{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"key":"x","index":0},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":10},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":40},{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"alpha","index":48}]}},{"target":3,"keyframes":{"x":[{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":40},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":48}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":13},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":48}]}},{"target":7,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":46}],"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":40},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":45},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":46}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":40},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":45},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":46}]}},{"target":9,"keyframes":{"y":[{"value":251,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0}],"x":[{"value":385,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":4},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":10},{"value":937,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":30}]}},{"target":10,"keyframes":{"y":[{"value":436,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":4},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":10},{"value":425,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":30}],"x":[{"value":916,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":4},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":10},{"value":343,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.benchibaoma.StopUI.uiView);
        }
    }
}
