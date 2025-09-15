import { IgrButton, IgrRipple } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import styles from './master-view1.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function MasterView1() {
  const classes = createClassTransformer(styles);
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("row-layout master-view-1-container")}>
        <p className={classes("typography__body-1 text")}>
          <span>navigated</span>
        </p>
        <IgrButton type="button" onClick={() => navigate(`/master-view`)} className={classes("button")}>
          <span>Go back</span>
          <IgrRipple></IgrRipple>
        </IgrButton>
      </div>
    </>
  );
}
