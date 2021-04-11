import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Math from './math';

import MathTable from './math/table'
import Arithmetic from './math/arithmetic'


import English from './english';
import Dictionary from './english/dictionary'
import oneWord from './english/oneWord/index'


export default class ConditionalRouting extends Component {
    render() {
        return (
            <>
                <Route exact path="/math" component={Math} />
                <Route exact path="/math/Tables" component={MathTable} />
                <Route exact path="/math/Arithmetic" component={Arithmetic} />
                <Route exact path="/english" component={English} />
                <Route exact path="/english/Dictionary" component={Dictionary} />
                <Route exact path="/english/oneWord" component={oneWord} />
            </>
        )
    }
}
