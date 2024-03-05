import Menu from "./components/menu";
import { AiFillHome } from "react-icons/ai";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import ReactApexChart from 'react-apexcharts'
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

export default function App() {

    const [year, setYear] = useState(2024);
    const increase = () => setYear(year + 1)
    const deincrease = () => setYear(year - 1)

    const option = {

        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                colors: ['#feb72f'],
                curve: 'straight'
            },

            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
        },
    };

    const pie = {
        series: [44, 55, 17, 15],

        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270
                }
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'gradient',
            },
            legend: {
                formatter: function (val, opts) {
                    return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
            },
            colors: ['#B195FF', '#56C53A', '#FF7474', '#FFC75B'],

            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    }

    return (
        <div className="w-full h-full flex flex-row space-x-2 justify-center items-start">
            <Menu />
            <div className="w-[1195px] h-[1068px] mt-5 flex flex-col space-y-2 bg-back rounded-3xl">
                <div className="flex flex-row p-5">
                    <div className="w-[218px] h-[72px] bg-back shadow-lg rounded-l-2xl  rounded-br-[90px] rounded-tr-md">
                        <div className="flex flex-row justify-start pl-4 pt-1 items-center space-x-4">
                            <img src="/profile.png" alt="" />
                            <div className="flex flex-col justify-center items-start">
                                <p className="font-black">Tomy M.J</p>
                                <p className="text-lightgray font-medium">Lorem ipsom</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[961px] h-[72px] shadow-lg items-center bg-white rounded-r-2xl pl-10 pr-4 rounded-tl-[90px] rounded-bl-md flex flex-row justify-between">
                        <div className="w-[244px] h-[36px] bg-back shadow-inner rounded-full flex flex-row justify-center items-center">
                            <input type="text" placeholder="Search..." className="bg-back rounded-full focus:border-back focus:outline-none" />
                            <p className="text-gray/40 pr-2">|</p>
                            <button>
                                <img src="/Vector17.png" alt="" />
                            </button>
                        </div>
                        <div className="flex flex-row space-x-5 items-center">
                            <button className="relative h-fit">
                                <img src="/Vector18.png" className="absolute -top-1 -right-1" alt="" />
                                <img src="/Vector11.png" alt="" />
                            </button>
                            <button className="relative h-fit">
                                {/* <img src="/Vector18.png" className="absolute -top-1 -right-1" alt="" /> */}
                                <img src="/Vector12.png" alt="" />
                            </button>
                            <button className="relative h-fit">
                                <img src="/Vector18.png" className="absolute -top-1 -right-1" alt="" />
                                <img src="/Vector13.png" alt="" />
                            </button>
                            <button className="relative h-fit">
                                <img src="/Vector18.png" className="absolute -top-1 -right-1" alt="" />
                                <img src="/Vector14.png" alt="" />
                            </button>
                            <button className="relative h-fit">
                                <img src="/Vector18.png" className="absolute -top-1 -right-1" alt="" />
                                <img src="/Vector15.png" alt="" />
                            </button>
                            <button className="relative h-fit">
                                <img src="/Vector18.png" className="absolute -top-1 -right-1" alt="" />
                                <img src="/Vector16.png" alt="" />
                            </button>
                            <div className="bg-back shadow-inner w-[190px] h-[50px] rounded-xl flex flex-col justify-center items-center space-y-1">
                                <p className="text-sm font-medium ">Latest update: Jan 06, 2024</p>
                                <div className="flex flex-row h-4 justify-center items-center">
                                    <p className="text-sm font-medium text-textgray">Version:</p>
                                    <p className="bg-red text-white rounded-md px-1 text-xs">3.1.4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row space-x-5 px-5">
                    <div className="flex flex-col space-y-5">
                        <div className="w-[816px] h-[440px] bg-white shadow-lg rounded-2xl flex flex-col divide-y-2 divide-softBlue/20 px-5 pt-4">
                            <div className="flex flex-row space-x-5 divide-x-2 divide-softBlue/20 mb-3 ">
                                <div className="flex flex-row justify-center items-center space-x-5">
                                    <div className="flex flex-row justify-center items-center space-x-1 ">
                                        <AiFillHome color="#7790A6" />
                                        <p className="text-softBlue font-bold">Home</p>
                                    </div>
                                    <div className="w-[165px] h-[36px] bg-back shadow-inner rounded-full flex flex-row justify-center items-center ">
                                        <input type="text" placeholder="Select Player" className="bg-back rounded-full w-28 focus:border-back focus:outline-none" />
                                        <p className="text-gray/40 pr-2">|</p>
                                        <button>
                                            <FaAngleDown color="#7790A6" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between pl-5 items-center w-full">
                                    <p className="font-semibold text-softBlue">Video player statistics (2024)</p>
                                    <div className="bg-back shadow-inner p-1 py w-28 rounded-xl font-bold text-softBlue flex flex-row justify-between items-center">
                                        <button onClick={deincrease}>
                                            <FaAngleLeft />
                                        </button>
                                        <p>
                                            {year}
                                        </p>
                                        <button onClick={increase}>
                                            <FaAngleRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center h-full pt-3">
                                <div className="flex flex-col justify-between h-full pb-5">
                                    <div className="flex flex-row justify-start px-4 space-x-3 items-center w-[241px] h-[72px] bg-white shadow-md rounded-xl">
                                        <img src="/Vector19.png" className="h-fit bg-lightWhite shadow-inner rounded-full py-[6px] px-[5px]" alt="" />
                                        <div className="flex flex-col">
                                            <p className="font-medium text-softBlue">Total views</p>
                                            <p className="font-normal text-softBlue">21</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-start px-4 space-x-3 items-center w-[241px] h-[72px] bg-white shadow-md rounded-xl">
                                        <img src="/Vector20.png" className="h-fit bg-lightWhite shadow-inner rounded-full py-[6px] px-[5px]" alt="" />
                                        <div className="flex flex-col">
                                            <p className="font-medium text-softBlue">Total likes</p>
                                            <p className="font-normal text-softBlue">3</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-start px-4 space-x-3 items-center w-[241px] h-[72px] bg-white shadow-md rounded-xl">
                                        <img src="/Vector21.png" className="h-fit bg-lightWhite shadow-inner rounded-full py-[6px] px-[5px]" alt="" />
                                        <div className="flex flex-col">
                                            <p className="font-medium text-softBlue">Total disLikes</p>
                                            <p className="font-normal text-softBlue">5</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-start px-4 space-x-3 items-center w-[241px] h-[72px] bg-white shadow-md rounded-xl">
                                        <img src="/Vector22.png" className="h-fit bg-lightWhite shadow-inner rounded-full py-[6px] px-[5px]" alt="" />
                                        <div className="flex flex-col">
                                            <p className="font-medium text-softBlue">Total comments</p>
                                            <p className="font-normal text-softBlue">12</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-5 ">
                                    <ReactApexChart options={option.options} series={option.series} type="line" height={350} />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-3xl w-[816px] h-[208px] shadow-lg flex flex-col divide-y-2 divide-softBlue/20 p-5">
                            <div className="flex flex-row justify-between items-center pb-3">
                                <div className="flex flex-row space-x-2 justify-center items-center">
                                    <img src="/Vector23.png" className="h-fit " alt="" />
                                    <p className="font-bold text-softBlue">Comments</p>
                                </div>
                                <div className="w-[244px] h-[32px] bg-back shadow-inner rounded-full flex flex-row justify-center items-center">
                                    <input type="text" placeholder="Search..." className="bg-back rounded-full focus:border-back focus:outline-none" />
                                    <p className="text-gray/40 pr-2">|</p>
                                    <button>
                                        <img src="/Vector17.png" alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-row justify-around items-center py-3">
                                <p className="font-medium text-softBlue">ID</p>
                                <p className="font-medium text-softBlue">User</p>
                                <p className="font-medium text-softBlue">Comment</p>
                                <p className="font-medium text-softBlue">Status</p>
                                <p className="font-medium text-softBlue">Actions</p>
                            </div>
                            <div className="flex flex-row justify-around items-center py-3">
                                <p className="font-medium text-softBlue">No Recoard Found!</p>
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <div className="flex flex-row space-x-5">
                                    <FaAngleLeft color="#7790A6" />
                                    <FaAngleRight color="#7790A6" />
                                </div>
                                <p className="text-softBlue font-medium pl-12">Page 1 of 1</p>
                                <div className="flex flex-row space-x-3 justify-center items-center">
                                    <p className="font-medium text-softBlue text-sm">Go to page:</p>
                                    <p className="font-medium text-softBlue text-sm">1</p>
                                    <div className="flex flex-row space-x-2">
                                        <FaAngleDown color="#7790A6" />
                                        <FaAngleUp color="#7790A6" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <div className="w-[322px] h-[153px] bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row justify-center items-center space-x-2">
                                    <img src="/Vector24.png" className="h-4" alt="" />
                                    <p className="text-softBlue font-medium">Users Statistics</p>
                                </div>
                                <div>
                                    <img src="/Vector25.png" alt="" />
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row justify-center items-center space-x-2">
                                    <p className="text-softBlue font-medium">2</p>
                                    <p className="text-softBlue font-medium">Total</p>
                                </div>
                                <div>
                                    <img src="/Vector26.png" alt="" />
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row justify-center items-center space-x-2">
                                    <p className="text-softBlue font-medium">0</p>
                                    <p className="text-softBlue font-medium">Banned</p>
                                </div>
                                <div>
                                    <img src="/Vector27.png" alt="" />
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row justify-center items-center space-x-2">
                                    <p className="text-softBlue font-medium">0</p>
                                    <p className="text-softBlue font-medium">New</p>
                                </div>
                                <div>
                                    <img src="/Vector28.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[322px] h-[153px] bg-white rounded-xl shadow-lg p-4 flex flex-col justify-around items-center">
                            <div className="flex flex-col justify-center items-center text-softBlue font-medium">
                                <p>An API key is required to display</p>
                                <p>these statistics</p>
                            </div>
                            <button className="text-white px-3 py-1 bg-red w-fit rounded-2xl font-medium text-base">
                                Get API
                            </button>
                        </div>
                        <div className="w-[322px] h-[585px] bg-white rounded-xl shadow-lg p-4 flex flex-col justify-around items-center divide-y-2 divide-softBlue/20">
                            <div className="grid gap-5 grid-cols-2">
                                <div className="w-[135px] h-[161px] items-center rounded-xl bg-mobileWhite shadow-lg flex flex-col justify-around p-4">
                                    <div>
                                        <img src="/Vector29.png" alt="" />
                                    </div>
                                    <p className="font-medium text-sm text-gray">New</p>
                                    <p className="text-sm text-gridPurple">0</p>
                                    <p className="text-softBlue text-sm">0%This month</p>
                                </div>
                                <div className="w-[135px] h-[161px] items-center rounded-xl bg-mobileWhite shadow-lg flex flex-col justify-around p-4">
                                    <div>
                                        <img src="/Vector30.png" alt="" />
                                    </div>
                                    <p className="font-medium text-sm text-gray">Approved</p>
                                    <p className="text-sm text-gridGreen">0</p>
                                    <p className="text-softBlue text-sm">0%This month</p>
                                </div>
                                <div className="w-[135px] h-[161px] items-center rounded-xl bg-mobileWhite shadow-lg flex flex-col justify-around p-4">
                                    <div>
                                        <img src="/Vector31.png" alt="" />
                                    </div>
                                    <p className="font-medium text-sm text-gray">Pending</p>
                                    <p className="text-sm text-gridRed">0</p>
                                    <p className="text-softBlue text-sm">0%This month</p>
                                </div>
                                <div className="w-[135px] h-[161px] items-center rounded-xl bg-mobileWhite shadow-lg flex flex-col justify-around p-4">
                                    <div>
                                        <img src="/Vector32.png" alt="" />
                                    </div>
                                    <p className="font-medium text-sm text-gray">Rejected</p>
                                    <p className="text-sm text-gridYellow">0</p>
                                    <p className="text-softBlue text-sm">0%This month</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-2 pt-2">
                                <p className="text-softBlue font-medium">Comments statistics</p>
                                <ReactApexChart options={pie.options} series={pie.series} type="donut" width={300} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
