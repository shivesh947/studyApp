import React, { Component } from 'react'

export default class MathTable extends Component {

    state = {
        page: 1,
        start: 1,
        end: 10,
        endcheck: 10,
        classWidth: 'w-1/6'
    }

    classBlock = "text-lg  bg-gray-100 border-2 flex flex-col p-3";

    componentDidMount() {
        this.screenBreackDown();

        window.addEventListener('resize', (event) => {
            this.screenBreackDown();
        });

        // var mediaQueryList = window.matchMedia('print');
        // mediaQueryList.addListener((mql) => {
        //     if (mql.matches) {
        //         const { end, page } = this.state;
        //         this.setState({ end: end > 6 ? page + 6 : end })
        //     }
        // });

        // window.addEventListener('afterprint', (event) => {
        //     const { end, page } = this.state;
        //     this.setState({ start: page, end: end })
        // });

    }

    componentWillUnmount() {

        window.removeEventListener('resize', (event) => {
            this.screenBreackDown();
        });

        window.removeEventListener('print', (event) => {
            const { end } = this.state;
            this.setState({ end: end - 2 });
        });

        window.removeEventListener('afterprint', (event) => {
            const { end, page } = this.state;
            this.setState({ start: page, end: end })
        });
    }

    screenBreackDown = () => {
        if (window.innerWidth < 600) {
            this.setState({ page: 1, start: 1, end: 2, endcheck: 2, classWidth: 'w-1/2' })
        }
        else if (window.innerWidth > 600 && window.innerWidth < 700) {
            this.setState({ page: 1, start: 1, end: 4, endcheck: 4, classWidth: 'w-1/4' })
        }
        else if (window.innerWidth > 700 && window.innerWidth < 1000) {
            this.setState({ page: 1, start: 1, end: 6, endcheck: 6, classWidth: 'w-1/5' })
        }
        else if (window.innerWidth > 1000 && window.innerWidth < 1350) {
            this.setState({ page: 1, start: 1, end: 8, endcheck: 8, classWidth: 'w-1/6' })
        }
        else {
            this.setState({ page: 1, start: 1, end: 10, endcheck: 10, classWidth: 'w-1/6' })
        }
    }

    tableRange = (start, end, steps) => {
        let arr = [];
        for (var i = start; i <= end; i = i + steps) {
            arr.push(i);
        }
        return arr;
    }

    noOfTable = () => {
        const { start, end, classWidth } = this.state;
        const numbers = this.tableRange(start, end, 1);
        const list = numbers.map((whichTable, index) => {
            return <div key={index} className={classWidth}>
                <h1 className="text-center text-3xl bg-gray-100 border-2 p-2">{whichTable}</h1>
                {this.tablePrint(whichTable)}
            </div>
        });
        return <div className="flex">{list}</div>;
    }

    tablePrint = (whichTable) => {
        const numbers = this.tableRange(1, 15, 1);
        const list = numbers.map((number, index) => {
            return <span key={index}>{`${whichTable} * ${number} = ${number * whichTable}`}</span>
        });
        return <div className={this.classBlock}>{list}</div>;
    }

    pagination = (val) => {
        const { page, start, end, endcheck } = this.state;
        if (page < 90) {
            const pageselect = val === 1 ? (page + 1) : (page === 1 ? 1 : page - 1);

            if (val === 1) {
                this.setState({ page: pageselect, start: start + 1, end: end + 1 })
            }
            else {
                if (pageselect > 1)
                    this.setState({ page: pageselect, start: start - 1, end: end - 1 })
                else {
                    this.setState({ page: 1, start: 1, end: endcheck })
                }
            }
        }
        else {
            this.setState({ page: 1, start: 1, end: endcheck })
        }
    }

    render() {
        return (
            <div className="bg-gray-100 h-screen w-screen">
                <h1 className="text-3xl text-center p-4">Maths Table</h1>
                <div>
                    {this.noOfTable()}
                </div>
                <div className="flex p-4 justify-between">
                    <input type="button" value="previous" onClick={() => { this.pagination(-1) }} className="bg-blue-200 border-2 border-blue-400 capitalize focus:outline-none font-medium hover:bg-blue-400 outline-none p-1 px-4 rounded-full" />
                    <input type="button" value="next" onClick={() => { this.pagination(1) }} className="bg-blue-200 border-2 border-blue-400 capitalize focus:outline-none font-medium hover:bg-blue-400 outline-none p-1 px-4 rounded-full" />
                </div>
            </div>
        )
    }
}
