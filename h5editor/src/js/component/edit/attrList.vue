<style>
	.attrList{height: 100%;display: flex;flex-direction: column;}
	.attrList .main{display: flex;flex-direction: column;flex: 1;}
	.attrList .main .nav_top_btn{box-sizing: border-box;background: #f7f7f7;    border-bottom: 1px solid #ddd;}
	/*transition: all ease 0.2s;-webkit-transition: all ease 0.2s;*/
	.attrList .main .nav_top_btn li{display: inline-block;vertical-align: top;background: #F7F7F7;text-align: center;line-height: 28px;color: #76838f;font-size: 12px;min-width: 50px;border-top-right-radius: 2px;border-top-left-radius: 2px;cursor: pointer;margin: 0 1px;margin-bottom: -2px;float:left;}
	.attrList .main .nav_top_btn li:hover{background: #ddd;color: #666;}
	.attrList .main .nav_top_btn li.active{background: #FFF;color: #666;    border: 1px solid #ddd;border-bottom-color: transparent;}
	.attrList .main .nav_top_btn li.active:hover{background: #FFF;color: #666;    border: 1px solid #ddd;border-bottom-color: transparent;}

	.attrList .main .attr_main{flex: 1;height: 100%;overflow-y: auto;background: #fff;}
	.attrList .main .attr_main .group{margin-top: 10px;position: relative;z-index: 2;overflow: hidden;}
	.attrList .main .attr_main .group>li{position: relative;}
	.attrList .main .attr_main .group>li .group_head{font-size: 14px;color: #333;padding: 0 20px;border-bottom: none;position: relative;cursor: pointer;position: relative;z-index: 2;}
	/*.attrList .main .attr_main .group>li .group_head:hover{background: #f6f9fa;}*/
	/*.attrList .main .attr_main .group>li .group_head.active{background: #f6f9fa;}*/
	.attrList .main .attr_main .group>li .group_head h4{display: inline-block;vertical-align: middle;line-height: 28px;font-weight: normal;}
	.attrList .main .attr_main .group>li .group_head .caret{display: none;}
	.attrList .main .attr_main .group>li .deleteAni{position: absolute;display: block;color: #ff5151;font-size: 34px;top: 4px;right: 40px;z-index: 9;}
	.attrList .main .attr_main .group>li .deleteAni.close{opacity: 0.5;}
	.attrList .main .attr_main .group>li .deleteAni.close:hover{opacity: 1;}
	.attrList .main .attr_main .group>li .group_main{background: #fff;position: relative;}
	.attrList .main .attr_main .group>li .group_main>ul{padding: 0 20px 10px;}
	.attrList .main .attr_main .group>li .group_main>ul>li{height: 30px;display: flex;flex: none;justify-content: space-between;align-items: center;margin-bottom: 5px;background: #f9f9f9;}
	.attrList .main .attr_main .group>li .group_main>ul>li >span{padding: 5px 8px;border: 1px solid #ccd5db;border-right: 0;font-size: 12px;color: #76838f;display: inline-block;vertical-align: middle;text-align: left;}
	.attrList .main .attr_main .group>li .group_main>ul>li select{height: 28px;border:1px solid #ccd5db;flex: 1;    background: #fafafa;}
	.attrList .main .attr_main .group>li .group_main>ul>li select:focus{border-color:#4cc0c1;}
	select,select:focus{-webkit-appearance: none;box-shadow: none;    appearance: none;  outline:none;    padding: 0 10px;}
	.attrList .main .attr_main .group>li .group_main>ul>li input{border: 1px solid #ccd5db;border: none;padding: 0;margin: 0;box-shadow: none;display: inline-block;vertical-align: middle;box-sizing: border-box;transition: all ease 0.2s;-webkit-transition: all ease 0.2s;}
	.attrList .main .attr_main .group>li .group_main>ul>li input[type="text"]:focus{border: 1px solid #01d7b2;}
	.attrList .main .attr_main .group>li .group_main>ul>li input[type="number"]:focus{border: 1px solid #01d7b2;}
	.attrList .main .attr_main .group>li .group_main>ul>li input[type="color"]{height: 22px;}
	.attrList .main .attr_main .group>li .group_main>ul>li input[type="text"]{width: 30px;border-left: 1px solid #ccd5db;height: 30px;line-height: 30px;font-size: 12px;color: #76838f;padding: 0 5px;}
	.attrList .main .attr_main .group>li .group_main>ul>li input[type="range"]{width: 100%;height: 22px;}
	.attrList .main .attr_main .group>li .group_main>ul>li>*:last-child{border-right:1px solid #ccd5db}

	.attrList .main .attr_main .group>li .group_main>ul>li >span.ctner-range{    padding: 2px 8px;flex: 1;}
	.attrList .main .attr_main .group>li .group_main>ul>li input[type="number"]{width: 30px;border-left: 1px solid #ccd5db;height: 30px;line-height: 30px;font-size: 12px;color: #76838f;padding: 0 0 0 3px;}
	.attrList .main .attr_main .group>li .group_main>ul>li input[type="number"]:disabled{cursor: not-allowed;}
	.attrList .main .attr_main .group>li .group_main>ul>li input[type="number"].range-value{    border: 1px solid #ccd5db;height: 28px;line-height: 28px;width: 45px;}

	.attrList .main .attr_main .group>li .group_main>ul>li select{display: inline-block;vertical-align: middle;width: 145px;}
	.attrList .main .attr_main .group>li .group_main>ul>li label{font-size: 12px;margin-right: 10px;line-height: 38px;color: #76838f;display: inline-block;vertical-align: middle;}
	::-webkit-color-swatch-wrapper {background-color: #fff;padding: 0;}
	::-webkit-color-swatch {border: none;}
/*	input[type=range]::-webkit-slider-thumb{margin-top: -3.6px;}
	input[type=range]::-webkit-slider-runnable-track{width: 100%;height: 8.4px;cursor: pointer;box-shadow: 0 0 3px rgba(0,0,0,0.7);background: #f7f7f7;border-radius: 1px;border: none;outline: none;}*/
	input[type=range]:focus{outline: none;}
	.attrList .main .attr_main .ani_btn{font-size: 0;}
	.attrList .main .attr_main .ani_btn li{display: inline-block;vertical-align: middle;font-size: 12px;color: #fff;padding: 5px 15px;margin: 0 0px 0 10px;cursor: pointer;border-radius: 1px;transition: all ease 0.2s;-webkit-transition: all ease 0.2s;}
	.attrList .main .attr_main .ani_btn li:first-child{background: rgba(1,215,178,1);}
	.attrList .main .attr_main .ani_btn li:first-child:hover{background: rgba(1,215,178,0.7);}
	.attrList .main .attr_main .ani_btn li:last-child{background: rgba(8,161,239,1);}
	.attrList .main .attr_main .ani_btn li:last-child:hover{background: rgba(8,161,239,0.7);}
	.item_id{font-size: 14px;line-height: 28px;width: 100%;text-align: center;color: #76838f;background: #F7F7F7;}
	.item_id span{color: #01d7b2;}

</style>
<template>
	<!--v-show="checkedItems.length == 0"-->
	<div class="side_con right" transition="fromRight" style="display:block;">
		<div class="item attrList">
			<div class="head">元素属性{{checkedItemDataOnlyOne.id}}</div>
			<div class="main">
				<ul class="nav_top_btn">
					<li :class="{'active':nav_top_btn == 0}" @click="this.nav_top_btn=0">编辑</li>
					<li :class="{'active':nav_top_btn == 1}" @click="this.nav_top_btn=1">外观</li>
					<li :class="{'active':nav_top_btn == 2}" @click="this.nav_top_btn=2">动画</li>
					<li :class="{'active':nav_top_btn == 3}" @click="this.nav_top_btn=3">事件</li>
				</ul>
				<div class="attr_main" v-show="nav_top_btn == 0">
					<ul class="group">
						<li>
							<div class="group_head" :class="{'active':group_index === 0}" @click="group_index == 0 ? group_index = null : group_index = 0">
								<h4>格式</h4>
							</div>
							<div class="group_main" >
								<ul>
									<li style-attr="fontFamily">
										<span>字体</span>
										<span class="sui-dropdown dropdown-bordered" style="padding:0;border:0;padding: 0;flex: 1;height: 29px;line-height: 22px;">
											<span class="dropdown-inner " style="border-radius:0;">
												<a role="button" data-toggle="dropdown" href="javascript:void(0);" class="dropdown-toggle"><i class="caret"></i><span>默认字体</span></a>
						  						<ul role="menu" aria-labelledby="drop1" class="sui-dropdown-menu">
													<li role="presentation" ><a role="menuitem" tabindex="-1"  @click="setStyleDirect($event,'string','','\'Helvetica Neue\', Helvetica, STHeiTi, sans-serif')" href="javascript:void(0);" style="font-family: 'Helvetica Neue', Helvetica, STHeiTi, sans-serif;" >默认字体</a></li>
													<li role="presentation" ><a role="menuitem" tabindex="-1"  @click="setStyleDirect($event,'string','','FZHei-B01S')" href="javascript:void(0);" style="font-family: 'FZHei-B01S';" >方正黑体简体</a></li>
													<li role="presentation" ><a role="menuitem" tabindex="-1"  @click="setStyleDirect($event,'string','','FZKai-Z03S')" href="javascript:void(0);" style="font-family: 'FZKai-Z03S';" >方正楷体简体</a></li>
													<li role="presentation" ><a role="menuitem" tabindex="-1"  @click="setStyleDirect($event,'string','','FZShuSong-Z01S')" href="javascript:void(0);" style="font-family: 'FZShuSong-Z01S';" >方正书宋简体</a></li>
													<li role="presentation" ><a role="menuitem" tabindex="-1"  @click="setStyleDirect($event,'string','','FZFangSong-Z02S')" href="javascript:void(0);" style="font-family: 'FZFangSong-Z02S';" >方正仿宋简体</a></li>
													<li role="presentation" ><a role="menuitem" tabindex="-1"  @click="setStyleDirect($event,'string','','NotoSansSC-Thin')" href="javascript:void(0);" style="font-family: 'NotoSansSC-Thin';" >思源极细体</a></li>
													<li role="presentation" ><a role="menuitem" tabindex="-1"  @click="setStyleDirect($event,'string','','NotoSansSC-Light')" href="javascript:void(0);" style="font-family: 'NotoSansSC-Light';" >思源细体</a></li>
													<li role="presentation" ><a role="menuitem" tabindex="-1"  @click="setStyleDirect($event,'string','','NotoSansSC-DemiLight')" href="javascript:void(0);" style="font-family: 'NotoSansSC-DemiLight';" >思源正常</a></li>
													<li role="presentation" ><a role="menuitem" tabindex="-1"  @click="setStyleDirect($event,'string','','NotoSansSC-Regular')" href="javascript:void(0);" style="font-family: 'NotoSansSC-Regular';" >思源常规</a></li>
													<li role="presentation" ><a role="menuitem" tabindex="-1"  @click="setStyleDirect($event,'string','','NotoSansSC-Medium')" href="javascript:void(0);" style="font-family: 'NotoSansSC-Medium';" >思源中等粗体</a></li>
													<li role="presentation" ><a role="menuitem" tabindex="-1"  @click="setStyleDirect($event,'string','','NotoSansSC-Bold')" href="javascript:void(0);" style="font-family: 'NotoSansSC-Bold';" >思源粗体</a></li>
													<li role="presentation" ><a role="menuitem" tabindex="-1"  @click="setStyleDirect($event,'string','','NotoSansSC-Black')" href="javascript:void(0);" style="font-family: 'NotoSansSC-Black';" >思源特粗</a></li>
													<li role="presentation" ><a role="menuitem" tabindex="-1"  @click="setStyleDirect($event,'string','','zcool-gdh')" href="javascript:void(0);" style="font-family: 'zcool-gdh';" >站酷高端黑</a></li>
													<li role="presentation" ><a role="menuitem" tabindex="-1"  @click="setStyleDirect($event,'string','','HappyZcool')" href="javascript:void(0);" style="font-family: 'HappyZcool';" >站酷快乐体</a></li>
													<!--<li role="presentation" v-for="fontFace in FontFace"><a role="menuitem" tabindex="-1"  click="alert($event,'string','','{{fontFace.faceFamily}}')" href="javascript:void(0);" style="font-family:{{fontFace.faceFamily}}">{{fontFace.label}}</a></li>-->
						  						</ul>
											</span>
										</span>
									</li>
									<li style-attr="fontSize" >
										<span>字体大小</span>
										<select style="width: 166px" @change="setStyleDirect($event,'number','px')" >
											<optgroup label="请选择字号">
												<option label="{{n+12}}" value="{{n+12}}"  v-for="n in 109"></option>
											</optgroup>
										</select>
									</li>
									<li style-attr="color" >
										<span>字体颜色</span><span class="ctner-range"><input type="color" @input="setStyleDirect($event,'color','')" :value="style['color']" /></span>
									</li>
									<li style-attr="backgroundColor" >
										<span>背景颜色</span><span class="ctner-range"><input type="color" @input="setStyleDirect($event,'color','')" :value="style['backgroundColor']" /></span>
									</li>
									<li>
										<div class="sui-btn-group">
											<button class="sui-btn " title="加粗"  data-toggle="tooltip"
											        :class="{'actived':style.fontWeight=='bold'}" @click="setStyleDirect($event,'string','','bold','fontWeight',style.fontWeight==='bold')"   ><i class="fa fa-bold" aria-hidden="true"></i></button>
											<button style="margin-left: -1px;" class="sui-btn" title="斜体"  data-toggle="tooltip"
                                                    :class="{'actived':style.fontStyle==='italic'}" @click="setStyleDirect($event,'string','','italic','fontStyle',style.fontStyle==='italic')"  ><i class="fa fa-italic" aria-hidden="true"></i></button>
											<button style="margin-left: -1px;" class="sui-btn" title="下划线" data-toggle="tooltip"
                                                    :class="{'actived':style.textDecoration==='underline'}" @click="setStyleDirect($event,'string','','underline','textDecoration',style.textDecoration==='underline')" ><i class="fa fa-underline" aria-hidden="true"></i></button>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<div class="group_head" :class="{'active':group_index === 1}"  >
								<h4>对齐</h4>
							</div>
							<div class="group_main" >
								<ul>
									<li style-attr="border-style">
										<div class="sui-btn-group">
											<button style="margin-left: -1px;" class="sui-btn " title="居左"  data-toggle="tooltip"  :class="{'actived':style.textAlign==='left'}" @click="setStyleDirect($event,'string','','left','textAlign',style.textAlign==='left')" ><i class="fa fa-align-left" aria-hidden="true"></i></button>
											<button style="margin-left: -1px;" class="sui-btn"  title="居中"  data-toggle="tooltip"  :class="{'actived':style.textAlign==='center'}" @click="setStyleDirect($event,'string','','center','textAlign',style.textAlign==='center')"  ><i class="fa fa-align-center" aria-hidden="true"></i></button>
											<button style="margin-left: -1px;" class="sui-btn"  title="居右"  data-toggle="tooltip"  :class="{'actived':style.textAlign==='right'}" @click="setStyleDirect($event,'string','','right','textAlign',style.textAlign==='right')" ><i class="fa fa-align-right" aria-hidden="true"></i></button>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<div class="group_head" >
								<h4>间距</h4>
							</div>
							<div class="group_main" >
								<ul>
									<li style-attr="lineHeight">
										<span>行高：{{style.lineHeight}}</span>
										<span class="ctner-range"><input min="0" max="6" step="0.1"  :vlaue="style.lineHeight" type="range" @input="setStyleDirect($event,'num','')"  ></span>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<div class="group_head" :class="{'active':group_index === 2}"  @click="group_index == 2 ? group_index = null : group_index = 2">
								<h4>文本投影</h4>
							</div>
							<div class="group_main" >
								<ul>
									<li style-attr="textShadow">
										<span>是否启用</span>
										<select @change="setStyleDirect($event,'')">
											<optgroup label="请选择" >
												<option label="是" value="1px 2px 2px #000000">是</option>
												<option label="否" value="none" selected="selected">否</option>
											</optgroup>
										</select>
									</li>

									<li style-attr="textShadow"  v-show="isTextShadow">
										<span>颜色</span>
										<span class="ctner-range"><input type="color" value="#000000"  @input="setStyleDirect($event,'partial','',4)"/></span>
									</li>
									<li style-attr="textShadow" v-show="isTextShadow">
										<span>X-偏移</span>
										<span class="ctner-range">
											<input type="range" min="0" max="100" step="1"  @input="setStyleDirect($event,'partial','',1)"/>
										</span>
										<input class="range-value" type="number" min="0" max="100gu" step="1" />
									</li>
									<li style-attr="textShadow" v-show="isTextShadow">
										<span>Y-偏移</span>
										<span class="ctner-range">
											<input type="range" min="0" max="100" step="1" @input="setStyleDirect($event,'partial','',2)"/>
										</span>
										<input class="range-value" type="number" min="0" max="100" step="1" />
									</li>
									<li style-attr="textShadow" v-show="isTextShadow">
										<span>模糊</span>
										<span class="ctner-range">
											<input type="range" min="0" max="100" step="1" @input="setStyleDirect($event,'partial','',3)"/>
										</span>
										<input class="range-value" type="number" min="0" max="100" step="1" />
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
				<div class="attr_main" v-show="nav_top_btn == 1">
					<ul class="group">
						<li>
							<div class="group_head" :class="{'active':group_index === 0}" @click="group_index == 0 ? group_index = null : group_index = 0">
								<h4>位置和尺寸</h4>
								<span class="caret" :class="{'caret_close':group_index !== 0}"></span>
							</div>
							<div class="group_main" >
								<ul>
									<li style-attr="left" v-show="itemType === 'TXT'">
										<span>X坐标</span><input type="number" @input="setStyleDirect($event,'color','')" :value="style['backgroundColor']" />
									</li>
									<li style-attr="top" v-show="itemType === 'TXT'">
										<span>Y坐标</span><input type="number" @input="setStyleDirect($event,'color','')" :value="style['backgroundColor']" />
									</li>
									<li style-attr="width" v-show="itemType === 'TXT'">
										<span>宽度</span><input type="number" @input="setStyleDirect($event,'color','')" :value="style['backgroundColor']" />
									</li>
									<li style-attr="height" v-show="itemType === 'TXT'">
										<span>高度</span><input type="number" @input="setStyleDirect($event,'color','')" :value="style['backgroundColor']" />
									</li>

								</ul>
							</div>
						</li>
						<li>
							<div class="group_head" :class="{'active':group_index === 1}"  @click="group_index == 1 ? group_index = null : group_index = 1">
								<h4>旋转</h4>
								<span class="caret" :class="{'caret_close':group_index !== 1}"></span>
							</div>
							<div class="group_main" >
								<ul>
									<li style-attr="transform">
										<span>角度：0</span>
										<span class="ctner-range"><input min="0" max="360" step="0.5"  :vlaue="style.transform" type="range" @input="setStyleDirect($event,'num','')"  ></span>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<div class="group_head" :class="{'active':group_index === 1}"  @click="group_index == 1 ? group_index = null : group_index = 1">
								<h4>样式</h4>
								<span class="caret" :class="{'caret_close':group_index !== 1}"></span>
							</div>
							<div class="group_main" >
								<ul>
									<li style-attr="opacity" >
										<span>不透明度</span>
										<span class="ctner-range"><input min="0" max="1" step="0.1"  :vlaue="style.opacity" type="range" @input="setStyleDirect($event,'num','')"  ></span>
									</li>
									<li style-attr="backgroundColor" >
										<span>背景透明度</span>
										<span class="ctner-range"><input min="0" max="1" step="0.1"  :vlaue="style.backgroundColor" type="range" @input="setStyleDirect($event,'num','')"  ></span>
									</li>
									<!--<li style-attr="border-style">
										<span>样式</span>
										<select :value="style['border-style']" @input="setStyleDirect($event)">
											<option value="none">无</option>
											<option value="solid">直线</option>
											<option value="dashed">虚线</option>
											<option value="dotted">点线</option>
											<option value="double">双实线</option>
											<option value="groove">3D凹槽</option>
											<option value="ridge">3D垄状</option>
											<option value="inset">3D内阴影</option>
											<option value="outset">3D外阴影</option>
										</select>
									</li>
									<li style-attr="border-width">
										<span>粗细</span>
										<input type="range" min="0" max="50" step="1" :value="style['border-width'] | Number" @input="setStyleDirect($event,'number','px')"/>
										<input type="number" min="0" max="50" step="1" :value="style['border-width'] | Number" @input="setStyleDirect($event,'number','px')"/>
									</li>
									<li style-attr="border-radius">
										<span>圆角</span>
										<input type="range" min="0" max="50" step="1" :value="style['border-radius'] | Number" @input="setStyleDirect($event,'number','px')"/>
										<input type="number" min="0" max="50" step="1" :value="style['border-radius'] | Number" @input="setStyleDirect($event,'number','px')"/>
									</li>
									<li style-attr="border-color">
										<span>颜色</span>
										<input type="color" :value="style['border-color']" @input="setStyleDirect($event,'color')"/>
										<input type="text" :value="style['border-color']" @input="setStyleDirect($event,'color')"/>
									</li>-->
								</ul>
							</div>
						</li>
						<!--<li>
							<div class="group_head" :class="{'active':group_index === 1}"  @click="group_index == 1 ? group_index = null : group_index = 1">
								<h4>效果</h4>
								<span class="caret" :class="{'caret_close':group_index !== 1}"></span>
							</div>

						</li>-->

					</ul>
				</div>
				<div class="attr_main" v-show="nav_top_btn == 2">
					<ul class="group">
						<li>
							<div class="group_head" :class="{'active':group_index === 0}" @click="group_index == $index ? group_index = null : group_index = $index">
								<h4>动画</h4>
								<!--<span class="caret" :class="{'caret_close':group_index !== $index}"></span>-->
							</div>
							<!--<span class="deleteAni close" @click="delAni($index)">&times;</span>-->
							<div class="group_main" >
								<ul>
									<li style-attr="animation">
										<span>动画名称</span>
										<select  @input="setStyleDirect($event,'partial','',1)" >
											<option value="none">none | 无效果</option>
                                            <option value="flash">flash | 闪烁</option>
                                            <option value="shake">shake | 摇动</option>
                                            <option value="bounce">bounce | 弹性</option>
                                            <option value="wiggle">wiggle | 扭动</option>
                                            <option value="tada">tada | 弹加摇动</option>
                                            <option value="swing">swing | 摇摆(小)</option>
                                            <option value="wobble">wobble | 摇晃(大)</option>
                                            <option value="pulse">pulse | 脉冲放大</option>
                                            <option value="flip">flip</option> 兼容性有问题
                                            <option value="rollIn">rollIn | 滚入</option>
                                            <option value="lightSpeedIn">lightSpeedIn | 惯性出现</option>
                                            <option value="flipInX">flipInX | X轴翻滚出现</option>
                                            <option value="flipInY">flipInY | Y轴翻滚出现</option>
                                            <option value="fadeIn">fadeIn | 淡入</option>
                                            <option value="fadeInUp">fadeInUp | 向上淡入</option>
                                            <option value="fadeInDown">fadeInDown | 向下淡入</option>
                                            <option value="fadeInLeft">fadeInLeft | 从左淡入</option>
                                            <option value="fadeInRight">fadeInRight | 从右淡入</option>
                                            <option value="fadeInUpBig">fadeInUpBig | 向上淡入（大幅度）</option>
                                            <option value="fadeInDownBig">fadeInDownBig | 向下淡入(大幅度)</option>
                                            <option value="fadeInLeftBig">fadeInLeftBig | 从左淡入(大幅度)</option>
                                            <option value="fadeInRightBig">fadeInRightBig | 从右淡入(大幅度)</option>
                                            <option value="bounceIn">bounceIn | 弹入</option>
                                            <option value="bounceInUp">bounceInUp | 向上弹出</option>
                                            <option value="bounceInDown">bounceInDown | 从下弹出</option>
                                            <option value="bounceInLeft">bounceInLeft | 从左弹出</option>
                                            <option value="bounceInRight">bounceInRight | 从右弹出</option>
                                            <option value="rotateIn">rotateIn | 旋转出现</option>
                                            <option value="rotateInUpLeft">rotateInUpLeft | 向上转出（左）</option>
                                            <option value="rotateInDownLeft">rotateInDownLeft | 向下转出（左）</option>
                                            <option value="rotateInUpRight">rotateInUpRight | 向上转出（右）</option>
                                            <option value="rotateInDownRight">rotateInDownRight | 向下转出（右）</option>
                                            <option value="rollOut">rollOut | 滚出</option>
                                            <option value="hinge">hinge | 悬挂掉出</option>
                                            <option value="lightSpeedOut">lightSpeedOut | 惯性消失</option>
                                            <option value="flipOutX">flipOutX | X轴翻滚消失</option>
                                            <option value="flipOutY">flipOutY | Y轴翻滚消失</option>
                                            <option value="fadeOut">fadeOut | 淡出</option>
                                            <option value="fadeOutUp">fadeOutUp | 向上淡出</option>
                                            <option value="fadeOutDown">fadeOutDown | 向下淡出</option>
                                            <option value="fadeOutLeft">fadeOutLeft | 向左淡出</option>
                                            <option value="fadeOutRight">fadeOutRight | 向右淡出</option>
                                            <option value="fadeOutUpBig">fadeOutUpBig | 向上淡出（大幅度）</option>
                                            <option value="fadeOutDownBig">fadeOutDownBig | 向下淡出（大幅度）</option>
                                            <option value="fadeOutLeftBig">fadeOutLeftBig | 向左淡出（大幅度）</option>
                                            <option value="fadeOutRightBig">fadeOutRightBig | 向右淡出（大幅度）</option>
                                            <option value="bounceOut">bounceOut | 弹出后消失</option>
                                            <option value="bounceOutUp">bounceOutUp | 向上弹出</option>
                                            <option value="bounceOutDown">bounceOutDown | 向下弹出</option>
                                            <option value="bounceOutLeft">bounceOutLeft | 向左弹出</option>
                                            <option value="bounceOutRight">bounceOutRight | 向右弹出</option>
                                            <option value="rotateOut">rotateOut | 旋转消失</option>
                                            <option value="rotateOutUpLeft">rotateOutUpLeft | 向上转出（左）</option>
                                            <option value="rotateOutDownLeft">rotateOutDownLeft | 向下转出（左）</option>
                                            <option value="rotateOutUpRight">rotateOutUpRight | 向上转出（右）</option>
                                            <option value="rotateOutDownRight">rotateOutDownRight | 向下转出（右）</option>
										</select>
									</li>
									<li style-attr="ani-duration">
										<span>动画时长</span>
										<!--<input type="range" min="0" max="10" step="0.1"  @input="setAni($index,$event,'number','s')"/>
										<input type="number" min="0" max="10" step="0.1"  @input="setAni($index,$event,'number','s')"/>-->
									</li>
									<!--<li style-attr="ani-tween">
										<span>动画曲线</span>
										<select :value="item['ani-tween']" @input="setAni($index,$event)">
											<option value="ease">ease | 自然</option>
											<option value="linear">linear | 匀速</option>
											<option value="ease-in">linear | 加速</option>
											<option value="ease-out">linear | 减速</option>
										</select>
									</li>
									<li style-attr="ani-delay">
										<span>动画延时</span>
										<input type="range" min="0" max="50" step="0.1" :value="item['ani-delay'] | Number '0'" @input="setAni($index,$event,'number','s')"/>
										<input type="number" min="0" max="50" step="0.1" :value="item['ani-delay'] | Number '0'" @input="setAni($index,$event,'number','s')"/>
									</li>-->
									<!--<li style-attr="ani-count">
										<span>动画次数</span>
										<input type="number" min="0" max="10" step="1" :value="item['ani-count'] | Number '0'" @input="setAni($index,$event,'number')" :disabled="item['ani-count'] === 'infinite'"/>
										<input type="checkbox" id="infinite" :checked="item['ani-count'] === 'infinite'" @change="setAni($index,$event,'checked')" style="margin-left: 15px;"/>
										<label for="infinite" style="margin-left: 8px;">循环</label>
									</li>-->
								</ul>
							</div>
						</li>
					</ul>
					<!--<ul class="ani_btn">-->
						<!--<li @click="addAni()">添加动画</li>-->
						<!--<li @click="reloadAni()">预览动画</li>-->
					<!--</ul>-->
				</div>
				<div class="attr_main" v-show="nav_top_btn == 3">
					敬请期待～
				</div>
			</div>
		</div>
	</div>
</template>



<script>

var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/action/index.js');

var utils = require('utils');
var filter = require('../../filter/index.js');
var FontFace = [
	{label:'方正黑体简体',faceFamily:'FZHei-B01S',src:'FZHei-B01S.woff'},
	{label:'方正楷体简体',faceFamily:'FZKai-Z03S',src:'FZKai-Z03S.woff'},
	{label:'方正书宋简体',faceFamily:'FZShuSong-Z01S',src:'FZShuSong-Z01S.woff'},
	{label:'方正仿宋简体',faceFamily:'FZFangSong-Z02S',src:'FZFangSong-Z02S.woff'},
	{label:'思源极细体',faceFamily:'NotoSansSC-Thin',src:'NotoSansSC-Thin.woff2'},
	{label:'思源细体',faceFamily:'NotoSansSC-Light',src:'NotoSansSC-Light.woff2'},
	{label:'思源正常',faceFamily:'NotoSansSC-DemiLight',src:'NotoSansSC-DemiLight.woff2'},
	{label:'思源常规',faceFamily:'NotoSansSC-Regular',src:'NotoSansSC-Regular.woff2'},
	{label:'思源中等粗体',faceFamily:'NotoSansSC-Medium',src:'NotoSansSC-Medium.woff2'},
	{label:'思源粗体',faceFamily:'NotoSansSC-Bold',src:'NotoSansSC-Bold.woff2'},
	{label:'思源特粗',faceFamily:'NotoSansSC-Black',src:'NotoSansSC-Black.woff2'},
	{label:'站酷高端黑',faceFamily:'zcool-gdh',src:'zcool-gdh.woff'},
	{label:'站酷快乐体',faceFamily:'HappyZcool',src:'HappyZcool.woff'},
];
var AttrListVm = null;
var AttrList = Vue.extend({
	name: 'AttrList',
	data: function(){
		console.log(this.style);
		return {
			itemType: '',
			nav_top_btn: 0,
			group_index: 0,
			style: {},
			boxShadowStyle: {},
			aniStyleAttr: [],
			FontFace:FontFace,
			isTextShadow:true
		};
	},
	vuex: {
	  	getters: {
	  		checkedItems: function(){
				return store.state.checkedItems;
			},
			currentPageData: function(){
				return store.state.currentPageData;
			},
			checkedItemDataOnlyOne: function(){
				return store.state.checkedItemDataOnlyOne;
			}
	  	},
	  	actions: actions
	},
	init: function(){
		AttrListVm = this;
	},
	methods: {
		selectPage: actions.selectPage,
		addPage: actions.addPage,
		setStyleDirect: function(ev, type, px,val){ // px 单位
			var styleAttr = $(ev.target).parents('li[style-attr]').attr('style-attr');
			var value = null;
			if(type=='partial'){
				if(styleAttr=='textShadow'){
					var regexp_textshadow = new RegExp('(\\d+)px (\\d+)px (\\d+)px (\\w+|#\\d{3,6})');
					var val_ = $(ev.target).val();
					if(regexp_textshadow.test(this.style.textShadow)){
						value = this.style.textShadow.replace(regexp_textshadow,""+(val==1?val_:'$1')+"px "+(val==2?val_:'$2')+"px "+(val==3?val_:'$3')+"px "+(val==4?val_:'$4'));
					}
				}else if(styleAttr=='animation'){
					var regexp_animation = new RegExp('(\\w+) (\\d+)s');
					var val_ = $(ev.target).val();
					if(regexp_animation.test(this.style.animation)){
						value = this.style.animation.replace(regexp_animation,""+(val==1?val_:'$1')+" "+(val==2?val_:'$2')+"s ");
					}else{
						value = val_+" 1s";
					}
				}

			}else if(type=='string'){
				value = val;
                if(arguments.length==6&&typeof arguments[5]=='boolean'){
                    styleAttr = arguments[4];var defaultVal = '';
					if(styleAttr=='textAlign'){
						value = arguments[3];
					}else{
						if(styleAttr=='fontWeight'||styleAttr=='fontStyle'){
							defaultVal = 'normal';
						}else if(styleAttr=='textDecoration'){
							defaultVal = 'none';
						}
						value = arguments[5]?defaultVal:arguments[3];
					}
                }else{
                    $(ev).closest('ul').siblings('a').find('span').html($(ev).text());
                }
			}else{
				value = $(ev.target).val();
			}

			if(type === 'color'){
				if(value.indexOf('#') > -1 && value.length !== 7){
					return;
				}
				if(!utils.checkIsColor(value)){
					return;
				}
			}
			if(px){
				value = value + px;
			}
			var params = {};
			if(styleAttr=='transform'){
				params[styleAttr] = 'rotate('+value+'deg)';
			}else{
				params[styleAttr] = value;
			}
			actions.setStyle(store,this.checkedItems[0], params,true)
//			console.log(utils.getStyle(this.checkedItems[0],'all',true));
			this.style = utils.getStyle(this.checkedItems[0],'all',true);
			this.isTextShadow = this.style.textShadow!='none';
		},/*
		setBoxShadow: function(ev,type,px){
			var styleAttr = $(ev.target).parents('li[style-attr]').attr('style-attr');
			var value;
			if(type === 'checked'){
				value = $(ev.target)[0].checked ? 'inset' : '';
			}else{
				value = $(ev.target).val();
			}
			if(type === 'color'){
				if(value.indexOf('#') > -1 && value.length !== 7){
					return;
				}
				if(!utils.checkIsColor(value)){
					return;
				}
			}
			if(px){
				value = value + px;
			}
			this.boxShadowStyle[styleAttr] = value;
			var boxShadowValue = this.boxShadowStyle['box-shadow-x'] + ' ' + this.boxShadowStyle['box-shadow-y'] + ' ' + this.boxShadowStyle['box-shadow-blur'] + ' ' + this.boxShadowStyle['box-shadow-size'] + ' ' + this.boxShadowStyle['box-shadow-color'] + ' ' + this.boxShadowStyle['box-shadow-place'];
			actions.setStyle(store,this.checkedItems[0], {
				'box-shadow': boxShadowValue
			},true)
		},
		formatBoxShadow: function(boxShadowStr){
			var result = {};
			var _arr = boxShadowStr.replace(/(^\s+)|(\s+$)/g,'').split(' ');
			result['box-shadow-x'] = _arr[0];
			result['box-shadow-y'] = _arr[1];
			result['box-shadow-blur'] = _arr[2];
			result['box-shadow-size'] = _arr[3];
			result['box-shadow-color'] = _arr[4];
			result['box-shadow-place'] = _arr[5] ? _arr[5] : '';
			return result;
		},*/
		/*addAni: function(){
			actions.addClass(store,this.checkedItems[0],'ani');
			var model = 'none 0s ease 0s 1 none';
			var _aniStr = utils.getStyle(this.checkedItems[0],'-webkit-animation',true) || utils.getStyle(this.checkedItems[0],'animation',true);
			if(_aniStr !== null){
				actions.setStyle(store,this.checkedItems[0],{
					'animation': _aniStr + ',' + model,
					'-webkit-animation': _aniStr + ',' + model
				},true);
			}else{
				actions.setStyle(store,this.checkedItems[0],{
					'animation': model,
					'-webkit-animation': model
				},true);
			}
			var aniStr = utils.getStyle(this.checkedItems[0],'-webkit-animation',true) || utils.getStyle(this.checkedItems[0],'animation',true);
			this.aniStyleAttr = this.formatAni(aniStr);
		},
		delAni: function(index){
			var result = [];
			this.aniStyleAttr = result.concat(this.aniStyleAttr.slice(0,index),this.aniStyleAttr.slice(index+1));
			var resultStr = [];
			for(var i = 0;i < this.aniStyleAttr.length;i++){
				resultStr.push(this.aniStyleAttr[i]['ani-name'] + ' ' + this.aniStyleAttr[i]['ani-duration'] + ' ' + this.aniStyleAttr[i]['ani-tween'] + ' ' + this.aniStyleAttr[i]['ani-delay'] + ' ' + this.aniStyleAttr[i]['ani-count'] + ' none');
			}
			if(resultStr.length === 0){
				actions.removeClass(store,this.checkedItems[0],'ani');
			}
			actions.setStyle(store,this.checkedItems[0],{
				'animation': resultStr.join(','),
				'-webkit-animation': resultStr.join(',')
			},true);
			this.group_index = this.group_index == 0 ? 0 : this.group_index - 1;
		},
		setAni: function(index,ev,type,px){
			var styleAttr = $(ev.target).parents('li[style-attr]').attr('style-attr');
			var value;
			if(type === 'checked'){
				value = $(ev.target)[0].checked ? 'infinite' : 1;
			}else{
				value = $(ev.target).val();
			}
			if(px){
				value = value + px;
			}
			this.aniStyleAttr[index][styleAttr] = value;
			var resultStr = [];
			for(var i = 0;i < this.aniStyleAttr.length;i++){
				resultStr.push(this.aniStyleAttr[i]['ani-name'] + ' ' + this.aniStyleAttr[i]['ani-duration'] + ' ' + this.aniStyleAttr[i]['ani-tween'] + ' ' + this.aniStyleAttr[i]['ani-delay'] + ' ' + this.aniStyleAttr[i]['ani-count'] + ' none');
			}
			actions.setStyle(store,this.checkedItems[0],{
				'animation': resultStr.join(','),
				'-webkit-animation': resultStr.join(',')
			},true);
		},*/
		/*formatAni: function(aniStr){
			var result = [];
			var _arr1 = aniStr.replace(/(^\s+)|(\s+$)/g,'').split(',');
			for(var i = 0;i < _arr1.length;i++){
				if(_arr1[i] != ''){
					_arr1[i] = _arr1[i].replace(/(^\s+)|(\s+$)/g,'');
					var _currentResult = {};
					var _arr2 = _arr1[i].split(' ');
					_currentResult['ani-name'] = _arr2[0];
					_currentResult['ani-duration'] = _arr2[1];
					_currentResult['ani-tween'] = _arr2[2];
					_currentResult['ani-delay'] = _arr2[3];
					_currentResult['ani-count'] = _arr2[4];
					_currentResult['ani-mode'] = _arr2[5];
					result.push(_currentResult);
				}
			}
			return result;
		},*//*
		reloadAni: function(){
			var _this = this;
			var _AniStr = utils.getStyle(this.checkedItems[0],'-webkit-animation',true) || utils.getStyle(this.checkedItems[0],'animation',true);
			actions.setStyle(store,this.checkedItems[0],{
				'animation': '',
				'-webkit-animation': ''
			},true);
			$('.j_screen>div').eq(this.checkedItems[0])[0].style.width = $('.j_screen>div').eq(this.checkedItems[0])[0].style.width;
			setTimeout(function(){
				actions.setStyle(store,_this.checkedItems[0],{
					'animation': _AniStr,
					'-webkit-animation': _AniStr
				},true);
			}, 1);
		}*/
	},
	watch: {
		'checkedItems': {
			handler: function(value){
				var _this = this;
				/*if(this.checkedItems[0] !== undefined){
					this.itemType = $('.j_screen>div').eq(this.checkedItems[0]).attr('type');
					this.style = utils.getStyle(this.checkedItems[0],'all',true);
					this.boxShadowStyle = this.formatBoxShadow(utils.getStyle(this.checkedItems[0],'box-shadow',true));
					var aniStr = utils.getStyle(this.checkedItems[0],'-webkit-animation',true) || utils.getStyle(this.checkedItems[0],'animation',true);
					this.aniStyleAttr = aniStr === null ? [] : this.formatAni(aniStr);
				}*/
			},
			deep: true,
			immediate: true
		}
	}

});

module.exports = AttrList;

</script>