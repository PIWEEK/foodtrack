<template>
  <div class="tupper">
    <div class="row-flex">
      <h3>{{item.name}}</h3>
      <div class="poo-date">
        <span>2 meses</span>
        <IconBell className="icon-bell"></IconBell>
      </div>
    </div>
    <div class="row-flex">
      <div class="pax">
        <IconBell className="icon-bell"></IconBell>
        <span>2 rac</span>
      </div>
      <div class="date">
        <IconBell className="icon-bell"></IconBell>
        <span>12/05/2018</span>
      </div>
      <IconBell className="icon-bell"></IconBell>
    </div>
  </div>
</template>

<script>
import IconBell from '@/icons/icon-bell.vue'

export default {
  name: 'TupperItem',
  components: { IconBell },
  props: {
    item: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.tupper {
  border-bottom: 1px solid $dark-shade-25;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  .row-flex {
    h3 {
      max-height: 55px;
      overflow: hidden;
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
  padding: .4rem .6rem;
  justify-content: center;
  width: 125px;

  span {
    font-size: 10px;
    font-weight: bold;
  }

  svg {
    fill: white;
    margin-left: .6rem;
    width: 12px;
  }
}
</style>
