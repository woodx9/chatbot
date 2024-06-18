import React, { useEffect, useState } from 'react'

import { Select, Form} from 'antd'

import styles from './index.module.less'

const { Option } = Select;


const LanguageBar = ({}) => {
    function handleChange(value: string) {
        language = value;
    }

    return (
        <Form>
        <Form.Item
          label={'Target Language'}
          name="select"
        >
          <Select defaultValue={'English'} style={{ width: 120 }} onChange={handleChange}>
            <Option value='English'>{'English'}</Option>
            <Option value='Chinese'>{'Chinese'}</Option>
            <Option value='French'>{'French'}</Option>
          </Select>
        </Form.Item>
        </Form>
      );
}

let language = 'English';

export function getLanguage() {
    return language;
}

export default LanguageBar
