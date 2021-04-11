import React, { Component } from 'react'
import oneWord from '../../customlib/oneWord'
import FillUp from './fillup'


export default class index extends Component {
    render() {
        return (
            <div>
                <h1 className="text-4xl text-center my-5">One Word</h1>
                <FillUp oneWord={oneWord} />
            </div>
        )
    }
}
