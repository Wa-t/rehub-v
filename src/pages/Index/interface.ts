import { FormComponentProps } from 'antd/lib/form';
import { CurrentUser } from '@/models/global'

export interface IProps extends FormComponentProps {
    dispatch: (arg: any) => any
}


export interface IState {
    // canvas: HTMLCanvasElement
    loading: boolean

}
