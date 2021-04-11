import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div className="flex h-screen">
                <div className="m-auto">
                    <ul className="p-3 text-3xl text-center w-screen ">
                        <Link to="/math"> <li className="bg-red-400 w-full md:w-1/2 mx-auto p-6 hover:bg-red-600">Maths</li></Link>
                        <Link to="/english"><li className="bg-green-400 w-full md:w-1/2 mx-auto p-6 hover:bg-green-600">English</li></Link>
                    </ul>
                </div>
            </div>
        )
    }
}
