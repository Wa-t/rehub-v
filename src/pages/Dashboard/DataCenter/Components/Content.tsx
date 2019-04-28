import { Button, Input, Layout, Radio } from 'antd';
import { KosProps } from 'kos-core';
import * as React from 'react';
import { AutoWrapper } from 'src-root/components';
import { Field, Form, ToolbarField } from 'src-root/components/kos-form-antd';

import model from '../model';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
interface IProps extends KosProps {}

@AutoWrapper({ KOSconfig: { model, namespace: "dataCenter" } })
export class Content extends React.Component<IProps> {
  /*
   * 用于直接的事件绑定提交逻辑
   **/
  public handleSubmit = () => {
    const { dispatch } = this.props;
    const { getNamespace } = this.props;

    const result = Form.validate(getNamespace!(), "addForm", (results: any) => {
      if (results) {
        dispatch!({
          type: "save",
          payload: {
            result
          }
        });
      }
    });
  };
  public submitForm = (formData: any) => {
    const { dispatch } = this.props;
    dispatch!({
      type: "save",
      payload: {
        formData
      }
    });
  };

  public render() {
    return (
      <Layout.Content>
        <Form
          name="addForm"
          onSubmit={(formData: any) => this.submitForm(formData)}
        >
          <Field label="Page Name：" field="page_name">
            <Input
              onChange={() => {
                console.log("onChange");
              }}
            />
          </Field>
          <Field label="Page Type：" field="page_type">
            <RadioGroup>
              <RadioButton value="pc">PC</RadioButton>
              <RadioButton value="h5">H5</RadioButton>
            </RadioGroup>
          </Field>
          <Field label="Desc：" field="page_desc">
            <Input.TextArea rows={4} />
          </Field>
          <ToolbarField>
            <Button type="primary" htmlType="submit">
              add
            </Button>
          </ToolbarField>
        </Form>
      </Layout.Content>
    );
  }
}
