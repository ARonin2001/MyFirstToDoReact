import { memo } from 'react';
import './Sort.css';
import SortButton from './SortButton/SortButton';

const Sort = memo((props) => {
    return (
        <div className="sort">
            <h2 className="sort__title title">Sort</h2>
            <div className="sort__buttons">
                <SortButton text={"performed"} />
                <SortButton text={"fulfilled"} />
            </div>
        </div>
    );
})

export default Sort;