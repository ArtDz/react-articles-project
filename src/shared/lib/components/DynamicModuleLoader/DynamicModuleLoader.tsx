import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from '@/app/providers/StoreProvider';

export type ReducersList = {
    [key in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
    children: ReactNode
}

export const DynamicModuleLoader = (props : DynamicModuleLoaderProps) => {
    const {
        reducers, removeAfterUnmount = true, children
    } = props

    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap()
        Object.entries(reducers).forEach(([key, reducer]) => {
            const mounted = mountedReducers[key as StateSchemaKey]
            if (!mounted) {
                store.reducerManager.add(key as StateSchemaKey, reducer)
                dispatch({ type: `@INIT ${key} reducer` })
            }
        })

        return () => {
            Object.entries(reducers).forEach(([key, _]) => {
                if (removeAfterUnmount) {
                    store.reducerManager.remove(key as StateSchemaKey)
                    dispatch({ type: `@DESTROY ${key} reducer` })
                }
            })
        }
        // eslint-disable-next-line
    }, [])

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    )
}
