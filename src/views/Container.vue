<template>
  <div class="by-container">
    <div class="by-content">
      <h2>列表</h2>
      <div class="d-flex justify-content-between">
        <List :items="fruits">
          <ListItem slot="item" slot-scope="{item, index}" :item="item" :index="index" class="test" @selected="lisItemSelected">
            {{index+1}}.{{item.text}}
          </ListItem>
        </List>
        <List :items="fruits">
          <ListItem slot="item" slot-scope="{item, index}" :item="item" :index="index" class="test" @selected="lisItemSelected">
            {{item.text}}
          </ListItem>
        </List>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Index',
    data () {
      return {
        fruits: [
          {value: null, text:'请选择'},
          {value:'apple-id', text:'apple', active: true},
          {value:'banana-id', text:'banana', selected: true},
          {value:'orange-id', text:'orange', disabled: true},
          {value:'pear-id', text:'pear'}],
        fruitsSelected: 'apple-id'
      }
    },
    methods: {
      lisItemSelected (item) {
        console.log('list item selected...', item)
      }
    }
  }
</script>
