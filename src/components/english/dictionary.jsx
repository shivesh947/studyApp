import React, { Component } from 'react'

export default class Dictionary extends Component {

    state = {
        data: [],
        word: 'read',
        error: false,
        sound: '',
        language: 'en'
    }

    componentDidMount() {
        this.getApi()
    }

    getApi = async () => {
        const { word, language } = this.state;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`;
        this.setState({ data: [], sound: '' }, () =>
            fetch(url)
                .then((response) => {
                    if (response.status !== 200) {
                        this.setState({ error: true })
                        return;
                    }
                    response.json().then((data) => {
                        if (data.length)
                            this.setState({ data, error: false })
                    });
                }
                )
                .catch((err) => {
                    this.setState({ error: true })
                    console.log('Fetch Error :-S', err);
                })
        )
    }

    inputHandle = (event) => {
        const word = event.target.value;
        this.setState({ word })
    }

    playButton = (val) => {
        this.setState({ sound: val }, () => { document.getElementById("sound").play() })
    }

    languageHandle = (event) => {
        const language = event.target.value;
        this.setState({ language }, () => { this.getApi() })
    }

    colorRandom = () => {
        const colors = ['bg-blue-200', 'bg-red-200', 'bg-green-200', 'bg-yellow-200'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    render() {
        const { word, error, data, sound } = this.state;
        return (
            <div>
                <div className="w-screen h-screen hidden md:block absolute" style={{ backgroundSize: "100vw 100vh", zIndex: -10, backgroundImage: 'url(https://img.pngio.com/children-backgrounds-png-wallpaper-cave-cartoon-backgrounds-png-1600_1142.png)' }}>
                </div>

                <div className="mx-auto w-full p-1 md:w-1/2 md:p-0 bg-yellow-200 md:bg-transparent h-screen">
                    <h1 className="text-center text-3xl p-4 bg-blue-100">Dictionary</h1>
                    {
                        error &&
                        <div className="h-10 bg-red-100 pt-2">Sorry bro not found or too much traffic please refresh</div>
                    }

                    <div className="h-12">
                        <input className="border-b-2 border-blue-700 focus:outline-none  outline-none w-1/3" style={{ height: "50px" }} value={word} type="search" placeholder="Enter word" onChange={this.inputHandle} />
                        <select className="w-1/3 py-1 h-full  focus:outline-none  outline-none" onChange={this.languageHandle}>
                            <option value="en"> English </option>
                            <option value="hi"> Hindi </option>
                            <option value="es"> Spanish </option>
                            <option value="fr"> French </option>
                            <option value="ja"> Japanese </option>
                            <option value="ru"> Russian </option>
                            <option value="de"> German </option>
                            <option value="it"> Italian </option>
                            <option value="ko"> Korean </option>
                            <option value="pt"> Brazilian Portuguese </option>
                            <option value="ar"> Arabic </option>
                            <option value="op"> Turkish </option>
                        </select>
                        <input className="w-1/3 -mt-3 h-full bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 pt-1" type="button" value="Search" onClick={() => this.getApi()} />
                    </div>

                    <div className="-mt-1 border-blue-600 border-t-4 overflow-scroll" style={{ maxHeight: "80vh" }}>
                        {
                            (data && data.length) ?
                                (
                                    data.map((res, index) => (
                                        <div key={index} className={`${this.colorRandom()}`}>
                                            <div className="border-b-2 mx-auto p-4">
                                                <div className="flex justify-between">
                                                    <p className="text-2xl">Word : {res.word}</p>
                                                    {
                                                        (res.phonetics[0] && res.phonetics[0].length) && <i className="-mt-4 bg-blue-500 cursor-pointer fa fa-play mt-auto pb-3 pl-8 pt-5 px-6 hover:text-blue-900" style={{ fontSize: "30px" }} aria-hidden="true" onClick={() => { this.playButton(res.phonetics[0].audio) }}></i>
                                                    }
                                                </div>
                                                {
                                                    res.meanings.map((mm, index) => (
                                                        <div key={index}>
                                                            <p className="capitalize text-right p-2 font-medium text-lg underline">{mm.partOfSpeech}</p>
                                                            <div>
                                                                <h1 className="text-gray-600">Meaning</h1>
                                                                <ol className="p-4 list-decimal pt-0 ">{mm.definitions.map((dd, index) => (
                                                                    <li key={index} className="md-1"> {dd.definition}
                                                                        {dd.example && <p>Example: {dd.example}</p>}</li>
                                                                ))}
                                                                </ol>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))

                                ) : 'not found'
                        }
                    </div>
                    <audio className="hidden" style={{ display: "none" }} controls="Play" id="sound" src={sound} />
                </div>
            </div>
        )

    }
}
