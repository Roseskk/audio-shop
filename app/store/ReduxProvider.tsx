'use client'
import {Provider} from "react-redux";
import {store} from ".";
import {ComponentType} from "react";


const withReduxProvider = <P extends object>(WrappedComponent: ComponentType<P>) => {
    return (props: P) => {
        return (
            <Provider store={store}>
                <WrappedComponent {...props} />
            </Provider>
        )
    }
}

export default withReduxProvider;