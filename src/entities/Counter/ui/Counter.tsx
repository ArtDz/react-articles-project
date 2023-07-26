import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/CounterSlice';
import { VStack } from '@/shared/ui/Stack';

export const Counter = () => {
    const counterValue = useCounterValue()
    const { t } = useTranslation()
    // @ts-ignore
    const { add, increment, decrement } = useCounterActions()

    const handleInc = () => { increment() }
    const handleDec = () => { decrement() }
    const handleAddFive = () => { add(5) }

    return (
        <VStack gap="8">
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="inc-btn" onClick={handleInc}>{t('Increment')}</Button>
            <Button data-testid="decr-btn" onClick={handleDec}>{t('Decrement')}</Button>
            <Button data-testid="addFive-btn" onClick={handleAddFive}>{t('+5')}</Button>
        </VStack>
    )
}
