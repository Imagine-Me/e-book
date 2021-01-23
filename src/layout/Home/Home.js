import { Suspense, lazy, useEffect } from 'react'

import Sidebar from '../../components/Sidebar/Sidebar'

import { Switch, Route, useHistory } from 'react-router'

import classes from './Home.module.css'
import { connect } from 'react-redux'

const ViewLayout = lazy(() => import('../View/View'))

const Home = ({ length }) => {
    const history = useHistory()
    useEffect(() => {
        if (length > 0)
            history.push('0')
    }, [])

    return (
        <>
            <Sidebar />
            <div className={classes.Body}>
                <Suspense fallback={<h1>Loading</h1>}>
                    <Switch>
                        <Route path="/:id" exact component={ViewLayout} />
                    </Switch>
                </Suspense>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    const length = state.data.length
    return { length }
}

export default connect(mapStateToProps)(Home)