import Button from './base/button'
import Icon from './base/icon'
import Input from './base/input'
import Textarea from './base/textarea'
import Radio from './base/radio'
import Checkbox from './base/checkbox'
import {Select, Option} from './base/select'

import Message from './common/message'
import Confirm from './common/confirm'
import Slider from './common/slider'
import Switch from './common/switch'
import DatePicker from './common/flatpickr'
import TimePicker from './common/timepicker'
import Badge from './common/badge'
import Steps from './common/steps'

import {List, ListItem} from './container/list'
import Tree from './container/tree'
import Transfer from './container/transfer'


const components = {
  Message,
  Confirm,
  Slider,
  Steps,
  Badge,
  List,
  ListItem,
  Tree,
  Transfer,
  Icon,
  Radio,
  Checkbox
}

const zComponent = {
  ...components,
  zMessage: Message,
  zConfirm: Confirm,
  zButton: Button,
  zSwitch: Switch,
  zSlider: Slider,
  zDatePicker: DatePicker,
  zTimePicker: TimePicker,
  zSelect: Select,
  zOption: Option,
  iTree: Tree,
  iInput: Input,
  iTextarea: Textarea
}

const install = function(Vue) {
  Object.keys(zComponent).forEach(key => {
    Vue.component(key, zComponent[key]);
  });

  Vue.prototype.$confirm = Confirm
  Vue.prototype.$message = Message
}

export default install
