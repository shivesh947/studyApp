import React, { Component } from 'react'

export default class CompleteWord extends Component {
    state = {
        word: [],
        completeWord: ''
    }

    wordAddArray = (e, index) => {
        const letter = e.currentTarget.value;
        const { word } = this.state;
        word[index] = letter;
        this.setState({ word }, () => {
            this.CheckWord()
        });
    }

    componentDidMount() {
        const { completeWord } = this.props;
        this.setState({ completeWord }, () => {
            this.wordAddStarting()
        })
    }

    wordAddStarting = () => {
        const { word, completeWord } = this.state;
        const str = completeWord
        const arr = str.split('');
        for (var i = 0; i < arr.length; i = i + 2) {
            word[i] = arr[i];
        }
        this.setState({ word })
    }

    wordMake = () => {
        const { word, completeWord } = this.state;
        const str = completeWord
        const arr = str.split('');
        const inputList = arr.map((dta, index) => {
            return (
                index % 2 === 0 ?
                    <input key={index} type="text" disabled value={dta} className="bg-transparent border-b-2 focus:outline-none outline-none text-center text-xl w-8" /> :
                    <input key={index} type="text" style={{ borderBottom: "4px solid black" }} value={word[index] || ''}
                        className="bg-transparent border-b-2 focus:outline-none outline-none text-center text-xl w-8" maxLength="1"
                        onChange={(e) => this.wordAddArray(e, index)}
                    />
            )
        })
        return inputList;
    }

    CheckWord = () => {
        const { word, completeWord } = this.state;
        const str = word.join("");
        const { complete, index } = this.props;
        str === completeWord ? complete(index, true) : complete(index, false)
    }

    render() {
        this.wordMake()
        return (
            <div>
                { this.wordMake()}
            </div>
        )
    }
}
