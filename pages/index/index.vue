<template>
	<view class="content">
		<!-- <view class="iconfont icon-bofang">
			
		</view> -->
		<my-icon iconName="icon-xihuan2" iconColor="text-dark" iconSize="200"></my-icon>
		<view style="width:100rpx; height: 100rpx; background-color: red;"
		class="animated" hover-class="flip"></view>
	</view>
</template>

<script>
	import myIcon from '../../components/icon.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			myIcon
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
