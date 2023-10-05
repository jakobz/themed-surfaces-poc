import css from './SurfaceDemo.module.scss';
import cx from 'classnames';

export type Color = 'paper' | 'primary' | 'secondary' | 'contrast';

export function SurfaceDemo(props: { color: Color }) {
    return <div className={ cx(css.root, 'surface-' + props.color) }>
        <div className={ cx(css.row)}>
            { props.color }
        </div>
        <div className={ cx(css.row, 'surface-primary-pale')}>
            Primary
        </div>
        <div className={ cx(css.row, 'surface-secondary-pale')}>
            Secondary
        </div>
        <div className={ cx(css.row, props.color === 'paper' ? 'surface-contrast' : 'surface-paper')}>
            Contrast
        </div>        
        <div className={ cx(css.row)}>
            <div className={ cx(css.button, 'surface-primary') }>Save</div>
            <div className={ cx(css.button, 'surface-secondary') }>Cancel</div>
        </div>
    </div>
}