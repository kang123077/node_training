import { atom } from 'recoil'

interface DataProps {
    title: string;
    description: string;
}

interface B extends DataProps {

}

const DataState = atom<DataProps>({
    key: 'DataState',
    default: {
        title: '',
        description: '',
    },
});

export default DataState;