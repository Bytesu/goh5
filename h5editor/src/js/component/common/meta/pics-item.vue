<template>
    <li>
        <img data-id="{{item._id}}" :src="item.file_path" >
        <div class="check"  :class="item.checked" @click="addSelected(item)">
        </div>
    </li>
</template>
<script>
    export default{
        props:['item'],
        data(){
            return{
                msg:'hello vue'
            }
        },
        methods:{
            addSelected:function (item) {
//                item.checked =
            }
        },
        components:{

        }
    }
</script>
