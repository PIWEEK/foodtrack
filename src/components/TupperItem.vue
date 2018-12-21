<template>
  <div class="tupper" @click="detail">
    <div class="row-flex">
      <h3>{{item.name}}</h3>
      <div class="poo-date">
        <span>{{notifyMe}}</span>
        <IconBell className="icon-bell"></IconBell>
      </div>
    </div>
    <div class="row-flex">
      <div class="pax">
        <IconUser className="icon-user"></IconUser>
        <span>{{item.servings}} rac.</span>
      </div>
      <div class="date">
        <IconDate className="icon-date"></IconDate>
        <span>{{cooked}}</span>
      </div>
      <a href="#" @click.prevent="remove">
        <IconTrash className="icon-trash"></IconTrash>
      </a>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

import IconBell from '@/icons/icon-bell.vue'
import IconUser from '@/icons/icon-user.vue'
import IconDate from '@/icons/icon-date.vue'
import IconTrash from '@/icons/icon-trash.vue'

export default {
  name: 'TupperItem',
  components: {
    IconBell,
    IconUser,
    IconDate,
    IconTrash
  },
  props: {
    item: Object
  },
  computed: {
    notifyMe() {
      return moment(this.item.notifyMeAt).fromNow(true)
    },
    cooked() {
      return moment(this.item.cookedAt).format('DD/MM/YYYY')
    }
  },
  methods: {
    remove() {
      this.$store.dispatch('lightboxConfirmRemove', {
        _id: this.item._id,
        name: this.item.name
      })
    },
    detail() {
      this.$store.dispatch('tupperRead', { tagId: this.item.tagId })
      this.$router.replace('/tupper-detail')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.tupper {
  border-bottom: 1px solid $dark-shade-5;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  .row-flex {
    align-items: center;

    h3 {
      font-size: 1.1rem;
      font-weight: bold;
      line-height: 1.5;
      max-height: 55px;
      overflow: hidden;
      max-width: 55%;
    }
  }
}

.poo-date {
  align-items: center;
  background: linear-gradient(270deg, #F8A4D8 0%, #6C63FF 100%);
  border-top-left-radius: 10px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 4px;
  color: white;
  display: flex;
  margin-left: auto;
  padding: .3rem .6rem;
  justify-content: center;
  width: 110px;

  span {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }

  svg {
    fill: white;
    margin-left: .6rem;
    width: 12px;
  }

  &.deadline {
    background: $red;
  }
}

.pax,
.date {
  align-items: center;
  color: $dark-shade-75;
  display: flex;
  margin-right: 1.4rem;

  svg {
    fill: $dark-shade-50;
    margin-right: .6rem;
    width: 14px;
  }
}

.icon-trash {
  fill: $red;
  height: 20px;
  margin-left: auto;
  width: 15px;
}
</style>
