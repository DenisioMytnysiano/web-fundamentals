import React from 'react';
import './catalogue.css'
import CatalogueService from '../../services/catalogueService';
import CatalogueItem from '../../components/catalogue/catalogueItem';

class Catalogue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        CatalogueService.getItems()
            .then(result => this.setState({ items: result }))
    }

    render() {
        const { items } = this.state;
        const catalogueItems = items.map((x, i) =>
            <CatalogueItem key={i} image={x.image} name={x.name} price={x.price} />
        );
        return (
            <div className="CatalogueContainer">
                {catalogueItems}
            </div>
        );
    }
}

export default Catalogue;