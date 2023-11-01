import IShopItem from "../../interfaces/IShopItem";
import styles from "./ShopCardFC.module.css";

const ShopCardFC = (props : { item : IShopItem }) => {
    const item = props.item;
    return (
        <>
            <div className={styles.main__content}>
                <h2>FC: {item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div className={styles.description}>
                {item.descriptionFull}
                </div>
                <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
                <div className="divider"></div>
                <div className={styles.purchase__info}>
                    <div className="price">{item.currency + item.price.toFixed(2)}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        </>
    )
}

export default ShopCardFC;