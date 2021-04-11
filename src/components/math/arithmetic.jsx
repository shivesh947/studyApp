import React, { Component } from 'react'
import { getRandomInt } from '../customlib'

export default class Arithmetic extends Component {

    state = {
        data: {},
        length: 25,
        ind: 0,
        ansList: [],
        sub: false
    }

    ansHandler = React.createRef();

    componentDidMount() {
        this.sumsCreate()
    }

    sumsCreate = () => {
        const operation = ["+", "-", "*"];
        const { length } = this.state
        let arr = [];

        for (let i = 1; i <= length; i++) {
            let a = getRandomInt(1000)
            let b = getRandomInt(1000)
            let op = operation[getRandomInt(operation.length)]
            let ans = eval(`${a + op + b}`)
            let obj = {
                x: a,
                y: b,
                operation: op,
                res: ans
            }
            arr.push(obj);
        }
        this.setState({ data: arr });
    }

    submitAns = () => {
        const { ind, ansList, length } = this.state;
        ansList[ind] = this.ansHandler.current.value;
        this.setState({ ansList }, () => {
            if (ind < length - 1)
                this.ansHandler.current.value = (ansList[ind + 1] ? ansList[ind + 1] : null)
        })

    }
    pagingCheck = (e) => {
        const { ind, ansList } = this.state;

        if (parseInt(e) > 0)
            this.setState({ ind: ind + e }, this.submitAns())
        else
            this.setState({ ind: ind + e }, () => this.ansHandler.current.value = ansList[ind - 1] ? ansList[ind - 1] : null)

    }
    submitResult = () => {
        this.setState({ sub: true })
    }

    render() {
        const { data, length, ind, ansList, sub } = this.state;
        return (
            <div className="min-h-screen p-4" style={{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Graph-paper.svg/768px-Graph-paper.svg.png)" }}>
                <div className="w-full md:w-1/2 mx-auto bg-white pt-10 mt-10">
                    <div className="p-2">
                        <p className="text-center font-bold text-4xl md:text-6xl">Brain booster</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 mx-auto bg-white">
                    <div className="p-2">
                        <p className="text-right font-medium text-xl">Attempts : {ind < length ? (length && (ind + 1) + '/' + length) : (length && ind + '/' + length)}</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mx-auto bg-gray-200">
                    <div className="h-4">
                        <div className="h-4 bg-blue-500" style={{ width: ((ind / length) * 100) + "%" }}>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">

                    {
                        (data && data.length) &&
                        <div className={`w-full md:w-1/2 p-4 bg-white shadow-md  ${sub ? "hidden" : "block"}`}>

                            {
                                data[ind] && (
                                    <>
                                        <div className="flex text-3xl justify-around">
                                            <span className="p-3">{data[ind].x}</span>
                                            <span className="p-3">{data[ind].operation}</span>
                                            <span className="p-3">{data[ind].y}</span>
                                            <span className="p-3">=</span>
                                            <span className="py-3" ref={this.updateAns}>{ansList[ind] ? ansList[ind] : '?'}</span>
                                        </div>
                                        <div className="w-full px-3">
                                            <input type="number" placeholder="type your answer" className="bg-gray-200 h-10 mb-2 w-full" ref={this.ansHandler} />
                                        </div>
                                    </>
                                )
                            }
                            <div className="flex justify-between text-2xl w-full px-0 md:px-4">
                                <button className={`bg-red-500 text-center outline-none focus:outline-none hover:shadow-md text-white w-1/2 ${(ind > 0 && !sub) ? "block" : "hidden"}`} onClick={() => this.pagingCheck(-1)} > <i className="fa fa-arrow-left" aria-hidden="true"> back</i></button>
                                <button className={`bg-blue-500 text-center outline-none focus:outline-none hover:shadow-md text-white w-1/2 ml-auto ${(ind < length && !sub) ? "block" : "hidden"}`} onClick={() => this.pagingCheck(1)} >next <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                                <button className={`w-1/2 bg-blue-500  outline-none focus:outline-none hover:shadow-md text-white ml-auto ${(ind === length && !sub) ? "block" : "hidden"}`} onClick={() => this.submitResult()} >submit</button>
                            </div>
                        </div>
                    }
                    {
                        (sub) &&
                        <div className="text-xl bg-white w-full md:w-1/2">
                            <h1 className="text-2xl font-medium" >Answer Sheet</h1>
                            <div className="overflow-y-auto py-4" style={{ maxHeight: "50vh" }}>
                                {
                                    ansList.map((dd, index) => (
                                        <p key={index}>
                                            {index + 1} : {data[index].x + data[index].operation + data[index].y + '=' + (dd ? dd : "not attempt")}
                                            <span className="ml-2"> <i className={parseInt(data[index].res) === parseInt(dd) ? "fa fa-check" : "fa fa-times"} aria-hidden="true"></i></span>
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    }
                </div>
            </div >
        )
    }
}
