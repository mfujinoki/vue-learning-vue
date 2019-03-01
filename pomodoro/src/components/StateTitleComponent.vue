<template>
    <div>
        <h3>{{ isworking ? workingtitle : restingtitle | lowercase }}</h3>
        <p>
        {{ Math.pow(5, 2) }}
        </p>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    data () {
        return {
            workingtitle: 'Work!',
            restingtitle: 'Rest!'
        }
    },
    props: ['isworking']
}
</script>