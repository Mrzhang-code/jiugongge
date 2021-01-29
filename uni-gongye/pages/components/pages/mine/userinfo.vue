<template>
	<view class="">
		<!--头像框-->
		<view class="bgimage">
			<image mode="" src="../../../../static/images/tabBar/index_selected.png"></image>
		</view>
		<!--资料内容-->
		<view class="form">
			<!--左部分-->
			<view class="form-left">
				<view class="label">昵称</view>
				<view class="label">性别</view>
				<view class="label">手机号码</view>
				<view class="label">生日</view>
				<view class="label">入会时间</view>
			</view>
			<!--右部分-->
			<view class="form-right">
				<!--昵称-->
				<view class="form-input">
					<input type="text" placeholder="请填写昵称" />
				</view>
				<!--性别-->
				<view class="form-input">
					<radio-group name="radio">
					    <label class="label1">
					        <radio value="radio1" /><text class="text1">先生</text>
							
					    </label>
					    <label>
					        <radio value="radio2" /><text>女士</text>
					    </label>
					</radio-group>
				</view>
				<!--手机号码-->
				<view class="form-input">
					<input type="text" />
				</view>
				<!--生日-->
				<view class="form-input">
					<view class="sr">
						<input type="text" />
						<view class="srjt">
							<image src="../../../../static/images/srjt.png" mode=""></image>
						</view>
					</view>
				</view>
				<!--入会时间-->
				<view class="form-input">
					<input type="text" />
				</view>
			</view>
			<!--清除浮动-->
			<view style="clear:both;"></view>
		</view>
		<view class="footer-bottom">
			<button class="btn1">保存</button>
		</view>
		
	</view>
</template>

<script>
	import listCell from '@/components/list-cell/list-cell'
	
	export default {
		components: {
			listCell
		},
		data() {
			const currentDate = this.getDate({format: true})
			return {
				member: {},
				date: currentDate
			}
		},
		computed: {
		   startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onLoad() {
			this.member = this.$store.state.member;
			console.log(this.member);
		},
		methods: {
			async getUserInfo(e) {
				if (e.hasOwnProperty('detail')) {
					let data = await this.$api.request('/user/decryptData', 'POST',{
						encryptedData: e.detail.encryptedData,
						iv: e.detail.iv
					});
					if (data) {
						this.member.avatar = data.avatarUrl;
					}
				}
			},
			async getPhoneNumber(e) {
				if (e.hasOwnProperty('detail')) {
					let data = await this.$api.request('/user/decryptData', 'POST',{
						encryptedData: e.detail.encryptedData,
						iv: e.detail.iv
					});
					if (data) {
						this.member.mobile = data.phoneNumber;
					}
				}
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			handleDateChange(e) {
				this.member.birthday = e.target.value
			},
			async save() {
				let data = await this.$api.request('/user/edit', 'POST', {
					username: this.member.username,
					mobile: this.member.mobile,
					gender: this.member.gender,
					birthday: this.member.birthday,
					avatar: this.member.avatar
				});
				if (data) {
					const member = Object.assign(this.$store.state.member, this.member)
					this.$store.commit('SET_MEMBER', member)
					uni.navigateBack()
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
/*设置头像框的样式*/
.bgimage{
	width: 170rpx;
	height: 170rpx;
	margin: 40rpx auto;	
}
.bgimage image{
	width: 100%;
	height: 100%;
	border-radius: 85rpx;
}
/*设置表格的样式*/
.form{
	width: 92%;
	margin: auto;
	border-radius: 10rpx;
	background-color: rgb(255,255,255);
}
.form-left{
	float: left;
	width: 25%;
	.label{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		padding-left: 15rpx;
	}
}
.form-right{
	float: left;
	width: 75%;
	color: rgb(134,138,152);
	.form-input{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
	    input{
			font-size: 29rpx;
			width: 80%;
			height: 80rpx;
		}
		radio{
			color: rgb(0,255,1);
			transform: scale(0.6);
		}	
	}
}
/*设置单选框距离的样式*/
.label1{
				margin-right: 50rpx;
			}
			/*设置生日项箭头的样式*/
.sr{
	width: 100%;
	position: relative;
	.srjt{
		width: 30rpx;
		height: 30rpx;
		position: absolute;
		top: 13rpx;
		right: 15rpx;
		image{
			width: 30rpx;
			height: 30rpx;
		}
	}
}
/*设置底部按钮的样式*/
.footer-bottom{
	 position: fixed;
	 bottom: 0;
	 width:100%;
	 height: 160rpx;
     .btn1{
	       width: 92%;
		   border-radius: 45rpx;
		   color: white;
		   background-color: rgb(243,189,173);
		   margin:0 4%;
		   bottom: -15rpx;
		   height: 90rpx;
		   font-size: 30rpx;
		   line-height: 90rpx;
	}
}
</style>
