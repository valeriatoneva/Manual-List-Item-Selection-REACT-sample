import { useGlobalContext } from '../hooks/context-hooks';
import { IgrAvatar, IgrList, IgrListItem } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import styles from './master-view.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function MasterView() {
  const classes = createClassTransformer(styles);
  const navigate = useNavigate();
  const { globalState, setGlobalState } = useGlobalContext();

  function clickGroup() {
    navigate(`/master-view1`);
    setGlobalState(prevState => { prevState.menuSelectedItem = 'Home'; return { ...prevState }; });
  }
  function clickGroup1() {
    setGlobalState(prevState => { prevState.menuSelectedItem = 'Profile'; return { ...prevState }; });
    navigate(`/master-view1`);
  }

  return (
    <>
      <div className={classes("row-layout master-view-container")}>
        <IgrList className={classes("list")}>
          <div style={{ display: 'contents' }} onClick={clickGroup}>
            <IgrListItem selected={"Home" === globalState.menuSelectedItem}>
              <div slot="start">
                <IgrAvatar shape="circle" className={classes("avatar")}>
                  <span className={classes("material-icons")}>
                    <span>person</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title">Home</div>
              <div slot="subtitle">Subtitle...</div>
              <span slot="end" className={classes("material-icons icon")}>
                <span>star</span>
              </span>
            </IgrListItem>
          </div>
          <div style={{ display: 'contents' }} onClick={clickGroup1}>
            <IgrListItem selected={"Profile" === globalState.menuSelectedItem}>
              <div slot="start">
                <IgrAvatar shape="circle" className={classes("avatar")}>
                  <span className={classes("material-icons")}>
                    <span>person</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title">Profile</div>
              <div slot="subtitle">Subtitle...</div>
              <span slot="end" className={classes("material-icons icon")}>
                <span>star</span>
              </span>
            </IgrListItem>
          </div>
          <div style={{ display: 'contents' }} onClick={() => setGlobalState(prevState => { prevState.menuSelectedItem = 'Messages'; return { ...prevState }; })}>
            <IgrListItem selected={"Messages" === globalState.menuSelectedItem}>
              <div slot="start">
                <IgrAvatar shape="circle" className={classes("avatar")}>
                  <span className={classes("material-icons")}>
                    <span>person</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title">Messages</div>
              <div slot="subtitle">Subtitle...</div>
              <span slot="end" className={classes("material-icons icon")}>
                <span>star</span>
              </span>
            </IgrListItem>
          </div>
          <IgrListItem>
            <div slot="start">
              <IgrAvatar shape="circle" className={classes("avatar")}>
                <span className={classes("material-icons")}>
                  <span>person</span>
                </span>
              </IgrAvatar>
            </div>
            <div slot="title">Title goes here</div>
            <div slot="subtitle">Subtitle...</div>
            <span slot="end" className={classes("material-icons icon")}>
              <span>star</span>
            </span>
          </IgrListItem>
          <IgrListItem>
            <div slot="start">
              <IgrAvatar shape="circle" className={classes("avatar")}>
                <span className={classes("material-icons")}>
                  <span>person</span>
                </span>
              </IgrAvatar>
            </div>
            <div slot="title">Title goes here</div>
            <div slot="subtitle">Subtitle...</div>
            <span slot="end" className={classes("material-icons icon")}>
              <span>star</span>
            </span>
          </IgrListItem>
          <IgrListItem>
            <div slot="start">
              <IgrAvatar shape="circle" className={classes("avatar")}>
                <span className={classes("material-icons")}>
                  <span>person</span>
                </span>
              </IgrAvatar>
            </div>
            <div slot="title">Title goes here</div>
            <div slot="subtitle">Subtitle...</div>
            <span slot="end" className={classes("material-icons icon")}>
              <span>star</span>
            </span>
          </IgrListItem>
        </IgrList>
      </div>
    </>
  );
}
