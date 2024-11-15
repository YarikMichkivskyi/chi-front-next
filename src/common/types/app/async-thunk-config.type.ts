import { extraArgument} from '@/store/store';
import { AppDispatch } from './app';
import { RootState } from './app';

type AsyncThunkConfig = {
    state: RootState;
    dispatch: AppDispatch;
    extra: typeof extraArgument;
};

export { type AsyncThunkConfig };