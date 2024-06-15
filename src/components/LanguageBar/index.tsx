import React from 'react'

import { Select, Form} from 'antd'

import styles from './index.module.less'

const { Option } = Select;


const LanguageBar = () => {
    function handleChange(value: string) {
        language = value;
    }

    return (
        <Form>
        <Form.Item
          label="目标语言"
          name="select"
        >
          <Select defaultValue="英文" style={{ width: 120 }} onChange={handleChange}>
            <Option value="英文">英文</Option>
            <Option value="中文">中文</Option>
            <Option value="法语">法语</Option>
          </Select>
        </Form.Item>
        </Form>
      );
}

let language = "英文";

export function getLanguage() {
    return language;
}

export default LanguageBar
