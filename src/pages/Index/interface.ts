import { FormComponentProps } from 'antd/lib/form';
import { CurrentUser } from '@/models/global'

export interface IProps extends FormComponentProps {
    currentUser?: CurrentUser
}

export interface IState {
    canvas: HTMLCanvasElement
}
