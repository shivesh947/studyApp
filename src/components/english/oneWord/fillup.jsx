import React, { Component } from 'react'
import CompleteWord from './completeWord'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { shuffleArray } from '../../customlib/'

export default class index extends Component {
    state = {
        wordList: [],
        completeList: []
    }

    componentDidMount() {
        const { oneWord } = this.props;
        var words = shuffleArray(oneWord).slice(0, 10);
        this.setState({ wordList: words })
    }
    completeListFunction = (index, ch) => {
        const { completeList } = this.state;
        completeList[index] = ch;
        this.setState({ completeList })
    }
    render() {
        const { completeList, wordList } = this.state;
        return (
            <div className="pl-8 p-4 pt-0 md:m-4">
                <ul>
                    {wordList.map((data, index) => (
                        <li key={index} className="mb-8 mt-2 list-decimal text-xl md:text-2xl">
                            <p><span className="mx-2"></span>{data.question}</p>
                            <div className="flex">
                                <CompleteWord completeWord={data.answer} complete={this.completeListFunction} index={index} />
                                {completeList[index] && <CheckCircleOutlineIcon style={{ color: "green", fontSize: "34px" }} className="my-auto ml-2" />}
                            </div>
                        </li>
                    ))
                    }
                </ul>
            </div>
        )
    }
}
