<template> 
    <div class="container">
        <div class="row" >
            <div class="btn-group" role="group" aria-label="Basic example" :style="{marginTop: '-3em', marginBottom: '2em', width: '50%'}">
            <center>
                <button type="button" class="btn btn-secondary" :disabled="currentPage == 1" @click="previousPage()">Back</button>
                <button type="button" class="btn btn-secondary" @click="nextPage()">Next</button>
            </center>
            </div>
        </div>
    </div>
</template>

<script>
import {bus} from '../main';
export default {
    data() {
        return {
            currentPage: 1
        }
    },
    methods: {
        
        nextPage: function() {
            bus.$emit('page', this.currentPage += 1)
        },
        previousPage: function() {
            bus.$emit('page', this.currentPage -= 1)
        }
    }, 
}

</script>

<style></style>