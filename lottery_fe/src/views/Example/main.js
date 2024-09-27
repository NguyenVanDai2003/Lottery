import React, { useEffect, useState } from 'react';
import '../../assets/css/lottery.scss';

import Popup from "reactjs-popup";
import Content from "./buyticket.js";
import './buyticket.scss';
import axios from "axios";

function Main() {

    const [result, setResult] = useState([])


    useEffect(() => {
        const instance = axios.create({ baseURL: "http://localhost:2002/" });
        instance.get(`numbergen/number_new`)
            .then(res => {
                let arr_nb = []
                const number_tk = res.data;
                arr_nb.push(number_tk)
                let arr_number = arr_nb.join('')
                const a = arr_number.split('')
                setResult(a);
            })
            .catch(error => console.log(error));

        var myVar = setInterval(refen, 30000);
        function refen() {
            return window.location.reload()
        }

    }, [])
    const [prize, setPrize] = useState([])

    useEffect(() => {
        const instance = axios.create({ baseURL: "http://localhost:2002/" });
        // let arr_pri = []
        for (let index = 1; index <= 6; index++) {
            instance.get(`history/${index}`)
                .then(res => {
                    let temp_prize = prize;
                    const number_tk = res.data;
                    // console.log("count", res.data)
                    // arr_pri.push(number_tk)
                    temp_prize.push(number_tk.count_tt);
                    setPrize(temp_prize);
                    console.log("addd", number_tk.count_tt)
                })
                
                .catch(error => console.log(error));
        }




        var myVar = setInterval(refen, 30000);
        function refen() {
            return window.location.reload()
        }

    }, [])

    return (
        <>

            <div className=" main">
                <header>
                    <div className="banner">
                        <div className="row">
                            <div className="col-md-4 w-100 img-l">
                                <img className='starsmall' src={require('../../assets/images/star-small.png')} />
                                <img className='starbig' src={require('../../assets/images/star-big.png')} />
                                <img className='tkl' src={require('../../assets/images/ticket-l.png')} />
                            </div>
                            <div className="col-md-4 w-100 text">
                                <p>The PancakeSwap Lottery</p>
                                <p className="prize">$105,846</p>
                                <p>in prizes!</p>
                                <div className="butt">
                                    <Popup modal trigger={<button>Click Me</button>}>
                                        {close => <Content close={close} />}
                                    </Popup>
                                </div>
                            </div>
                            <div className="col-md-4 w-100 img-r">
                                <img className='threest' src={require('../../assets/images/three-stars.png')} />
                                <img className='tkr' src={require('../../assets/images/ticket-r.png')} />
                            </div>
                        </div>

                    </div>
                </header>
                <div className="main4">
                    <div className="py-5">
                        <h1 className="text">Finished Rounds</h1>
                        <div className="row">
                            <div className="col-md-4 ">

                            </div>

                            <div className="col-md-4">
                                <div className="btn-his">
                                    <a>All History</a>
                                    <a>Your History</a>
                                </div>
                            </div>
                            <div className="col-md-4 ">

                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className=" main5">
                            <div className="row">
                                <div className="col-md-6 c-left my-3">
                                    <h5>Round: <span className="round">100</span></h5>
                                    <p>Drawn Dec 12, 2022, 7:00 AM</p>
                                </div>
                                <div className="col-md-6 c-right my-3">
                                    <a><i className="fa fa-rotate-right"></i></a>
                                    <a><i className="fa fa-arrow-right"></i></a>
                                    <a><i className="fa fa-arrow-left"></i></a>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <div className="col-md-3 under">
                                    <h4>Winning Number</h4>
                                </div>
                                <div className="col-md-9 col-ms-12 num0">
                                    <div className="numbergen0">
                                        <p>
                                            <span className="nu0"></span>
                                            <span className="nu1"> {result[0]}</span>
                                            <span className="nu2">{result[1]}</span>
                                            <span className="nu3">{result[2]}</span>
                                            <span className="nu4">{result[3]}</span>
                                            <span className="nu5">{result[4]}</span>
                                            <span className="nu6">{result[5]}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="box1">
                                <div className="row">
                                    <div className="col-md-3 left-detail">
                                        <h4>Prize pot</h4>
                                        <p className="priz">~$94.314</p>
                                        <p className="cake">25,943 CAKE</p>
                                        <p className="total">Total player this round: 234</p>
                                    </div>
                                    <div className="col-md-9  right-detail">
                                        <h5>Match the winning number in the same order to share prizes.</h5>

                                        <div className="row box2">
                                            <div className="col-md-3">
                                                <p className="match">Match first 1</p>

                                                <p className="texts">~$555</p>
                                                <p className="texts">{prize[0]} Winning Tickets</p>
                                            </div>
                                            <div className="col-md-3">
                                                <p className="match">Match first 2</p>

                                                <p className="texts">~$555</p>
                                                <p className="texts">...Winning Tickets</p>
                                            </div>
                                            <div className="col-md-3">
                                                <p className="match">Match first 3</p>

                                                <p className="texts">~$555</p>
                                                <p className="texts">...Winning Tickets</p>
                                            </div>
                                            <div className="col-md-3">
                                                <p className="match">Match first 4</p>

                                                <p className="texts">~$555</p>
                                                <p className="texts">...Winning Tickets</p>
                                            </div>
                                            <div className="col-md-3">
                                                <p className="match">Match first 5</p>

                                                <p className="texts">~$555</p>
                                                <p className="texts">...Winning Tickets</p>
                                            </div>
                                            <div className="col-md-3">
                                                <p className="match ">Match first 6</p>

                                                <p className="texts">~$555</p>
                                                <p className="texts">...Winning Tickets</p>
                                            </div>
                                            <div className="col-md-3">
                                                <p className="burn">Burn</p>

                                                <p className="texts">~$555</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>

                </div>
                <div className="container">
                    <h1 className="text1">How to Play</h1>
                    <p className="text2">If the digits on your tickets match the winning numbers in the correct order, you win a portion of the prize pool.</p>
                    <p className="text2"> Simple!</p>
                    <div className="row py-5">
                        <div className="col-4" >

                            <div className="jumbotron main3">
                                <div className="">
                                    <h4>Wait for the Draw</h4>
                                    <p>Prices are set when the round starts, equal to 5 USD in CAKE per ticket.</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-4 ">
                            <div className="jumbotron main3">
                                <div className="">
                                    <h4>Check for Prizes</h4>
                                    <p>There is one draw every day alternating between 0 AM UTC and 12 PM UTC.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 ">
                            <div className="jumbotron main3">
                                <div className="">
                                    <h4>Buy Tickets!</h4>
                                    <p>Once the round’s over, come back to the page and check to see if you’ve won!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                    <div className=" main6">
                        <div className="row">
                            <div className="col-md-9">
                                <h2>Winning Criteria</h2>
                                <h5>The digits on your ticket must match in the correct order to win.</h5>
                                <p>Here’s an example lottery draw, with two tickets, A and B.</p>
                                <p>- Ticket A: The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket only wins a “Match first 3” prize.</p>
                                <p>- Ticket B: Even though the last 5 digits match, the first digit is wrong, so this ticket doesn’t win a prize.</p>
                                <p>Prize brackets don’t ‘stack’: if you match the first 3 digits in order, you’ll only win prizes from the ‘Match 3’ bracket, and not from ‘Match 1’ and ‘Match 2’.</p>
                            </div>
                            <div className="col-md-3 number">

                                <div className="numbergen">
                                    <p>
                                        <span className="nu0"></span>
                                        <span className="nu1">9</span>
                                        <span className="nu2">1</span>
                                        <span className="nu3">3</span>
                                        <span className="nu4">6</span>
                                        <span className="nu5">6</span>
                                        <span className="nu6">2</span>
                                    </p>
                                </div>
                                <div className="icon1">
                                    <p>
                                        <span><i className="fa fa-check"></i></span>
                                        <span><i className="fa fa-check"></i></span>
                                        <span><i className="fa fa-check"></i></span>
                                        <span className="false">x</span>
                                        <span><i className="fa fa-check"></i></span>
                                        <span><i className="fa fa-check"></i></span>
                                    </p>
                                </div>
                                <div className="check1">
                                    <p>
                                        <span className="ch1">A</span>
                                        <span className="ch2">9</span>
                                        <span className="ch3">1</span>
                                        <span className="ch4">3</span>
                                        <span className="ch5">9</span>
                                        <span className="ch6">6</span>
                                        <span className="ch7">2</span>
                                    </p>
                                </div>
                                <div className="icon2">
                                    <p>
                                        <span className="false">x</span>
                                        <span><i className="fa fa-check"></i></span>
                                        <span><i className="fa fa-check"></i></span>
                                        <span><i className="fa fa-check"></i></span>
                                        <span><i className="fa fa-check"></i></span>
                                        <span><i className="fa fa-check"></i></span>
                                    </p>
                                </div>
                                <div className="check2">
                                    <p>
                                        <span className="ch1">B</span>
                                        <span>0</span>
                                        <span>1</span>
                                        <span>3</span>
                                        <span>9</span>
                                        <span>6</span>
                                        <span>2</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-8 main1">
                            <h2>Prize Funds</h2>
                            <p>The prizes for each lottery round come from three sources:</p>
                            <h4>Ticket Purchases</h4>
                            <p>- 100% of the CAKE paid by people buying tickets that round goes back into the prize pools.</p>
                            <h4>Rollover Prizes</h4>
                            <p>- After every round, if nobody wins in one of the prize brackets, the unclaimed CAKE for that bracket rolls over into the next round and are redistributed among the prize pools.</p>
                            <h4>CAKE Injections</h4>
                            <p>- An average total of 35,000 CAKE from the treasury is added to lottery rounds over the course of a week. This CAKE is of course also included in rollovers! Read more in our guide to <span>CAKE Tokenomics</span></p>
                        </div>
                        <div className="col-md-4 main2">

                            <img src={require('../../assets/images/prize.png')} width="120" height="40" className="img-responsive img1" alt="Image" />
                            <div className="col-md-6 col-l">
                                <h5>DIGITS MATCHED</h5>
                                <p> <span className="m1">o</span> Matches first 1</p>
                                <p> <span className="m2">o</span> Matches first 2</p>
                                <p> <span className="m3">o</span> Matches first 3</p>
                                <p> <span className="m4">o</span> Matches first 4</p>
                                <p> <span className="m5">o</span> Matches first 5</p>
                                <p> <span className="m6">o</span> Matches all 6</p>
                                <p> <span className="m7">o</span> Burn Pool</p>
                            </div>
                            <div className="col-md-6 col-r">
                                <h5>PRIZE POOL ALLOCATION</h5>
                                <p>2%</p>
                                <p>3%</p>
                                <p>5%</p>
                                <p>10%</p>
                                <p>20%</p>
                                <p>40%</p>
                                <p>20%</p>
                            </div>
                        </div>

                    </div>
                    <hr></hr>
                </div>
                <div className=" py-3 main7">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="col-md-6 ">
                                <img src={require('../../assets/images/tombola.png')} className="img-responsive" alt="Image" />
                            </div>
                            <div className="col-md-6">
                                <b><h5>Still got questions?</h5></b>
                                <p>Check our in-depth guide on <span>how to play the PancakeSwap lottery!</span></p>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>



            {/* <a class="btn btn-primary" data-toggle="modal" href='#modal-id'>Trigger modal</a>
                                    <div class="modal fade" id="modal-id">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                    <h4 class="modal-title">Modal title</h4>
                                                </div>
                                                <div class="modal-body">

                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

        </>
    )
}

export default Main;
