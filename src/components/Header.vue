<template>
    <div class="container">
        <header class="header">
            <div class="img">
                <img src="../assets/svg/pinia-seeklogo.com.svg">
            </div>
            <h1 class="header-title">Pinia Todo App</h1>
        </header>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
.header{
    height: 20vh;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header img{
    width: 50px;
    margin-bottom: 20px;
    margin-right: 20px;
}

.header .header-title{
    font-size: 26px;
}
</style>