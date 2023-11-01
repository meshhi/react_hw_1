import IShopItem from "../../interfaces/IShopItem";
import styles from "./ShopCardCC.module.css";
import React from "react";

class ShopCardCC extends React.Component<{ item : IShopItem }> {
    render() {
        return (
            <>
                <div className={styles.main__content}>
                    <h2>CC: {this.props.item.brand}</h2>
                    <h1>{this.props.item.title}</h1>
                    <h3>{this.props.item.description}</h3>
                    <div className={styles.description}>
                    {this.props.item.descriptionFull}
                    </div>
                    <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
                    <div className="divider"></div>
                    <div className={styles.purchase__info}>
                        <div className="price">{this.props.item.currency + this.props.item.price.toFixed(2)}</div>
                        <button>Добавить в корзину</button>
                    </div>
                </div>
            </>
        )
    }
}

export default ShopCardCC;