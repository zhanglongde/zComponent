import Message from './common/message'
import Confirm from './common/confirm'
import Button from './base/button'
import Slider from './common/slider'
import Switch from './common/switch'
import DatePicker from './common/flatpickr'
import TimePicker from './common/timepicker'

const components = {
  Message,
  Confirm,
  Slider
}

const zComponent = {
  ...components,
  zMessage: Message,
  zConfirm: Confirm,
  zButton: Button,
  zSwitch: Switch,
  zSlider: Slider,
  zDatePicker: DatePicker,
  zTimePicker: TimePicker
}

const install = function(Vue) {
  Object.keys(zComponent).forEach(key => {
    Vue.component(key, zComponent[key]);
  });

  Vue.prototype.$confirm = Confirm
  Vue.prototype.$message = Message
}

export default install
