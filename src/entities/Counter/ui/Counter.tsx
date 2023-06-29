import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const { t } = useTranslation()

    const increment = () => { dispatch(counterActions.increment()) }
    const decrement = () => { dispatch(counterActions.decrement()) }

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="inc-btn" onClick={increment}>{t('Increment')}</Button>
            <Button data-testid="decr-btn" onClick={decrement}>{t('Decrement')}</Button>
        </div>
    )
}
