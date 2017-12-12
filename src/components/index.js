import Button from './base/button'
import Icon from './base/icon'
import Input from './base/input'
import Textarea from './base/textarea'
import Radio from './base/radio'
import Checkbox from './base/checkbox'
import {Select, Option} from './base/select'

import Message from './data-display/message'
import Banner from './data-display/banner'
import Alert from './data-display/alert'
import Confirm from './data-display/confirm'
import Slider from './common/slider'
import Switch from './common/switch'
import DatePicker from './common/flatpickr'
import TimePicker from './common/timepicker'
import Badge from './data-display/badge'
import Steps from './data-display/steps'

import {List, ListItem} from './container/list'
import Tree from './container/tree'
import Transfer from './container/transfer'


const components = {
  Message,
  Banner,
  Alert,
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
  zTree: Tree,
  zInput: Input,
  zTextarea: Textarea
}

const install = function(Vue) {
  Object.keys(zComponent).forEach(key => {
    Vue.component(key, zComponent[key]);
  });

  Vue.prototype.$message = Message
  Vue.prototype.$banner = Banner
  Vue.prototype.$alert = Alert
  Vue.prototype.$confirm = Confirm
}

export default install
