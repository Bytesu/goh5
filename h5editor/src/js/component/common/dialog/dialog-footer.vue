<template>
    <div class="dialog_bottom">
        <btn label="取消" cus-class="danger fr pos" @click="closeDialog"></btn>
        <btn label="确定" cus-class="primary fr pos"></btn>
    </div>
</template>
<style>
    .vue-btn.pos{    margin: 9px 15px 0 0;}
</style>
<script>
    import Btn from './../meta/button.vue';
    import actions from '../../../store/action/index.js';
    export default{
        vuex:{
            /*getter:{
                dialog:state => state.custom
            },*/
            actions:actions
        },
        components:{
            Btn
        }
    }
</script>
