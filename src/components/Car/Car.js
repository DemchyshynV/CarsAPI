import css from './Car.module.css';

const Car = ({car, deleteCar, setCarForUpdate}) => {
    const {id, model, price, year} = car;

    return (
        <div className={css.Car}>
            <div className={css.container}>
                <div>id: {id}</div>
                <div>model: {model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
            <div className={css.tools}>
                <button onClick={() => setCarForUpdate(car)}>Edit</button>
                <button onClick={() => deleteCar(id)}>Delete</button>
            </div>
        </div>
    );
};

export {Car};
