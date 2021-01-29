<template>
	<view>
		<view>
			<u-search margin="30rpx" v-model="keywork" @custom="search(keywork)"></u-search>
		</view>
<!-- 		<view v-for="(item,index) in list" :key="index">
			<u-card @click="choice(item)" :border="item.id == store.id" :title="item.name" :thumb="item.image" :thumb-width="80" :sub-title="item.status_text">
				<view slot="body" class="body">
					<view class="body-left">
						<view>距离您 {{item.far_text}}</view>
						<view v-if="item.distance > 0">配送距离：{{item.distance + 'km '}} & 配送费：{{item.delivery_price}}</view>
						<view v-else>外卖不配送</view>
						<view>{{item.address_map + ' ' + item.address}}</view>
						<view>营业时间 {{item.bussines_time}}</view>
					</view>
					<view class="body-right">
						<u-button @click="openLocation(item)">导航</u-button>
						<u-button @click="call(item.mobile)">致电</u-button>
					</view>
				</view>
			</u-card>
		</view> -->
		<view v-for="(item,index) in list" :key="index">
			<view class="box" @click="choice(item)">
				<view class="top">
					<view class="title">{{item.name}}</view>
					<view class="li">距{{item.far_text}}</view>
				</view>
				<view class="middle">
					<image src="/static/images/yysj_icon.png"></image>
					{{item.bussines_time}}
				</view>
				<view class="bottom">
					<view class="address">
						<image src="/static/images/dw_icon.png"></image>
						{{item.address_map + ' ' + item.address}}69号
					</view>
					<view class="look">查看详情</view>
				</view>
				<view class="jxw_bg">
					<image mode="heightFix" src="/static/images/jxw_bg.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState, mapMutations
	} from 'vuex'
	export default {
		computed: {
			...mapState(['location', 'store'])
		},
		data() {
			return {
				list: [],
				keywork: '',
				page: 1,
				pagesize: 10
			}
		},
		onLoad() {
			this.getShop();
		},
		methods: {
			...mapMutations(['SET_STORE']),
			async getShop(keywork = '') {
				let data = await this.$api.request('/shop/getList', 'POST', {
					lat: this.location.latitude,
					lng: this.location.longitude,
					kw: keywork,
					page:this.page,
					pagesize:this.pagesize
				});
				if (data) {
					//console.log(data);
					if (this.page == 1) {
						this.list = data;
					} else {
						for(let i in data) {
							this.list.push(data[i]);
						}
					}
				}
			},
			//打开定位
			openLocation(shop) {
				//console.log(shop);
				uni.openLocation({
					latitude: parseFloat(shop.lat),
					longitude: parseFloat(shop.lng),
					name:shop.name,
					address: shop.address_map + shop.address,
					fail: (res) => {
						console.log(res);
					}
				})
			},
			// 打电话
			call(mobile) {
				uni.makePhoneCall({
					phoneNumber:mobile
				})
			},
			// 搜索按钮
			search(keywork) {
				this.page = 1;
				this.getShop(keywork);
			},
			// 选中店铺
			choice(shop) {
				this.SET_STORE(shop);
				uni.setStorageSync('cart', JSON.parse(JSON.stringify(this.$api.prePage(0).cart)));
				this.$api.prePage(0).init();
				uni.switchTab({ 
					url:'/pages/menu/menu',
					fail(res) {
						console.log(res);
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.body {
		
		.body-left {
			display: inline-block;
			width: 77%;
			padding-left: 6rpx;
		}
		.body-right {
			display: inline-block;
			width: 20%;
		}
	}
	
	.u-border {
		border: 1rpx solid #1296db;
	}
	.box{
		margin: 25rpx;
		background: #fff;
		position: relative;
		padding: 25rpx 20rpx;
		border-radius: 10rpx;
		color:#939497;
		.jxw_bg{
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			opacity: 0.06;
			image{
				height:100%;
			}
		}
		.top{
		    display: flex;
		    justify-content: space-between;
			.title{
			    font-size: 33rpx;
			    font-weight: bold;
				color:#000;
			}
			.li{
			    color: #262C42;
			}
		}
		.middle{
			
			line-height: 40rpx;
			image{
			    width: 20rpx;
			    height: 20rpx;
				margin-right: 10rpx;
			}
		}
		.bottom{
			line-height: 40rpx;
			display: flex;
			justify-content: space-between;
			.address{
				image{
				    width: 20rpx;
				    height: 20rpx;
					margin-right: 10rpx;
				}
			}
			.look{
				color:#DA6E46;
				flex: none;
				width: 120rpx;
				text-align: right;
				
			}
		}
	}
</style>
