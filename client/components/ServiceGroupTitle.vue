<template>
    <div class="service-group-title">
        <nobr class="service-group-title__title" @click="clickHandler">{{ title }}</nobr>
        <nobr class="service-group-title__engTitle" :style="handleWidth">{{ engTitle }}</nobr>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            isRequired: true,
            default: () => {
                return ''
            },
        },
        engTitle: {
            type: String,
            isRequired: true,
            default: () => {
                return ''
            },
        },
    },

    computed: {
        handleWidth() {
            if (this.engTitle === 'PHOTOGRAPH') {
                return { fontSize: '16px' }
            }
        },
    },
    methods: {
        clickHandler() {
            this.$router.push('/portfolio')
        },
    },
}
</script>

<style lang="scss" scoped>
.service-group-title {
    width: 100%;
    color: $mainWhite;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 16px;

    &__title {
        font-size: 83px;
        line-height: 1;
        cursor: pointer;
    }

    &__engTitle {
        font-size: 28px;
        line-height: 1;
        font-weight: bold;
    }

    @include atSmall {
        &__title {
            font-size: 100px;
            line-height: 1;
        }

        &__engTitle {
            display: none;
        }
    }

    @include atMedium {
        &__title {
            font-size: 130px;
            line-height: 1;
        }

        &__engTitle {
            display: none;
        }
    }
}
</style>
