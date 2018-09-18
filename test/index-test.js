import { expect } from 'chai';
import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import BandInput from '../src/components/BandInput'
import BandsContainer from '../src/containers/BandsContainer'
import sinon from 'sinon'
import { renderer } from '../src/index'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import manageBand from '../src/reducers/manageBand'
import App from '../src/App'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
