import { notification } from 'antd';
import { GetKosState, KosDispatch, KosModel as IModel } from 'kos-core';

// import history from "src-root/common/utils/history";
import { IInit } from './interface';
import { add } from './service';

class Model implements IModel<IInit> {
  public namespace: string;
  public initial = {
    name: "123",
    showSavedItem: false,
    tabs: [],
    addForm: {
      page_name: "1234"
    }
  };
  public reducers: any = {
    updateState(state: IInit, { payload }: { payload: IInit }) {
      return {
        ...state,
        ...payload
      };
    }
  };
  public asyncs: any = {
    async save(
      dispatch: KosDispatch,
      getState: GetKosState<IInit>,
      action: any
    ) {
      console.log("action.payload ==>", action.payload);
      const state = getState();
      const { addForm } = state;

      const data = await add({ ...addForm });

      if (data.ok) {
        notification.success({
          message: "Congratulation！",
          description: "add successful！"
        });
        // history.push("/dashboard/monitor");
      }
    }
  };
  public validators = [
    {
      formName: "addForm",
      validators: [
        {
          field: "page_name",
          rules: "required"
        },
        {
          field: "page_desc",
          rules: [
            "required"
            // (getState, { field, value }, data) => value && value.length <= 3,
          ],
          help: "please correctly fill in the area!"
        },
        {
          field: "page_name",
          rules: [
            "required@好好填",
            {
              name: "maxLength",
              data: 4,
              help: "maxLength:{0}"
            }
          ]
        },
        {
          field: "page_name",
          help: "Asynchronous validation failed!",
          rules: {
            data: { a: 1 },
            fn: async (
              { field, value }: any,
              data: any,
              getState?: GetKosState<IInit>
            ) => {
              // const xdata = await add({});
              // console.log("xdata ==>", xdata);
              console.log("field, value, data ==>", field, value, data);
              return true;
            }
          }
        }
      ]
    }
  ];
  public formFieldDisplay = {
    addForm: {
      page_type: (getState: any, { field, value }: any) => {
        return {
          page_desc: value === "pc"
        };
      }
    }
  };
  public setup = () => {
    // `setup` functon could be removed if empty inside.
  };
}

export default new Model();
