<template>
    <div class="Contact">
        <div class="Contact__background">
            <img :src="require('@/static/images/workflow1.png')" alt="" srcset="" />
        </div>
        <div class="Contact__wrapper">
            <div class="Contact__up_section">
                <div class="Contact__titles">
                    <div class="Contact__titles_sub_title eng">
                        CHANGE FOR HUMANITY,<br />
                        CHANGE FOR YOU.<br />
                        ___<br />
                        ___<br />
                    </div>

                    <div class="Contact__titles_title eng">
                        CONTACT
                    </div>
                </div>

                <ContactForm />
            </div>

            <ContactDetail />
        </div>
    </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'
import ContactDetail from '@/components/ContactDetail'
export default {
    components: {
        ContactForm,
        ContactDetail,
    },
}
</script>

<style lang="scss" scoped>
.Contact {
    position: relative;

    color: $mainWhite;
    width: 100%;

    &__wrapper {
        position: relative;
        width: 100%;
        min-height: 100vh;
        padding: 48px 20px 37px;
        margin: auto;

        display: flex;
        flex-direction: column;
        align-self: flex-start;
        justify-content: center;

        @include atSmall {
            padding: 48px 55px 37px;
        }

        @include atSuperLarge {
            max-width: 1200px;
        }
        @include atUltraLarge {
            max-width: 1200px;
        }
    }

    &__up_section {
        flex: 1;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @include atLarge {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }

    &__titles {
        z-index: 1;
        margin-bottom: 30px;
        &_sub_title {
            font-size: 14px;
            @include atSmall {
                font-size: 16px;
            }
            @include atLarge {
                font-size: 20px;
            }
        }

        &_title {
            font-size: 40px;
            @include atSmall {
                font-size: 49px;
            }
            @include atLarge {
                font-size: 58px;
            }
        }
    }

    &__detail {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        @include atMedium {
            z-index: 1;
            flex-direction: row;
            align-items: flex-end;
        }

        &_lists {
            display: flex;
            &_col {
                &:first-child {
                    width: 96px;
                }
            }
            &_list {
                margin-bottom: 21px;
                &_title {
                    font-size: 16px;
                    @include atSmall {
                        font-size: 20px;
                    }
                    @include atMedium {
                        font-size: 28px;
                    }
                }
                &_value {
                    font-size: 14px;
                    @include atSmall {
                        font-size: 18px;
                    }
                    @include atMedium {
                        font-size: 21px;
                    }
                }

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        &_business_card {
            width: 200px;
            align-self: center;
            margin-top: 20px;

            @include atSmall {
                align-self: flex-start;
            }

            @include atMedium {
                width: 383px;
                align-self: initial;
            }

            img {
                width: 100%;
                box-sizing: border-box;
            }
        }
    }

    // background: url('~@/static/images/contact.png');

    &__background {
        position: absolute;
        background: black;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        img {
            box-sizing: border-box;
            opacity: 0.5;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
