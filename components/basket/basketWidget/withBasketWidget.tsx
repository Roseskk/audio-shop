'use client'
import React, {ComponentType} from 'react';

const withBasketWidget = <P extends object>(WrappedComponent: ComponentType<P>) => {
    return (props: P) => {
        return (
            <div>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default withBasketWidget;