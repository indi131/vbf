<template>
<div>
    <app-header> </app-header>
    <router-view/>
</div>
</template>

<script>
    export default {

        
        data()
        {
            return {
                mess: 'hello'
            }
        }
    }
</script>