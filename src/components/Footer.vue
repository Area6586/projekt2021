<template>
    <div class="footer">
        <div class="inside">
            <span>click here to find out about a random death!</span>
            <button> Death</button>
            <ul>
                <li v-for="death in deaths" :key="death.death_id">{{death.death}} - {{death.last_words}} -{{death.responsible}}
                </li>
            </ul>

        </div>

    </div>
</template>



<script>
export default {
    name: "Footer",
    data (){
        return {
            deaths : []
        }
    },
    mounted(){
      try{
        fetch('https://www.breakingbadapi.com/api/deaths/')
            .then((res)=> res.json())
            .then((json)=> {
                console.log(json);
                this.deaths = json;
            });
        }
        catch(err){
        console.log(err)
      }
    },
}
</script>

<style>

</style>