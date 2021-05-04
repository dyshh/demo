import { Link, Switch, Route, useLocation } from 'react-router-dom'
import classnames from 'classnames'

import styles from './app.module.scss'
import { menus } from './menu-config'

function App() {
    const { pathname } = useLocation()

    return (
        <div className={styles.app}>
            <nav>
                {menus.map(({ pathname: pn, title, style }) => {
                    return pn ? (
                        <div
                            style={style}
                            key={pn}
                            className={classnames(styles.item, pathname === pn && styles.active)}
                        >
                            <Link to={pn}>{title}</Link>
                        </div>
                    ) : (
                        <div style={{ ...style }} key={title} className={styles.classTitle}>
                            {title}
                        </div>
                    )
                })}
            </nav>
            <div className={styles.content}>
                <Switch>
                    {menus
                        .filter(menu => !!menu.pathname)
                        .map(menu => (
                            <Route
                                key={menu.pathname || menu.title}
                                exact={menu.exact}
                                path={menu.pathname}
                                component={menu.component}
                                render={menu.render}
                            />
                        ))}
                </Switch>
            </div>
        </div>
    )
}

export default App
