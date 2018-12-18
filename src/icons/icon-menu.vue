<template>
    <svg :class="className" width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.75 30H26.25V26.6667H3.75V30ZM3.75 21.6667H26.25V18.3333H3.75V21.6667ZM3.75 10V13.3333H26.25V10H3.75Z"/>
    </svg>
</template>

<script>
export default {
    props: {
        className: String
    }
}
</script>