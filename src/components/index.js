import Button from './base/button'
import Icon from './base/icon'
import Input from './base/input'
import Textarea from './base/textarea'
import Radio from './base/radio'
import Checkbox from './base/checkbox'
import {Select, Option} from './base/select'

import Message from './data-display/message'
import Banner from './data-display/banner'
import Toast from './data-display/toast'
import Toastr from './data-display/toastr'
import Alert from './data-display/alert'
import Confirm from './data-display/confirm'

import Slider from './common/slider'
import Switch from './common/switch'
import Circle from './common/circle'
import Spin from './common/spin'
import Scroll from './common/scroll'
import DatePicker from './common/flatpickr'
import TimePicker from './common/timepicker'
import Badge from './data-display/badge'
import Steps from './data-display/steps'
import Tooltip from './data-display/tooltip'

import {List, ListItem} from './container/list'
import $Modal from './container/modal'
import Modal from './container/modal/confirm'
import Transfer from './container/transfer'
import Tree from './container/tree'
import TreeSelect from './container/tree-select'
import Card from './container/card'

const components = {
  Icon,
  Radio,
  Checkbox,
  Message,
  Banner,
  Toast,
  Toastr,
  Alert,
  Confirm,
  Slider,
  Steps,
  Badge,
  List,
  ListItem,
  Tree,
  TreeSelect,
  Transfer,
  Modal,
  Tooltip,
  Card,
  Spin,
  Scroll
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
  zTextarea: Textarea,
  zModal: Modal,
  zCircle: Circle
}

const install = function(Vue) {
  Object.keys(zComponent).forEach(key => {
    Vue.component(key, zComponent[key]);
  });

  Vue.prototype.$message = Message
  Vue.prototype.$banner = Banner
  Vue.prototype.$toastr = Toastr
  Vue.prototype.$alert = Alert
  Vue.prototype.$confirm = Confirm
  Vue.prototype.$modal = $Modal
}

export default install
