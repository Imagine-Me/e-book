import { Suspense, lazy, useEffect } from 'react'

import Sidebar from '../../components/Sidebar/Sidebar'

import { Switch, Route, useHistory } from 'react-router'

import classes from './Home.module.css'
import { connect } from 'react-redux'
import Footer from '../../components/Footer/Footer'

const ViewLayout = lazy(() => import('../View/View'))
const EditLayout = lazy(() => import('../Edit/Edit'))

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
                        <Route path="/create" exact component={EditLayout} />
                        <Route path="/:id" exact component={ViewLayout} />
                    </Switch>
                </Suspense>
            </div>
            <Footer />
        </>
    );
}

const mapStateToProps = state => {
    const length = state.data.length
    return { length }
}

export default connect(mapStateToProps)(Home)