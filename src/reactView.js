import React from "react"
import date from "./getTime"

export default class ReactView extends React.Component{
    constructor() {
        super()
    }

    render() {
        return <section>{ date() }</section>
    }
}