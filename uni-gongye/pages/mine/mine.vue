<template>
	<view class="container">
		<view class="position-relative">
			<image src="/static/images/mine/top_bg.png" class="bg"></image>
			<view class="user-info">
				<view class="avatar">
					<image :src="isLogin ? member.avatar : '/static/images/mine/default.png'"></image>
				</view>
				<view class="d-flex flex-column flex-fill overflow-hidden">
					<view v-if="isLogin" class="font-size-extra-lg font-weight-bold d-flex justify-content-start align-items-center">
						<view class="text-truncate">{{ member.username }}</view>
					</view>
					<view v-else class="font-size-extra-lg font-weight-bold" @tap="login">游客</view>
				</view>
			</view>
			<view class="info-btn" v-if="isLogin" @tap="serv({type:'pages',pages:'/pages/components/pages/mine/userinfo'})">
				个人信息
				<view class="iconfont iconarrow-right line-height-100"></view>
			</view>
		</view>
		<view class="join-member">
			<image class="join-bg" src="/static/images/mine/join_bg.png" mode="widthFix"></image>
			<view class="left">
				<view class="title">加入会员，尊享特权</view>
				<view>心动不如的行动，加入我们</view>
			</view>
			<view class="join-btn">立即加入</view>
		</view>
		<view class="main">
			<view class="item" @tap="serv({type:'pages',pages:'/pages/components/pages/balance/balance'})">
				<view class="left">
					<image mode="widthFix" class="icon" src="../../static/images/mine/yr_icon.png"></image>
					余额
				</view>
				<view class="right">
					<text class="money">{{  isLogin ? member.money : 0 }}</text>
					<view class="iconfont iconarrow-right line-height-100"></view>
				</view>
			</view>
			<view class="item" @tap="serv({type:'pages',pages:'/pages/components/pages/coupons/coupons'})">
				<view class="left">
					<image mode="widthFix" class="icon" src="../../static/images/mine/yr_icon.png"></image>
					优惠券
				</view>
				<view class="right">
					<text class="text">{{  isLogin ? member.couponNum : 0 }}张可使用</text>
					<view class="iconfont iconarrow-right line-height-100"></view>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<image mode="widthFix" class="icon" src="../../static/images/mine/lsxf_icon.png"></image>
					历史消费
				</view>
				<view class="right">
					<text>{{  isLogin ? member.currentValue : 0 }}</text>
					<view class="iconfont iconarrow-right line-height-100"></view>
				</view>
			</view>
			<view class="more-server">更多服务</view>
			<view class="item">
				<view class="left">
					<image mode="widthFix" class="icon" src="../../static/images/mine/gywm_icon.png"></image>
					关于我们
				</view>
				<view class="right">
					<view class="iconfont iconarrow-right line-height-100"></view>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<image mode="widthFix" class="icon" src="../../static/images/mine/bzzx_icon.png"></image>
					帮助中心
				</view>
				<view class="right">
					<view class="iconfont iconarrow-right line-height-100"></view>
				</view>
			</view>
		</view>
		
		
		<view style="padding: 0 30rpx;">
			<!-- user box begin -->
			<view class="d-flex flex-column bg-white user-box">
				
				<view class="d-flex align-items-center">
				<!-- 	<view class="avatar">
						<image :src="isLogin ? member.avatar : '/static/images/mine/default.png'"></image>
					</view> -->
					<view class="d-flex flex-column flex-fill overflow-hidden" style="margin-top: 20rpx;">
						<!-- <view v-if="isLogin" class="font-size-lg font-weight-bold d-flex justify-content-start align-items-center"
							@tap="serv({type:'pages',pages:'/pages/components/pages/mine/userinfo'})">
							<view class="text-truncate">{{ member.username }}</view>
							<view class="iconfont iconarrow-right line-height-100"></view>
						</view>
						<view v-else class="font-size-lg font-weight-bold" @tap="login">游客</view> -->
						<!-- <view class="font-size-sm text-color-assist">
							历史消费 ￥{{ isLogin ? member.currentValue : 0 }}
						</view> -->
						<!-- <view class="w-100">
							 <progress percent="0" activeColor="#ADB838" height="8rpx" :percent="growthValue" border-radius="8rpx"/>
						</view> -->
					</view>
					<!-- <view class="level-benefit d-flex flex-shrink-0 align-items-center justify-content-end text-color-white bg-warning font-size-sm">
						<view>会员权益</view>
						<view class="iconfont iconarrow-right line-height-100"></view>
					</view> -->
					
					<!-- <button type="default" size="mini" class="hym-btn" @tap="serv({type:'pages',pages:'/pages/components/pages/mine/member-code'})">
						<image src="/static/images/mine/hym.png"></image>
						<text>会员码</text>
					</button> -->
				</view>
				<!-- user grid begin -->
				<view class="w-100 d-flex align-items-center just-content-center">
					<view class="user-grid" @tap="serv({type:'pages',pages:'/pages/components/pages/coupons/coupons'})">
						<view class="value font-size-extra-lg font-weight-bold text-color-base">
							{{  isLogin ? member.couponNum : 0 }}
						</view>
						<view class="font-size-sm text-color-assist">优惠券</view>
					</view>
					<view class="user-grid" @tap="serv({type:'miniprogram',app_id:'wx73b3aa7f870c7d5c'})">
						<view class="value font-size-extra-lg font-weight-bold text-color-base">
							{{  isLogin ? member.score : 0 }}
						</view>
						<view class="font-size-sm text-color-assist">积分商城</view>
					</view>
					<view class="user-grid" @tap="serv({type:'pages',pages:'/pages/components/pages/balance/balance'})">
						<view class="value font-size-extra-lg font-weight-bold text-color-base">
							{{  isLogin ? member.money : 0 }}
						</view>
						<view class="font-size-sm text-color-assist">余额</view>
					</view>
					<view class="user-grid" @tap="serv({type:'pages', pages: '/pages/components/pages/balance/bill'})">
						<view class="value font-size-extra-lg font-weight-bold text-color-base">
							{{  isLogin ? member.currentValue : 0 }}
						</view>
						<view class="font-size-sm text-color-assist">历史消费</view>
					</view>
				</view>
				<!-- user grid end -->
			</view>
			<!-- user box end -->
			<!-- level benefit box begin -->
			<view class="level-benefit-box" v-if="!isLogin">
				<view class="d-flex align-items-center justify-content-between font-size-base">
					<view class="text-color-base">新用户加入会员，享会员权益</view>
					<view class="text-color-primary" @tap="login">立即加入</view>
				</view>
				
			</view>
	
		</view>
		<!-- service box begin -->
		<view class="service-box">
			<view class="font-size-lg text-color-base font-weight-bold" style="margin-bottom: 20rpx;">我的服务</view>
			<view class="row">
				<block  v-for="(item, index) in services" :key='index'>
					<view class="grid" v-if="item.pages == '/pages/components/pages/contact/contact'" >
						<button open-type="contact" class="opacity-0"></button>
						<image :src="item.image"></image>
						<view>{{item.name}}</view>
					</view>
					<view class="grid" v-else @tap="serv(item)">
						<image :src="item.image"></image>
						<view>{{item.name}}</view>
					</view>
				</block>
			</view>
		</view>
		<!-- service box end -->
		<!-- tips begin -->
		<!-- <view class="d-flex just-content-center align-items-center text-color-assist" style="padding: 30rpx 0; font-size: 22rpx;">
			会员卡适用于奈雪的茶和奈雪酒屋指定范围
		</view> -->
		<!-- tisps end -->
	</view>
</template>

<script>
	import {mapState, mapGetters, mapMutations} from 'vuex'
	export default {
		data() {
			return {
				services: []
			}
		},
		computed: {
			...mapState(['member']),
			...mapGetters(['isLogin']),
			growthValue() {
				if(!this.isLogin) return 0
				const {currentValue, needValue} = this.member
				return currentValue / (currentValue + needValue) * 100
			}
		},
		onLoad() {
			this.getServices();
		},
		onShow() {
			this.getUserInfo();
		},
		methods: {
			...mapMutations(['SET_MEMBER']),
			async getUserInfo() {
				if (this.isLogin) {
					let data = await this.$api.request('/user/getUserInfo');
					if (data) {
						this.SET_MEMBER(data);
					}
				}
			},
			async getServices() {
				let data = await this.$api.request('/mine/service');
				if (data) {
					this.services = data;
				}
			},
			login() {
				uni.navigateTo({
					url: '/pages/components/pages/login/login'
				})
			},
			packages() {
				if(!this.isLogin) {
					this.login()
					return
				}
				uni.navigateTo({
					url: '/pages/components/pages/packages/index'
				})
			},
			serv(item) {
				switch(item.type) {
					case 'pages':
						if(!this.isLogin) {
							this.login()
							return
						}
						uni.navigateTo({
							url: item.pages
						})
						break;
					case 'miniprogram':
						uni.navigateToMiniProgram({
							appId: item.app_id
						})
						break;
					case 'menu':
						uni.navigateTo({
							url:'/pages/components/pages/mine/service?id='+item.id+'&name='+item.name
						})
						break;
					case 'content':
						uni.navigateTo({
							url:'/pages/components/pages/mine/content?id='+item.id+'&name='+item.name
						})
						break;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
page {
	height: auto;
	min-height: 100%;
}	

.bg {
	width: 100%;
	height: calc(410 / 594 * 750rpx);
}

.hym-btn {
	position: absolute;
	top: 40rpx;
	right: 40rpx;
	color: $color-primary;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50rem;
	font-size: $font-size-sm;
	box-shadow: 0 0 20rpx rgba(66,66,66,0.1);
	&::after {
		border: 0;
	}
	
	image {
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
	}
}

.user-box {
	position: relative;
	border-radius: 8rpx; 
	margin-bottom: 30rpx;
	margin-top: 70rpx;
	box-shadow: $box-shadow;
}

.avatar {
	margin-left: 35rpx;
	margin-right: 35rpx;
	width: 160rpx;
	height: 160rpx;
	border-radius: 20rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	// background-color: #FFFFFF;
	box-shadow: 0 0 20rpx rgba($color: #000000, $alpha: 0.2);
	border-radius: 50%;
	overflow: hidden;
	image {
		width: 100%;
		height: 100%;
		object-fit:cover;
	}
	
	.badge {
		position: absolute;
		right: -10rpx;
		bottom: -10rpx;
		background-color: #FFFFFF;
		border-radius: 50rem;
		display: flex;
		align-items: center;
		justify-content: center;
		color: $color-warning;
		font-size: 24rpx;
		padding: 8rpx 16rpx;
		box-shadow: 0 0 20rpx rgba($color: #000000, $alpha: 0.2);
		
		image {
			width: 30rpx;
			height: 30rpx;
		}
	}
}

.level-benefit {
	margin-left: 35rpx;
	padding: 10rpx 0 10rpx 30rpx;
	border-radius: 50rem 0 0 50rem;
}

.user-grid {
	width: 25%;
	padding: 30rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	
	.value {
		margin-bottom: 20rpx;
	}
}

.level-benefit-box {
	border-radius: 8rpx; 
	margin-bottom: 30rpx;
	box-shadow: 0 10rpx 8rpx rgba($color: #878889, $alpha: 0.1);
	width: 100%;
	display: flex;
	padding: 30rpx;
	flex-direction: column;
	background-color: #FFFFFF;
	
	.row {
		display: flex;
		padding: 30rpx 0 20rpx;
		justify-content: space-around;
		align-items: center;
		
		.grid {
			width: 20%;
			display: flex;
			flex-direction: column;
			font-size: $font-size-sm;
			color: $text-color-assist;
			align-items: center;
			
			image {
				width: 80rpx;
				height: 80rpx;
				margin-bottom: 10rpx;
			}
			
		}
	}
}


.banner {
	width: 100%;
	border-radius: 8rpx;
	margin-bottom: 30rpx;
}

.service-box {
	width: 100%;
	background-color: #FFFFFF;
	padding: 32rpx 30rpx 10rpx;
	box-shadow: $box-shadow;
	
	.row {
		display: flex;
		flex-wrap: wrap;
		color: $text-color-assist;
		font-size: $font-size-sm;
		padding-bottom: -40rpx;
		
		.grid {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-bottom: 40rpx;
			width: 25%;
			position:relative;
			
			image {
				width: 80rpx;
				height: 80rpx;
				margin-bottom: 20rpx;
			}
		}
		.opacity-0 {
			position: absolute;
			width: 100%;
			height: 100%;
			opacity: 0;
			z-index: 10;
		}
		
	}
}
.user-info{
	position: absolute;
	top: 215rpx;
	display: flex;
	align-items: center;
}
.info-btn{
	background: linear-gradient(to right,#EFA77C, #DA6E46);
	display: flex;
	color: #fff;
	align-items: center;
	height: 64rpx;
	padding: 0 20rpx 0 32rpx;
	border-radius: 35rpx;
	position: absolute;
	top: 265rpx;
	right: 35rpx;
}
.join-member{
	position: relative;
	margin: 0 35rpx;
    margin-top: -100rpx;
	color:#fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.join-bg{
		position: absolute;
		width:100%;
		z-index: -1;
	}
	.left{
		font-size: 20rpx;
		margin-left:24rpx;
		color:#CDB492;
		.title{
			line-height: 40rpx;
			font-size: 28rpx;
		}
	}
	.join-btn{
		margin-right:24rpx;
		width:144rpx;
		line-height: 56rpx;
		color:#CDB492;
		border: 1px solid #CDB492;
		border-radius: 16px;
		text-align: center;
	}
}
.main{
	padding-top: 50rpx;
	background: #fff;
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
	margin-top: 23rpx;
	.item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height:110rpx;
		padding: 0 34rpx;
		.left{
			color:#262C42;
			font-size: 28rpx;
			.icon{
				width:32rpx;
				margin-bottom: -4rpx;
				    margin-right: 20rpx;
			}
		}
		.right{
			display: flex;
			.money{
				color:#DA6E46;
				font-size: 28rpx;
				font-weight:bold;
			}
			.text{
				color:#DA6E46;
				font-size: 28rpx;
			}
		}
	}
	.more-server{
		color:#262C42;
		    font-size: 38rpx;
		    font-weight: bold;
		    padding-left: 34rpx;
		    line-height: 100rpx;
		    margin-top: 25rpx;
	}
}
</style>
