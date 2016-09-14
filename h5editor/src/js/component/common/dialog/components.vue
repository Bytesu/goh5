<!-- 组件-集 -->
<style>

</style>
<template>
    <div class="dialog_main">
        <div class="step">
            <pics></pics>
        </div>
    </div>
</template>

<script>
    'use strict';
    import actions from '../../../store/action/index.js';
    import store from '../../../store/store.js';
    import ps from 'perfect-scrollbar';

    import Btn from '../../common/meta/button.vue';
    import Pics from '../../common/meta/pics.vue';


    export default {
        name: 'component',
        components: {
            Btn,
            Pics
        },
        ready: function () {
            document.querySelector('.ps-pic') && ps.initialize(document.querySelector('.ps-pic'));
        },
        vuex: {
            getters: {
                list: state => state.dialog.components.list,
                show: state => state.dialog.components.show
            },
            actions: actions
        },
    }
</script>
