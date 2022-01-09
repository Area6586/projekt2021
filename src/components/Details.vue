<template>
    <div class="details">
        <div class="inside">
            <span>click here to find out about a random death!</span>
            <button> Death</button>
            <ul>
                <li v-for="character in characters" 
                :key="character.name">

                <img :src="character.img" v-bind:img="name">
                {{character.birthday}} -
                {{character.name}} - {{character.nickname}}
                {{character.status}} -{{character.portrayed}}

                <div>
                {{character.category}}-
                </div>

                </li>
            </ul>

        </div>

    </div>
</template>



<script>
export default {
    name: "Details",
    data (){
        return {
            characters : [],
            birthday : "",
            category : "",
            img : []
        }
    },
    mounted(){
      try{
        fetch('https://www.breakingbadapi.com/api/characters/')
            .then((res)=> res.json())
            .then((json)=> {
                console.log(json);
                this.characters = json;
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