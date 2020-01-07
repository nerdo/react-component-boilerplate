import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const setupEnzyme = function () {
  configure({ adapter: new Adapter() })
}

module.exports.setupEnzyme = setupEnzyme
export default setupEnzyme
