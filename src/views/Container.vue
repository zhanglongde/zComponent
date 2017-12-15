<template>
  <div class="by-container">
    <div class="by-content">
      <h1>容器组件</h1>
    </div>
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
    <div class="by-content">
      <div>
        <button @click="toggleModal">Toggle Modal</button>
        <button @click="toggleCenteredModal">Toggle Centered Modal</button>
      </div>
      <div>
        <button @click="toggleTransitionNoneModal">Toggle TransitionNone Modal</button>
        <button @click="toggleTransition3dModal">Toggle Transition3d Modal</button>
      </div>
      <Modal v-model="onOff">
        <div class="modal-header">
          header
        </div>
        <div class="modal-body">
          body
        </div>
        <div class="modal-footer">
          footer
        </div>
      </Modal>
      <Modal v-model="onOffCentered" :isCentered="true">
        <div class="modal-header">
          header
        </div>
        <div class="modal-body">
          body centered
        </div>
        <div class="modal-footer">
          footer
        </div>
      </Modal>
      <Modal v-model="onOffTransitionNone" :isCentered="true" :transition="''">
        <div class="modal-header">
          header2
        </div>
        <div class="modal-body">
          body transition none
        </div>
        <div class="modal-footer">
          footer
        </div>
      </Modal>
      <Modal v-model="onOffTransition3d" :isCentered="true" transition="three-d">
        <div class="modal-header">
          header2
        </div>
        <div class="modal-body">
          body transition none
        </div>
        <div class="modal-footer">
          footer
        </div>
      </Modal>
      <button @click="showModal">全局Modal</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Container',
    data () {
      return {
        fruits: [
          {value: null, text:'请选择'},
          {value:'apple-id', text:'apple', active: true},
          {value:'banana-id', text:'banana', selected: true},
          {value:'orange-id', text:'orange', disabled: true},
          {value:'pear-id', text:'pear'}],
        fruitsSelected: 'apple-id',
        onOff: false,
        onOffCentered: false,
        onOffTransitionNone: false,
        onOffTransition3d: false
      }
    },
    methods: {
      lisItemSelected (item) {
        console.log('list item selected...', item)
      },
      toggleModal () {
        this.onOff = !this.onOff
      },
      toggleCenteredModal () {
        this.onOffCentered = !this.onOffCentered
      },
      toggleTransitionNoneModal () {
        this.onOffTransitionNone = !this.onOffTransitionNone
      },
      toggleTransition3dModal () {
        this.onOffTransition3d = !this.onOffTransition3d
      },
      showModal () {
        console.log('show modal...')
        this.$modal({
          title: 'Title',
          content: '<p>Content of dialog</p><p>Content of dialog</p>',
          footer: 'ok cancel'
        })
      }
    }
  }
</script>
