<template>
    <div class="dialog_head">
        <h2 >素材库</h2>
        <!--<p>插件</p>-->
        <!--<div class="vue-btn default primary">按钮</div>&lt;!&ndash;v-component&ndash;&gt;-->
        <!--<div class="upload_btn">
            <span>上传</span>
            &lt;!&ndash;image/gif, image/jpeg, image/png, image/jpg&ndash;&gt;
            <input type="file" multiple="" accept="" style="display: block;width: 100%;height: 100%;position: absolute;opacity: 0;left: 0;top: 0;cursor: pointer;">
        </div>-->
        <a href="javascript:void(0)" class="dialog_link close" @click="closeDialog">×</a>
    </div>
</template>
<script>
    import actions from '../../../store/action/index.js';
    export default{
        vuex:{
            getter:{
                dialog:state => state.dialog.custom
            },
            actions:actions
        },
    }
</script>
