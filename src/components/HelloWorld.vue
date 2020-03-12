<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <ul>
            <namelist v-for="name in names" v-bind:myName="name" v-bind:key="name.id"></namelist>
        </ul>
        <button @click="showDiv">show</button>
        <transition name="slide-fade">
            <h1 v-if="isShow">{{ msg }}</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    data() {
        return {
            isShow: false,
            names: [
                { v: "daniel", id: 1 },
                {
                    v: "jesse",
                    id: 2
                }
            ]
        };
    },
    methods: {
        showDiv() {
            this.isShow = !this.isShow;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}

.slide-fade-enter-active {
    transition: all 3s ease;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(100px);
    opacity: 0;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
</style>
