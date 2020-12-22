<template>
	<text class="iconfont" :class="[iconName,iconColor]" :style="{fontsize:`${iconSize}rpx`}"></text>
</template>

<script>
	export default{
		props:{
			iconName:{
				type:String,
				default:''
			},
			iconColor:{
				type:String,
				default:''
			},
			iconSize:{
				type:[Number,String],
				default:45
			}
		}
	}
</script>


<style>
</style>
