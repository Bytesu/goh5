<template>
    <div class="vue-btn default" :class="cusClass">{{label}}</div>
</template>
<style>
    .vue-btn{
        margin: 16px 0px 0;
        padding: 0 15px;
        -webkit-transition: all ease 0.5s;
        border-radius: 0px;
        display: inline-block;
        background: #76838e;
        color: #FFF;
        height: 28px;
        line-height: 28px;
        text-align: center;
        cursor: pointer;
    }
    .default{background: #76838e;color: #FFF;}
    .default:hover{background: #636e77;}
    .primary{background: #03A9F4;color: #FFF;}
    .primary:hover{background: #1b79f4;}
    .danger{background: #ff5151;color: #FFF;}
</style>
<script>
    export default{
        props: ['label','cusClass'],
    }
</script>
