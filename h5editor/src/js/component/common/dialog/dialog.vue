<template>
    <div class="dialog_con" v-show="dialog.show" transition="scale">
        <div class="dialog_main_con middle">
            <dialog-header></dialog-header>
            <components></components>
            <!--<dialog-footer></dialog-footer>-->
        </div>
    </div>
</template>
<style>
.dialog_con .dialog_main_con{margin: 10% auto;}
.dialog_con .dialog_main_con.middle{width: 850px;}
.dialog_con .dialog_main_con.middle .dialog_main{height: 540px;overflow-y: auto;overflow-x: hidden}
.dialog_main{padding: 15px;}
</style>
<script>
    import store from './../../../store/store.js';

    import DialogHeader from './dialog-header.vue'
    import DialogFooter from './dialog-footer.vue'
    import Components from './components.vue'

    export default{
        vuex:{
            getters:{
                dialog:state =>state.dialog.custom
            }
        },
        components: {
            DialogFooter,
            DialogHeader,
            Components,
        }
    }

</script>
