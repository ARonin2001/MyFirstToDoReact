import './Sort.css';
import SortButton from './SortButton/SortButton';

const Sort = (props) => {
    return (
        <div class="sort">
            <h2 class="sort__title title">Sort</h2>
            <div class="sort__buttons">
                <SortButton text={"performed"} />
                <SortButton text={"fulfilled"} />
            </div>
        </div>
    );
}

export default Sort;