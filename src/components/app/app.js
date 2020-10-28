import { Link, Switch, Route, useLocation } from 'react-router-dom'
import classnames from 'classnames'

import styles from './app.module.scss'
import { menus } from './menu-config'

function App() {
    const { pathname } = useLocation()

    return (
        <div className={styles.app}>
            <nav>
                {menus.map(menu => (
                    <div key={menu.pathname} className={classnames(pathname === menu.pathname && styles.active)}>
                        <Link to={menu.pathname}>{menu.title}</Link>
                    </div>
                ))}
            </nav>
            <div className={styles.content}>
                <Switch>
                    {menus.map(menu => (
                        <Route key={menu.pathname} exact={menu.exact} path={menu.pathname} component={menu.component} />
                    ))}
                </Switch>
            </div>
        </div>
    )
}

export default App
