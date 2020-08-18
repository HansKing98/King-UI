<template>
    <div class="input-demo">
        <div>
            <k-input placeholder="正常" v-model="message"></k-input>
            {{message}}
        </div>
        <div>
            <k-input placeholder="禁用" disabled></k-input>
        </div>
        <div>
            <k-input placeholder="只读" read-only value="我是只读"></k-input>
        </div>
        <div>
            <k-input placeholder="错误信息在默认位置" error-position="right" error="错误信息"></k-input>
        </div>
       <div>
           <k-input placeholder="错误信息在下方" error-position="bottom" error="错误信息"></k-input>
       </div>

    </div>
</template>
<script>
    import KInput from '../components/Input/input'

    export default {
        name: 'InputDemo',
        components: {KInput},
        data() {
            return {
                message: 'Hi, KingUI!'
            }

        }
    }
</script>
<style lang="scss" scoped>
    .input-demo  {
        margin-top: 32px;
        & > div {
            margin-bottom: 16px;
        }
    }
</style>